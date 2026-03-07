export const SYM = {
  USD: '$', EUR: '€', GBP: '£', RUB: '₽', AED: 'د.إ',
  JPY: '¥', CNY: '¥', INR: '₹', BRL: 'R$', CAD: 'C$',
  AUD: 'A$', CHF: 'Fr', MXN: '$', KRW: '₩', SGD: 'S$', TRY: '₺',
}

export const CURRENCIES = [
  { code: 'USD', name: 'US Dollar',        flag: '🇺🇸', rates: { EUR:0.92, GBP:0.79, RUB:92.5, AED:3.67, JPY:149.2, CNY:7.24, INR:83.1, BRL:4.97, CAD:1.36, AUD:1.53, CHF:0.89, MXN:17.2, KRW:1325, SGD:1.34, TRY:30.5 } },
  { code: 'EUR', name: 'Euro',             flag: '🇪🇺', rates: { USD:1.09, GBP:0.86, RUB:100.8, AED:4.00, JPY:162.4, CNY:7.88, INR:90.4, BRL:5.41, CAD:1.48, AUD:1.67, CHF:0.97, MXN:18.7, KRW:1443, SGD:1.46, TRY:33.2 } },
  { code: 'GBP', name: 'British Pound',    flag: '🇬🇧', rates: { USD:1.27, EUR:1.16, RUB:117.2, AED:4.66, JPY:188.9, CNY:9.17, INR:105.1, BRL:6.29, CAD:1.72, AUD:1.94, CHF:1.13, MXN:21.8, KRW:1678, SGD:1.70, TRY:38.6 } },
  { code: 'RUB', name: 'Russian Ruble',    flag: '🇷🇺', rates: { USD:0.0108, EUR:0.0099, GBP:0.0085, AED:0.040, JPY:1.61, CNY:0.078, INR:0.90, BRL:0.054, CAD:0.015, AUD:0.017, CHF:0.0096, MXN:0.19, KRW:14.3, SGD:0.015, TRY:0.33 } },
  { code: 'AED', name: 'UAE Dirham',       flag: '🇦🇪', rates: { USD:0.272, EUR:0.250, GBP:0.215, RUB:25.2, JPY:40.6, CNY:1.97, INR:22.6, BRL:1.35, CAD:0.370, AUD:0.417, CHF:0.243, MXN:4.68, KRW:361, SGD:0.365, TRY:8.31 } },
  { code: 'JPY', name: 'Japanese Yen',     flag: '🇯🇵', rates: { USD:0.0067, EUR:0.0062, GBP:0.0053, RUB:0.62, AED:0.0246, CNY:0.049, INR:0.557, BRL:0.033, CAD:0.0091, AUD:0.010, CHF:0.006, MXN:0.115, KRW:8.88, SGD:0.009, TRY:0.204 } },
  { code: 'CNY', name: 'Chinese Yuan',     flag: '🇨🇳', rates: { USD:0.138, EUR:0.127, GBP:0.109, RUB:12.8, AED:0.507, JPY:20.6, INR:11.5, BRL:0.686, CAD:0.188, AUD:0.212, CHF:0.123, MXN:2.38, KRW:183, SGD:0.185, TRY:4.21 } },
  { code: 'INR', name: 'Indian Rupee',     flag: '🇮🇳', rates: { USD:0.012, EUR:0.011, GBP:0.0095, RUB:1.11, AED:0.0443, JPY:1.80, CNY:0.087, BRL:0.060, CAD:0.016, AUD:0.018, CHF:0.011, MXN:0.207, KRW:15.94, SGD:0.016, TRY:0.367 } },
  { code: 'BRL', name: 'Brazilian Real',   flag: '🇧🇷', rates: { USD:0.201, EUR:0.185, GBP:0.159, RUB:18.6, AED:0.739, JPY:30.0, CNY:1.46, INR:16.72, CAD:0.274, AUD:0.308, CHF:0.179, MXN:3.46, KRW:266, SGD:0.270, TRY:6.14 } },
  { code: 'CAD', name: 'Canadian Dollar',  flag: '🇨🇦', rates: { USD:0.735, EUR:0.676, GBP:0.581, RUB:68.0, AED:2.70, JPY:109.7, CNY:5.32, INR:61.1, BRL:3.65, AUD:1.12, CHF:0.654, MXN:12.6, KRW:974, SGD:0.986, TRY:22.4 } },
  { code: 'AUD', name: 'Australian Dollar',flag: '🇦🇺', rates: { USD:0.654, EUR:0.601, GBP:0.516, RUB:60.5, AED:2.40, JPY:97.6, CNY:4.73, INR:54.3, BRL:3.25, CAD:0.890, CHF:0.582, MXN:11.2, KRW:867, SGD:0.877, TRY:19.9 } },
  { code: 'CHF', name: 'Swiss Franc',      flag: '🇨🇭', rates: { USD:1.12, EUR:1.03, GBP:0.885, RUB:103.6, AED:4.12, JPY:167.3, CNY:8.11, INR:93.0, BRL:5.57, CAD:1.53, AUD:1.72, MXN:19.3, KRW:1487, SGD:1.50, TRY:34.2 } },
  { code: 'MXN', name: 'Mexican Peso',     flag: '🇲🇽', rates: { USD:0.058, EUR:0.053, GBP:0.046, RUB:5.38, AED:0.214, JPY:8.68, CNY:0.421, INR:4.83, BRL:0.289, CAD:0.0793, AUD:0.089, CHF:0.052, KRW:77.1, SGD:0.0779, TRY:1.77 } },
  { code: 'KRW', name: 'South Korean Won', flag: '🇰🇷', rates: { USD:0.00075, EUR:0.00069, GBP:0.00060, RUB:0.070, AED:0.00277, JPY:0.113, CNY:0.00546, INR:0.0627, BRL:0.00375, CAD:0.00103, AUD:0.00116, CHF:0.000673, MXN:0.013, SGD:0.00101, TRY:0.023 } },
  { code: 'SGD', name: 'Singapore Dollar', flag: '🇸🇬', rates: { USD:0.746, EUR:0.685, GBP:0.589, RUB:69.0, AED:2.74, JPY:111.3, CNY:5.40, INR:62.0, BRL:3.71, CAD:1.014, AUD:1.14, CHF:0.664, MXN:12.8, KRW:988, TRY:22.8 } },
  { code: 'TRY', name: 'Turkish Lira',     flag: '🇹🇷', rates: { USD:0.033, EUR:0.030, GBP:0.026, RUB:3.03, AED:0.120, JPY:4.90, CNY:0.237, INR:2.72, BRL:0.163, CAD:0.045, AUD:0.050, CHF:0.029, MXN:0.565, KRW:43.5, SGD:0.044 } },
]

export function defaultRate(from, to) {
  if (from === to) return 1
  const c = CURRENCIES.find(c => c.code === from)
  return c?.rates[to] ?? 1
}

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
  if (td.price && S.fromCur !== S.toCur) res *= S.rate
  return res
}
