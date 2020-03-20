import React, { useState, useEffect } from 'react'
import Map from '../Map'
import InfoBox from '../InfoBox'
import dataService from '../../services/dataService'
import styles from './home-page.module.scss'


const getCountryCovidStats = (results, allCountries) => {
  const countryData = results.filter(res => res.types[0] === 'country')[0]

  const countryLongName = countryData['formatted_address'].toLowerCase()

  const countryAddress = results[0]['formatted_address'].split(', ');
  const countryShortName = countryAddress[countryAddress.length - 1].toLowerCase()

  const countryStats = allCountries.filter(({ country }) => country.toLowerCase() === countryLongName || country.toLowerCase() === countryShortName)[0]

  return countryStats
}

function HomePage() {
  const [allCases, setAllCases] = useState({
    confirmed: null,
    recovered: null,
    deaths: null
  })
  const [allCountries, setAllCountries] = useState({})
  const [searchedCountry, setSearchedCountry] = useState('')
  const [marker, setMarker] = useState(null)

  useEffect(() => {
    ; (async function getCases() {
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

  const getCountryData = async props => {
    try {
      const { lat, lng } = props

      const location = {
        lat,
        lng
      }

      const { results } = await dataService.loadCountryFromLocation(location)
      const countryStats = getCountryCovidStats(results, allCountries);

      setMarker({
        lat,
        lng,
        ...countryStats
      })
    } catch (e) {
      console.log(e)
    }
  }

  const findCountryHandler = async e => {
    try {
      e.preventDefault()

      const {results} = await dataService.loadCountryFromName(searchedCountry);
      const countryStats = getCountryCovidStats(results, allCountries);

      const { location } = results[0].geometry

      const newMarker = {
        ...location,
        ...countryStats
      }

      setMarker(newMarker)
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
      <Map
        marker={marker}
        setMarker={setMarker}
        getCountryData={getCountryData}
      />
    </div>
  )
}

export default HomePage
