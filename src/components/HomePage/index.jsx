import React, { useState, useEffect } from 'react'
import Map from '../Map'
import InfoBox from '../InfoBox'
import dataService from '../../services/dataService'
import styles from './home-page.module.scss'

function HomePage() {
  const [allCases, setAllCases] = useState({
    confirmed: null,
    recovered: null,
    deaths: null
  })
  const [allCountries, setAllCountries] = useState({})
  const [searchedCountry, setSearchedCountry] = useState('')
  const [searchedCountryStats, setSearchedCountryStats] = useState({});

  const markers = [
    {
      latitude: 42.7219285,
      longitude: 24.422234,
      country: 'Bulgaria',
      ...allCountries[0]
    }
  ]

  useEffect(() => {
    (async function getCases() {
      try {
        const casesRes = await dataService.loadAllCases()
        const countriesRes = await dataService.loadAllCountries()

        setAllCases({
          cases: casesRes.cases,
          recovered: casesRes.recovered,
          deaths: casesRes.deaths
        })
        setAllCountries(countriesRes)
      } catch (e) {
        console.error('Load all cases', e)
      }
    })()
  }, [])

  const findCountry = (e) => {
    e.preventDefault();
    
    const country = Object.values(allCountries).filter(country => country.country === searchedCountry)[0];

    setSearchedCountryStats(country);
  }

  return (
    <div className={styles.container}>
      <InfoBox allCases={allCases} setSearchedCountry={setSearchedCountry} findCountry={findCountry} searchedCountryStats={searchedCountryStats} />
      <Map markers={markers} />
    </div>
  )
}

export default HomePage