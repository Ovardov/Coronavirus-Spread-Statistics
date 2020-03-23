import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Table from '../Table'
import Search from '../Search'
import { useStatistics } from '../../hooks/useStatistics'
import styles from './countries-page.module.scss'
import CountriesPageSkeleton from './Skeleton'

const CountriesPage = () => {
  const { allCountries } = useStatistics();

  const [filteredCountries, setFilteredCountries] = useState(allCountries)
  const [searchedCountry, setSearchedCountry] = useState('')
  const [lastSorting, setLastSorting] = useState({ method: 'descending', key: 'cases' });


  const findCountryHandler = e => {
    e.preventDefault();

    const filterValue = searchedCountry ? searchedCountry.toLowerCase() : '';

    const countries = allCountries.filter(({ country }) => country.toLowerCase().includes(filterValue))

    setFilteredCountries(countries)
  }

  useEffect(() => {
    if (allCountries.length > 0) {
      setFilteredCountries(allCountries)
    }
  }, [allCountries])

  useEffect(() => {
    const filterValue = searchedCountry ? searchedCountry.toLowerCase() : '';

    const countries = allCountries.filter(({ country }) => country.toLowerCase().includes(filterValue))

    setFilteredCountries(countries)
  }, [searchedCountry])

  const sortCountriesHandler = (key) => {
    const countries = [...filteredCountries]

    const sortingMethod = lastSorting.method === 'ascending' && lastSorting.key === key ? 'descending' : 'ascending';

    const sortedCountries = countries.sort((a, b) => {
      return key === 'country'
        ? (sortingMethod === 'ascending' ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key]))
        : (sortingMethod === 'ascending' ? a[key] - b[key] : b[key] - a[key])
    });

    setLastSorting({ method: sortingMethod, key });
    setFilteredCountries(sortedCountries);
  }


  return (
    <div className={styles.container}>
      {allCountries.length > 0
        ? (
          <Fragment>
            <div className={styles.header}>
              <Link to="/">
                <button className="button">Go To Map</button>
              </Link>

              <Search setSearchedCountry={setSearchedCountry} searchedCountry={searchedCountry} findCountryHandler={findCountryHandler} />
            </div>

            <Table filteredCountries={filteredCountries} sortCountriesHandler={sortCountriesHandler} lastSorting={lastSorting} />
          </Fragment>
        ) : (
          <CountriesPageSkeleton />
        )}
    </div>
  )
}

export default CountriesPage
