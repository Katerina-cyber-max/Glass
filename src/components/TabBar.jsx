import { TAB_ORDER, isPrice } from '../data'

const TAB_META = {
  weight:   { icon: '⚖️',  label: 'Weight'   },
  distance: { icon: '📏',  label: 'Distance' },
  temp:     { icon: '🌡️', label: 'Temp'     },
  pkg:      { icon: '📌',  label: 'Price/kg' },
  pgal:     { icon: '⛽',  label: 'Price/L'  },
}

function actClass(tab) {
  if (isPrice(tab)) return 'act-c'
  if (tab === 'weight')   return 'act-w'
  if (tab === 'distance') return 'act-b'
  return 'act-t'
}

export default function TabBar({ S, dispatch }) {
  return (
    <div className="tabbar">
      {TAB_ORDER.map(tab => {
        const active = S.tab === tab
        return (
          <button
            key={tab}
            className={`tab-btn${active ? ` ${actClass(tab)}` : ''}`}
            onClick={() => dispatch({ type: 'SWITCH_TAB', tab })}
          >
            <span className="tab-icon">{TAB_META[tab].icon}</span>
            <span className="tab-label">{TAB_META[tab].label}</span>
            {active && <span className="tab-dot" />}
          </button>
        )
      })}
    </div>
  )
}
