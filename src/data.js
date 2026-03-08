export const SYM = {
  USD: '$', EUR: '€', GBP: '£', RUB: '₽', AED: 'د.إ',
  JPY: '¥', CNY: '¥', INR: '₹', BRL: 'R$', CAD: 'C$',
  AUD: 'A$', CHF: 'Fr', MXN: '$', KRW: '₩', SGD: 'S$', TRY: '₺',
}

export const CURRENCIES = [
  { code: 'USD', name: 'US Dollar',         flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro',              flag: '🇪🇺' },
  { code: 'GBP', name: 'British Pound',     flag: '🇬🇧' },
  { code: 'RUB', name: 'Russian Ruble',     flag: '🇷🇺' },
  { code: 'AED', name: 'UAE Dirham',        flag: '🇦🇪' },
  { code: 'JPY', name: 'Japanese Yen',      flag: '🇯🇵' },
  { code: 'CNY', name: 'Chinese Yuan',      flag: '🇨🇳' },
  { code: 'INR', name: 'Indian Rupee',      flag: '🇮🇳' },
  { code: 'BRL', name: 'Brazilian Real',    flag: '🇧🇷' },
  { code: 'CAD', name: 'Canadian Dollar',   flag: '🇨🇦' },
  { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺' },
  { code: 'CHF', name: 'Swiss Franc',       flag: '🇨🇭' },
  { code: 'MXN', name: 'Mexican Peso',      flag: '🇲🇽' },
  { code: 'KRW', name: 'South Korean Won',  flag: '🇰🇷' },
  { code: 'SGD', name: 'Singapore Dollar',  flag: '🇸🇬' },
  { code: 'TRY', name: 'Turkish Lira',      flag: '🇹🇷' },
]

export const TABS = {
  weight: {
    cls: 'tab-weight', name: 'Weight',
    fromLabel: 'WEIGHT', toLabel: 'WEIGHT',
    from: [
      { id: 'lbs', name: 'Pounds',      cvt: n => n * 0.453592 },
      { id: 'oz',  name: 'Ounces',      cvt: n => n * 0.0283495 },
      { id: 'st',  name: 'Stone',       cvt: n => n * 6.35029 },
    ],
    to: [
      { id: 'kg',  name: 'Kilograms',   cvt: n => n },
      { id: 'g',   name: 'Grams',       cvt: n => n * 1000 },
      { id: 'mg',  name: 'Milligrams',  cvt: n => n * 1e6 },
    ],
    fpa: i => i === 0 ? 'pp-wa' : 'pp-wd',
    tpa: i => i === 0 ? 'pp-ba' : 'pp-bd',
    fck: 'ck-w', tck: 'ck-b',
  },
  distance: {
    cls: 'tab-distance', name: 'Distance',
    fromLabel: 'DISTANCE', toLabel: 'DISTANCE',
    from: [
      { id: 'mi', name: 'Miles',        cvt: n => n * 1609.344 },
      { id: 'ft', name: 'Feet',         cvt: n => n * 0.3048 },
      { id: 'yd', name: 'Yards',        cvt: n => n * 0.9144 },
    ],
    to: [
      { id: 'km', name: 'Kilometers',   cvt: n => n / 1000 },
      { id: 'm',  name: 'Meters',       cvt: n => n },
      { id: 'cm', name: 'Centimeters',  cvt: n => n * 100 },
    ],
    fpa: i => i === 0 ? 'pp-ba' : 'pp-bd',
    tpa: i => i === 0 ? 'pp-ba' : 'pp-bd',
    fck: 'ck-b', tck: 'ck-b',
  },
  temp: {
    cls: 'tab-temp', name: 'Temp',
    fromLabel: 'TEMPERATURE', toLabel: 'TEMPERATURE',
    from: [
      { id: '°F', name: 'Fahrenheit',   cvt: n => (n - 32) * 5 / 9 },
      { id: '°C', name: 'Celsius',      cvt: n => n },
    ],
    to: [
      { id: '°C', name: 'Celsius',      cvt: n => n },
      { id: '°F', name: 'Fahrenheit',   cvt: n => n * 9 / 5 + 32 },
    ],
    fpa: i => i === 0 ? 'pp-ta' : 'pp-td',
    tpa: i => i === 0 ? 'pp-ta' : 'pp-td',
    fck: 'ck-t', tck: 'ck-t',
  },
  pkg: {
    cls: 'tab-pkg', name: 'Price/kg', price: true,
    fromLabel: 'PRICE PER', toLabel: 'PRICE PER',
    from: [
      { id: 'lb',   name: 'Pound',      cvt: n => n * 2.20462 },
      { id: 'oz',   name: 'Ounce',      cvt: n => n * 35.274 },
    ],
    to: [
      { id: 'kg',   name: 'Kilogram',   cvt: n => n },
      { id: '100g', name: '100 Grams',  cvt: n => n / 10 },
    ],
    fpa: i => i === 0 ? 'pp-oa' : 'pp-od',
    tpa: i => i === 0 ? 'pp-ca' : 'pp-cd',
    fck: 'ck-o', tck: 'ck-c',
  },
  pgal: {
    cls: 'tab-pgal', name: 'Price/L', price: true,
    fromLabel: 'PRICE PER', toLabel: 'PRICE PER',
    from: [
      { id: 'gal',   name: 'Gallon',    cvt: n => n / 3.78541 },
      { id: 'qt',    name: 'Quart',     cvt: n => n / 0.946353 },
    ],
    to: [
      { id: 'L',     name: 'Liter',     cvt: n => n },
      { id: '100mL', name: '100 mL',    cvt: n => n / 10 },
    ],
    fpa: i => i === 0 ? 'pp-pua' : 'pp-pud',
    tpa: i => i === 0 ? 'pp-ga' : 'pp-gd',
    fck: 'ck-pu', tck: 'ck-g',
  },
}

export const TAB_ORDER = ['weight', 'distance', 'temp', 'pkg', 'pgal']

export function isPrice(tab) {
  return TABS[tab]?.price === true
}

export function fmt(n) {
  if (n === null || n === undefined || isNaN(n)) return '—'
  if (Math.abs(n) < 0.001 && n !== 0) return n.toExponential(3)
  if (Math.abs(n) >= 1e6) return n.toExponential(3)
  const d = Math.abs(n) < 10 ? 4 : Math.abs(n) < 100 ? 3 : Math.abs(n) < 1000 ? 2 : 1
  return parseFloat(n.toFixed(d)).toString()
}

export function calcResult(S) {
  const td = TABS[S.tab]
  const fi = S.tab === 'temp' ? (S.tempDir === 'FtoC' ? 0 : 1) : S.fi
  const ti = S.tab === 'temp' ? (S.tempDir === 'FtoC' ? 0 : 1) : S.ti
  const n = parseFloat(S.str)
  if (!S.str || isNaN(n)) return null
  const base = td.from[fi].cvt(n)
  let res = td.to[ti].cvt(base)
  if (td.price && S.fromCur !== S.toCur) {
    if (S.rate === null) return null // курсы ещё не загружены
    res *= S.rate
  }
  return res
}
