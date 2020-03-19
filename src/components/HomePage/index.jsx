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
  const [marker, setMarker] = useState(null)
  const [pickedCountryFromMap, setPickedCountryFromMap] = useState(null)

  useEffect(() => {
    ;(async function getCases() {
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

  // useEffect(() => {
  //   async function getCountryData() {
  //     try {
  //       const {results} = await dataService.loadCountry(marker)

  //       const countryData = results.filter(res => res.types[0] === 'country')[0];

  //       const countryName = countryData['formatted_address'];

  //       const countryStats = allCountries.filter(country => country.country === countryName)[0];

  //       setPickedCountryFromMap(countryStats)
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   }

  //   if (marker) {
  //     getCountryData();
  //   }
  // }, [marker])

  const findCountryHandler = async e => {
    try {
      e.preventDefault()

      const countryStats = Object.values(allCountries).filter(
        country => country.country.toLowerCase() === searchedCountry.toLowerCase()
      )[0]

      const data = await dataService.loadCountryFromName(countryStats.country)
      const { location } = data.results[0].geometry;

      setMarker(location)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={styles.container}>
      <InfoBox
        allCases={allCases}
        findCountryHandler={findCountryHandler}
        searchedCountry={searchedCountry}
        setSearchedCountry={setSearchedCountry}
      />
      <Map marker={marker} setMarker={setMarker} />
    </div>
  )
}

export default HomePage
