import { useReducer, useEffect, useRef } from 'react'
import { TABS, defaultRate, calcResult, fmt, isPrice } from './data'
import useRates from './hooks/useRates'
import Screen from './components/Screen'
import NumpadSheet from './components/NumpadSheet'
import PickerSheet from './components/PickerSheet'
import TabBar from './components/TabBar'

const initialState = {
  tab: 'weight',
  str: '',
  fi: 0,
  ti: 0,
  numpad: false,
  numpadTarget: 'main',
  rateStr: '0.92',
  picker: false,
  pickerMode: null,
  fromCur: 'USD',
  toCur: 'EUR',
  rate: 0.92,
  tempDir: 'FtoC',
}

function fmtRate(r) {
  return parseFloat(r.toFixed(4)).toString()
}

function reducer(state, action) {
  switch (action.type) {
    case 'SWITCH_TAB':
      return { ...state, tab: action.tab, str: '', fi: 0, ti: 0, numpad: false, picker: false, rateStr: fmtRate(state.rate) }

    case 'OPEN_NUMPAD':
      if (state.picker) return state
      return { ...state, numpad: true, numpadTarget: action.target }

    case 'CLOSE_NUMPAD':
      return { ...state, numpad: false }

    case 'NKEY': {
      const isRate = state.numpadTarget === 'rate'
      const str = isRate ? state.rateStr : state.str
      if (action.ch === '.' && str.includes('.')) return state
      let next
      if (str === '0' && action.ch !== '.') next = action.ch
      else if (str.length < 12) next = str + action.ch
      else return state
      if (isRate) {
        const v = parseFloat(next)
        return { ...state, rateStr: next, rate: (!isNaN(v) && v > 0) ? v : state.rate }
      }
      return { ...state, str: next }
    }

    case 'NDEL': {
      const isRate = state.numpadTarget === 'rate'
      if (isRate) return { ...state, rateStr: state.rateStr.slice(0, -1) || '0' }
      return { ...state, str: state.str.slice(0, -1) }
    }

    case 'OPEN_PICKER':
      if (state.numpad) return state
      return { ...state, picker: true, pickerMode: action.mode }

    case 'CLOSE_PICKER':
      return { ...state, picker: false }

    case 'PICK_UNIT':
      if (state.pickerMode === 'from') return { ...state, fi: action.idx, picker: false }
      return { ...state, ti: action.idx, picker: false }

    case 'PICK_CUR': {
      // action.rate is injected by smartDispatch using live data
      if (state.pickerMode === 'cfrom') {
        const rate = action.rate ?? defaultRate(action.code, state.toCur)
        return { ...state, fromCur: action.code, rate, rateStr: fmtRate(rate), picker: false }
      }
      const rate = action.rate ?? defaultRate(state.fromCur, action.code)
      return { ...state, toCur: action.code, rate, rateStr: fmtRate(rate), picker: false }
    }

    case 'SWAP': {
      if (state.tab === 'temp') return state
      const td = TABS[state.tab]
      const res = calcResult(state)
      const fid = td.from[state.fi].id
      const tid = td.to[state.ti].id
      const nfi = td.to.findIndex(o => o.id === fid)
      const nti = td.from.findIndex(o => o.id === tid)
      const next = {
        ...state,
        str: res !== null ? fmt(res) : state.str,
        fi: nfi >= 0 ? nfi : 0,
        ti: nti >= 0 ? nti : 0,
      }
      if (isPrice(state.tab) && state.fromCur !== state.toCur) {
        const rate = action.rate ?? defaultRate(state.toCur, state.fromCur)
        return { ...next, fromCur: state.toCur, toCur: state.fromCur, rate, rateStr: fmtRate(rate) }
      }
      return next
    }

    case 'SET_RATE':
      return { ...state, rate: action.rate, rateStr: fmtRate(action.rate) }

    case 'SET_TEMP_DIR':
      return { ...state, tempDir: action.dir }

    default:
      return state
  }
}

export default function App() {
  const [S, dispatch] = useReducer(reducer, initialState)
  const { rates: liveRates, loading: ratesLoading } = useRates()
  const liveRatesRef = useRef(null)

  // Keep ref in sync for use in smartDispatch
  useEffect(() => {
    if (liveRates) liveRatesRef.current = liveRates
  }, [liveRates])

  // Update displayed rate when live data first arrives
  useEffect(() => {
    if (liveRates) {
      dispatch({ type: 'SET_RATE', rate: computeRate(S.fromCur, S.toCur, liveRates) })
    }
  }, [liveRates]) // eslint-disable-line react-hooks/exhaustive-deps

  function computeRate(from, to, rates) {
    const lr = rates ?? liveRatesRef.current
    if (!lr || from === to) return defaultRate(from, to)
    const f = lr[from], t = lr[to]
    if (!f || !t) return defaultRate(from, to)
    return t / f
  }

  // Injects live rates into currency-related actions before dispatching
  function smartDispatch(action) {
    if (action.type === 'PICK_CUR') {
      const newFrom = S.pickerMode === 'cfrom' ? action.code : S.fromCur
      const newTo   = S.pickerMode !== 'cfrom' ? action.code : S.toCur
      return dispatch({ ...action, rate: computeRate(newFrom, newTo) })
    }
    if (action.type === 'SWAP' && isPrice(S.tab)) {
      return dispatch({ ...action, rate: computeRate(S.toCur, S.fromCur) })
    }
    dispatch(action)
  }

  const td = TABS[S.tab]
  const result = calcResult(S)
  const dimmed = S.numpad || S.picker

  return (
    <div className="phone">
      <div className={`screen ${td.cls}`}>
        <div className={`content-wrap${dimmed ? ' dimmed' : ''}`}>
          <div className="island" />
          <div className="content">
            <Screen
              S={S}
              dispatch={smartDispatch}
              td={td}
              result={result}
              liveRates={!ratesLoading && !!liveRates}
            />
          </div>
        </div>
        <TabBar S={S} dispatch={smartDispatch} />
        <NumpadSheet S={S} dispatch={smartDispatch} td={td} />
        <PickerSheet S={S} dispatch={smartDispatch} td={td} />
      </div>
    </div>
  )
}
