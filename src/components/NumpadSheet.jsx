import { isPrice } from '../data'

const KEYS = ['1','2','3','4','5','6','7','8','9','.','0','⌫']

export default function NumpadSheet({ S, dispatch, td }) {
  const price = isPrice(S.tab)
  const isRate = S.numpadTarget === 'rate'
  const fi = S.tab === 'temp' ? (S.tempDir === 'FtoC' ? 0 : 1) : S.fi
  const fromUnit = td.from[fi]

  const context = isRate
    ? `EXCHANGE RATE · ${S.fromCur} → ${S.toCur}`
    : `${td.name.toUpperCase()} · ${price ? `${S.fromCur}/${fromUnit.id}` : fromUnit.id}`

  const unitTag = isRate ? S.toCur : (price ? S.fromCur : fromUnit.id)
  const displayStr = isRate ? S.rateStr : S.str

  return (
    <div className={`sheet-overlay${S.numpad ? ' open' : ''}`}>
      {S.numpad && <div className="sheet-bg" onClick={() => dispatch({ type: 'CLOSE_NUMPAD' })} />}
      <div className="sheet-glass">
        <div className="sheet-handle" />
        <div className="sheet-context">{context}</div>
        <div className="sheet-num-row">
          <div className="sheet-num">
            {displayStr || '0'}
            {S.numpad && <span className="cursor" />}
          </div>
          <div className="sheet-unit-tag">{unitTag}</div>
        </div>
        <div className="key-grid">
          {KEYS.map(k => {
            if (k === '⌫') return (
              <div key="del" className="key key-del" onClick={() => dispatch({ type: 'NDEL' })}>⌫</div>
            )
            return (
              <div key={k} className="key" onClick={() => dispatch({ type: 'NKEY', ch: k })}>{k}</div>
            )
          })}
          <div className="key key-empty" />
          <div
            className={`key key-done${price ? ' price-done' : ''}`}
            onClick={() => dispatch({ type: 'CLOSE_NUMPAD' })}
          >
            Done
          </div>
          <div className="key key-empty" />
        </div>
      </div>
    </div>
  )
}
