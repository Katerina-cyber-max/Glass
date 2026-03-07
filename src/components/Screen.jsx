import { useRef, useEffect } from 'react'
import { SYM, fmt, isPrice } from '../data'

const ACCENT_FROM = { weight: 'aw', distance: 'ab', temp: 'at', pkg: 'at', pgal: 'at' }
const ACCENT_TO   = { weight: 'ab', distance: 'ab', temp: 'at', pkg: 'ac', pgal: 'ac' }

export default function Screen({ S, dispatch, td, result, liveRates }) {
  const price = isPrice(S.tab)
  const fi = S.tab === 'temp' ? (S.tempDir === 'FtoC' ? 0 : 1) : S.fi
  const ti = S.tab === 'temp' ? (S.tempDir === 'FtoC' ? 0 : 1) : S.ti
  const fromUnit = td.from[fi]
  const toUnit   = td.to[ti]
  const showRate = price && S.fromCur !== S.toCur

  // Pop animation on result change
  const toValRef = useRef(null)
  const prevResult = useRef(null)
  useEffect(() => {
    if (result !== prevResult.current && toValRef.current) {
      toValRef.current.classList.remove('pop')
      void toValRef.current.offsetWidth
      toValRef.current.classList.add('pop')
    }
    prevResult.current = result
  }, [result])

  // Formula text
  function getFormula() {
    if (S.tab === 'temp') {
      return S.tempDir === 'FtoC' ? '°C = (°F − 32) × ⁵⁄₉' : '°F = °C × ⁹⁄₅ + 32'
    }
    const base = td.from[fi].cvt(1)
    let res = td.to[ti].cvt(base)
    if (price && S.fromCur !== S.toCur) res *= S.rate
    const cs  = price ? (SYM[S.fromCur] || S.fromCur) : ''
    const ct2 = price ? (SYM[S.toCur]   || S.toCur)   : ''
    if (price) return `${cs}1/${fromUnit.id} × ${fmt(res)} = ${ct2}1/${toUnit.id}`
    return `1 ${fromUnit.id} = ${fmt(res)} ${toUnit.id}`
  }

  const showCursor = S.numpad && S.numpadTarget === 'main'

  return (
    <>
      {/* Header */}
      <div className="hdr">
        <div className="hdr-title">Gotcha</div>
        <div className="hdr-sub">Finally, the world makes sense.<br />Convert US units &amp; prices.</div>
      </div>

      {/* FROM label */}
      <div className="label-row">
        <span className={`accent-chip ${ACCENT_FROM[S.tab]}`}>{td.fromLabel}</span>
        <span className="label-text">convert from</span>
      </div>

      {/* FROM field */}
      <div
        className={`field-glass${price ? ' price-from' : ''}`}
        onClick={() => dispatch({ type: 'OPEN_NUMPAD', target: 'main' })}
      >
        <div className="field-val">
          {S.str
            ? <>{S.str}{showCursor && <span className="cursor" />}</>
            : <span className="placeholder">0{showCursor && <span className="cursor" />}</span>
          }
        </div>

        {!price ? (
          <div
            className="unit-badge"
            onClick={e => { e.stopPropagation(); dispatch({ type: 'OPEN_PICKER', mode: 'from' }) }}
          >
            {fromUnit.id}
          </div>
        ) : (
          <div className="split-badge">
            <div
              className="badge-cur from-cur"
              onClick={e => { e.stopPropagation(); dispatch({ type: 'OPEN_PICKER', mode: 'cfrom' }) }}
            >
              {S.fromCur}
            </div>
            <div
              className="badge-unit from-unit"
              onClick={e => { e.stopPropagation(); dispatch({ type: 'OPEN_PICKER', mode: 'from' }) }}
            >
              /{fromUnit.id}
            </div>
          </div>
        )}
      </div>

      {/* Swap / Temp toggle */}
      {S.tab === 'temp' ? (
        <div className="temp-toggle">
          <button
            className={`temp-btn${S.tempDir === 'FtoC' ? ' active' : ''}`}
            onClick={() => dispatch({ type: 'SET_TEMP_DIR', dir: 'FtoC' })}
          >
            °F → °C
          </button>
          <button
            className={`temp-btn${S.tempDir === 'CtoF' ? ' active' : ''}`}
            onClick={() => dispatch({ type: 'SET_TEMP_DIR', dir: 'CtoF' })}
          >
            °C → °F
          </button>
        </div>
      ) : (
        <div className="swap-area">
          <button className="swap-btn" onClick={() => dispatch({ type: 'SWAP' })} aria-label="Swap units">
            ⇅
          </button>
        </div>
      )}

      {/* TO label */}
      <div className="label-row">
        <span className={`accent-chip ${ACCENT_TO[S.tab]}`}>{td.toLabel}</span>
        <span className="label-text">result in</span>
      </div>

      {/* TO field */}
      <div className={`to-field${price ? ' price-to' : ''}`}>
        <div className="to-val" ref={toValRef}>
          {result !== null ? fmt(result) : '—'}
        </div>

        {!price ? (
          <div
            className="unit-badge to-badge"
            onClick={() => dispatch({ type: 'OPEN_PICKER', mode: 'to' })}
          >
            {toUnit.id}
          </div>
        ) : (
          <div className="split-badge">
            <div
              className="badge-cur to-cur"
              onClick={() => dispatch({ type: 'OPEN_PICKER', mode: 'cto' })}
            >
              {S.toCur}
            </div>
            <div
              className="badge-unit to-unit"
              onClick={() => dispatch({ type: 'OPEN_PICKER', mode: 'to' })}
            >
              /{toUnit.id}
            </div>
          </div>
        )}
      </div>

      {/* Rate row */}
      {showRate && (
        <div className="rate-row">
          <span>1 {S.fromCur} =</span>
          <button className="rate-trigger" onClick={() => dispatch({ type: 'OPEN_NUMPAD', target: 'rate' })}>
            {S.rateStr || String(S.rate)}
          </button>
          <span>{S.toCur}</span>
          {liveRates && <span className="live-badge">live</span>}
        </div>
      )}

      {/* Formula */}
      <div className="formula-row">{getFormula()}</div>
    </>
  )
}
