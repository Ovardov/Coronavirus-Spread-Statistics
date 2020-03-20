import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Table from '../Table'
import Search from '../Search'
import styles from './countries-page.module.scss'
import dataService from '../../services/dataService'

const CountriesPage = () => {
  const [allCountries, setAllCountries] = useState({})
  const [filteredCountries, setFilteredCountries] = useState({})

  const findCountry = e => {
    const newValue = e.target.value.toLowerCase()

    const countries = allCountries.filter(country =>
      country.country.toLowerCase().includes(newValue)
    )

    setFilteredCountries(countries)
  }

  useEffect(() => {
    ;(async function getCases() {
      try {
        const countriesRes = await dataService.loadAllCountries()

        setAllCountries(countriesRes)
        setFilteredCountries(countriesRes)
      } catch (e) {
        console.error('Load all countries', e)
      }
    })()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/">
          <button className="button">Go To Map</button>
        </Link>

        <Search className={styles['search-box']} findCountry={findCountry} />
      </div>

      <Table filteredCountries={filteredCountries} />
    </div>
  )
}

export default CountriesPage
