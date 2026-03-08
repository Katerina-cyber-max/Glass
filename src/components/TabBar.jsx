import { TAB_ORDER } from '../data'

const ICONS = {
  weight: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18M6 21h12M3 7l9-4 9 4M6 7l-2 7h4L6 7zM18 7l-2 7h4L18 7z"/>
    </svg>
  ),
  distance: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="10" rx="2"/>
      <path d="M6 7v4M10 7v2M14 7v4M18 7v2"/>
    </svg>
  ),
  temp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 14.76V3.5a2 2 0 0 0-4 0v11.26a4 4 0 1 0 4 0z"/>
    </svg>
  ),
  pkg: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41L13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
      <line x1="7" y1="7" x2="7.01" y2="7"/>
    </svg>
  ),
  pgal: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
    </svg>
  ),
}

const TAB_LABELS = {
  weight:   'Weight',
  distance: 'Distance',
  temp:     'Temp',
  pkg:      'Price/kg',
  pgal:     'Price/L',
}

export default function TabBar({ S, dispatch }) {
  return (
    <div className="tabbar">
      {TAB_ORDER.map(tab => {
        const active = S.tab === tab
        return (
          <button
            key={tab}
            className={`tab-btn${active ? ' tab-active' : ''}`}
            onClick={() => dispatch({ type: 'SWITCH_TAB', tab })}
          >
            <span className="tab-icon">{ICONS[tab]}</span>
            <span className="tab-label">{TAB_LABELS[tab]}</span>
            {active && <span className="tab-dot" />}
          </button>
        )
      })}
    </div>
  )
}
