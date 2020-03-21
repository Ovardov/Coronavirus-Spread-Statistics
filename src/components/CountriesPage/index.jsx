import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Table from '../Table'
import Search from '../Search'
import { useStatistics } from '../../hooks/useStatistics'
import styles from './countries-page.module.scss'

const CountriesPage = () => {
  const { allCountries } = useStatistics();

  const [filteredCountries, setFilteredCountries] = useState(allCountries)

  const findCountry = e => {
    const newValue = e.target.value.toLowerCase()

    const countries = allCountries.filter(country =>
      country.country.toLowerCase().includes(newValue)
    )

    setFilteredCountries(countries)
  }

  useEffect(() => {
    if (allCountries.length > 0) {
      setFilteredCountries(allCountries)
    }
  }, [allCountries])

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
