import React from 'react'
import styles from './table.module.scss'

const renderCountries = filteredCountries => {
  return filteredCountries.map(country => {
    return (
      <tr key={country.country + country.cases} className={styles.grid}>
        <td>{country.country}</td>
        <td>{country.cases}</td>
        <td>{country.todayCases}</td>
        <td>{country.recovered}</td>
        <td>{country.deaths}</td>
        <td>{country.todayDeaths}</td>
        {/* <td>{country.active}</td> */}
        {/* <td>{country.critical}</td> */}
      </tr>
    )
  })
}

const renderColumns = (allColumns, sortCountriesHandler, lastSorting) => {
  return allColumns.map(({ key, name, value }) => {
    return <th key={key} onClick={() => sortCountriesHandler(value)}>
      {name} <span className={styles.icon}>{lastSorting.key === value && <i className={`fas fa-arrow-${lastSorting.method === 'ascending' ? 'down' : 'up'}`}></i>}</span>
    </th>

  })
}

const Table = ({ filteredCountries, sortCountriesHandler, lastSorting }) => {
  const allColumns = [
    { key: 1, name: 'Country', value: 'country' },
    { key: 2, name: 'Total Cases', value: 'cases' },
    { key: 3, name: 'Today Cases', value: 'todayCases' },
    { key: 4, name: 'Total Recovered', value: 'recovered' },
    { key: 5, name: 'Total Deaths', value: 'deaths' },
    { key: 6, name: 'Today Deaths', value: 'todayDeaths' },
  ];

  return (
    <>
      <table className={styles.container}>
        <thead className={styles.header}>
          <tr className={styles.grid}>
            {renderColumns(allColumns, sortCountriesHandler, lastSorting)}
          </tr>
        </thead>

        <tbody className={styles.body}>
          {filteredCountries.length > 0 && renderCountries(filteredCountries)}
        </tbody>
      </table>
    </>
  )
}

export default Table
