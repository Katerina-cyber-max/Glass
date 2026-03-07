import { CURRENCIES } from '../data'

export default function PickerSheet({ S, dispatch, td }) {
  const isCur  = S.pickerMode === 'cfrom' || S.pickerMode === 'cto'
  const isFrom = S.pickerMode === 'from'  || S.pickerMode === 'cfrom'
  const fi = S.tab === 'temp' ? (S.tempDir === 'FtoC' ? 0 : 1) : S.fi
  const ti = S.tab === 'temp' ? (S.tempDir === 'FtoC' ? 0 : 1) : S.ti
  const units = isFrom ? td.from : td.to

  return (
    <div className={`sheet-overlay${S.picker ? ' open' : ''}`}>
      {S.picker && <div className="sheet-bg" onClick={() => dispatch({ type: 'CLOSE_PICKER' })} />}
      <div className="sheet-glass">
        <div className="sheet-handle" />
        <div className="sheet-context">
          {isCur ? 'SELECT CURRENCY' : `SELECT ${isFrom ? 'FROM' : 'TO'} UNIT`}
        </div>
        <div className="picker-list">
          {isCur
            ? CURRENCIES.map(c => (
                <div
                  key={c.code}
                  className="cur-item"
                  onClick={() => dispatch({ type: 'PICK_CUR', code: c.code })}
                >
                  <span className="cur-flag">{c.flag}</span>
                  <div className="cur-info">
                    <div className="cur-code">{c.code}</div>
                    <div className="cur-name">{c.name}</div>
                  </div>
                  {((S.pickerMode === 'cfrom' && S.fromCur === c.code) ||
                    (S.pickerMode === 'cto'   && S.toCur   === c.code)) && (
                    <div className={`ck ${td.tck}`}>✓</div>
                  )}
                </div>
              ))
            : units.map((u, idx) => {
                const active = isFrom ? fi === idx : ti === idx
                return (
                  <div
                    key={u.id}
                    className="unit-item"
                    onClick={() => dispatch({ type: 'PICK_UNIT', idx })}
                  >
                    <span className={`unit-pill ${isFrom ? td.fpa(idx) : td.tpa(idx)}`}>{u.id}</span>
                    <span className="unit-name">{u.name}</span>
                    {active && <div className={`ck ${isFrom ? td.fck : td.tck}`}>✓</div>}
                  </div>
                )
              })
          }
        </div>
      </div>
    </div>
  )
}
