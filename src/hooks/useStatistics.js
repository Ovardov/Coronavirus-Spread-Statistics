import { createContext, useEffect, useState, useContext } from 'react'
import { dataService } from '../services/dataService'

export const StatisticContext = createContext({allCases: {}, allCountries: []})

export const useStatistics = () => useContext(StatisticContext);

export const useStatisticsProvider = () => {
  const [allCountries, setAllCountries] = useState([])
  const [allCases, setAllCases] = useState({})

  useEffect(() => {
    (async function getAllStatisctics() {
      try {
        const casesRes = await dataService.loadAllCases()
        const countriesRes = await dataService.loadAllCountries()

        setAllCases({
          cases: casesRes.cases,
          recovered: casesRes.recovered,
          deaths: casesRes.deaths
        })

        const filteredCountries = countriesRes.sort((a, b) => b.cases - a.cases)

        setAllCountries(filteredCountries)

      } catch (e) {
        console.error('Load all cases', e)
      }
    })()

  }, [])

  return {
    allCases,
    allCountries
  }
}
