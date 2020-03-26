import React, { useState, Fragment } from 'react'
import Map from '../Map'
import InfoBox from '../InfoBox'
import { dataService } from '../../services/dataService'
import { useStatistics } from '../../hooks/useStatistics'
import styles from './home-page.module.scss'
import HomePageSkeleton from './Skeleton'


const getCountryCovidStats = (results, allCountries, searchedCountry) => {
  const countryData = results.filter(res => res.types[0] === 'country')[0]

  searchedCountry = searchedCountry ? searchedCountry.toLowerCase() : '';

  const countryLongName = countryData['formatted_address'].toLowerCase()

  const countryAddress = results[0]['formatted_address'].split(', ');
  const countryShortName = countryAddress[countryAddress.length - 1].toLowerCase()

  let countryStats = allCountries.length > 0 && allCountries.filter(({ country }) => country.toLowerCase() === countryLongName || country.toLowerCase() === countryShortName || country.toLowerCase() === searchedCountry.toLowerCase())[0]

  // Edge cases
  if(!countryStats) {
    let key = '';

    let countryName = countryData['formatted_address'];

    if(countryName === 'South Korea') {
      key = 'S. Korea';
    } else if(countryName === 'United Arab Emirates') {
      key = 'UAE'
    } else if(countryName === 'Democratic Republic of the Congo') {
      key = 'DRC'
    } else if(countryName === 'St Barthélemy') {
      key = 'St. Barth'
    } else if(countryName === 'St Lucia') {
      key = 'Saint Lucia'
    } else if(countryName === 'St Vincent and the Grenadines') {
      key = 'St. Vincent Grenadines';
    } else if (countryName === 'Iran') {
      key = 'Iran, Islamic Republic of'
    }
    
    countryStats = allCountries.length > 0 && allCountries.filter(({country}) => country.toLowerCase() === key.toLowerCase())[0];
  }

  return countryStats
}

function HomePage() {
  const { allCases, allCountries } = useStatistics();

  const [searchedCountry, setSearchedCountry] = useState('')
  const [marker, setMarker] = useState(null)


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

      const { results } = await dataService.loadCountryFromName(searchedCountry);
      const countryStats = getCountryCovidStats(results, allCountries, searchedCountry);

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
      {Object.keys(allCases).length === 0 || allCountries.length === 0 ? (
        <HomePageSkeleton />
      ) : (
          <Fragment>
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
          </Fragment>
        )}
    </div>
  )
}

export default HomePage
