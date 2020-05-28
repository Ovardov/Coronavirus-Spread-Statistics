import { createContext, useEffect, useState, useContext } from 'react'
import { dataService } from '../services/dataService'

export const StatisticContext = createContext({ allCases: {}, allCountries: [] })

export const useStatistics = () => useContext(StatisticContext);

export const useStatisticsProvider = () => {
  const [allCountries, setAllCountries] = useState([])
  const [allCases, setAllCases] = useState({})

  useEffect(() => {
    (async function getAllStatisctics() {
      try {
        const casesRes = await dataService.loadAllCases()
        const countriesRes = await dataService.loadAllCountries()

        const formattedAllCases = {
          ...casesRes,
          casesPerOneMillion: Math.floor(casesRes.casesPerOneMillion),
          deathsPerOneMillion: Math.floor(casesRes.deathsPerOneMillion),
          testsPerOneMillion: Math.floor(casesRes.testsPerOneMillion),
        };

        setAllCases(formattedAllCases)

        const formattedCountries = countriesRes
          .sort((a, b) => b.cases - a.cases)
          .map(country => {
            return {
              ...country,
              casesPerOneMillion: Math.floor(country.casesPerOneMillion),
              deathsPerOneMillion: Math.floor(country.deathsPerOneMillion),
              testsPerOneMillion: Math.floor(country.testsPerOneMillion),
            }
          });

        setAllCountries(formattedCountries)
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
