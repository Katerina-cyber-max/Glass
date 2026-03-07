import { useReducer } from 'react'
import { TABS, defaultRate, calcResult, fmt, isPrice } from './data'
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

function reducer(state, action) {
  switch (action.type) {
    case 'SWITCH_TAB':
      return { ...state, tab: action.tab, str: '', fi: 0, ti: 0, numpad: false, picker: false, rateStr: String(state.rate) }

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
      if (state.pickerMode === 'cfrom') {
        const rate = defaultRate(action.code, state.toCur)
        return { ...state, fromCur: action.code, rate, rateStr: String(rate), picker: false }
      }
      const rate = defaultRate(state.fromCur, action.code)
      return { ...state, toCur: action.code, rate, rateStr: String(rate), picker: false }
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
        const rate = defaultRate(state.toCur, state.fromCur)
        return { ...next, fromCur: state.toCur, toCur: state.fromCur, rate, rateStr: String(rate) }
      }
      return next
    }

    case 'SET_TEMP_DIR':
      return { ...state, tempDir: action.dir }

    default:
      return state
  }
}

export default function App() {
  const [S, dispatch] = useReducer(reducer, initialState)
  const td = TABS[S.tab]
  const result = calcResult(S)
  const dimmed = S.numpad || S.picker

  return (
    <div className="phone">
      <div className={`screen ${td.cls}`}>
        <div className={`content-wrap${dimmed ? ' dimmed' : ''}`}>
          <div className="island" />
          <div className="content">
            <Screen S={S} dispatch={dispatch} td={td} result={result} />
          </div>
        </div>
        <TabBar S={S} dispatch={dispatch} />
        <NumpadSheet S={S} dispatch={dispatch} td={td} />
        <PickerSheet S={S} dispatch={dispatch} td={td} />
      </div>
    </div>
  )
}
