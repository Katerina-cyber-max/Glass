import { useState, useEffect } from 'react'

// Fetches latest rates from frankfurter.app (ECB data, updates daily)
// Returns all rates relative to EUR as base
export default function useRates() {
  const [rates, setRates] = useState(null) // { EUR: 1, USD: 1.09, GBP: 0.86, ... }
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.frankfurter.app/latest')
      .then(r => r.json())
      .then(data => {
        setRates({ EUR: 1, ...data.rates })
        setLoading(false)
      })
      .catch(() => setLoading(false)) // silently fall back to hardcoded rates
  }, [])

  return { rates, loading }
}
