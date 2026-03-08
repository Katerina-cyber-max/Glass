import { useState, useEffect } from 'react'

const CACHE_KEY = 'gotcha_rates'
const CACHE_TTL = 24 * 60 * 60 * 1000 // 24 часа

function readCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const { data, ts } = JSON.parse(raw)
    if (Date.now() - ts > CACHE_TTL) return null
    return data
  } catch {
    return null
  }
}

function writeCache(data) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data, ts: Date.now() }))
  } catch {}
}

// Возвращает { EUR: 1, USD: ..., ... } или null если данных нет.
// При наличии кеша отдаёт его мгновенно и обновляет в фоне.
export default function useRates() {
  const [rates, setRates] = useState(() => readCache())

  useEffect(() => {
    fetch('https://api.frankfurter.app/latest')
      .then(r => r.json())
      .then(({ rates }) => {
        const data = { EUR: 1, ...rates }
        writeCache(data)
        setRates(data)
      })
      .catch(() => {}) // молча оставляем кеш или null
  }, [])

  return rates
}
