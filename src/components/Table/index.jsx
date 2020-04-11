import React from 'react'
import styles from './table.module.scss'

const renderCountries = filteredCountries => {
  return filteredCountries.map(country => {
    return (
      <tr key={country.country} className={styles.grid}>
        <td>{country.country}</td>
        <td>{country.cases.toLocaleString()}</td>
        <td className={styles.yellow} >{country.todayCases.toLocaleString()}</td>
        <td>{country.deaths.toLocaleString()}</td>
        <td className={styles.red} >{country.todayDeaths.toLocaleString()}</td>
        <td>{country.recovered.toLocaleString()}</td>
        <td>{country.active.toLocaleString()}</td>
        <td>{country.critical.toLocaleString()}</td>
        <td>{country.casesPerOneMillion.toLocaleString()}</td>
        <td>{country.deathsPerOneMillion.toLocaleString()}</td>
        <td>{country.country !== 'China' && country.tests.toLocaleString()}</td>
        <td>{country.country !== 'China' && country.testsPerOneMillion.toLocaleString()}</td>
      </tr>
    )
  })
}


const renderColumns = (allColumns, sortCountriesHandler, lastSorting) => {
  return Object.entries(allColumns).map(([key, value]) => {
    return (
      <th key={key} onClick={() => sortCountriesHandler(key)}>
        <span className={styles.name}>{value}</span>
        <span className={styles.icon}>{lastSorting.key === key && <i className={`fas fa-arrow-${lastSorting.method === 'ascending' ? 'up' : 'down'}`}></i>}</span>
      </th>
    )
  })
}

const Table = ({ filteredAllCases, allColumns, filteredCountries, sortCountriesHandler, lastSorting }) => {
  return (
    <div className={`${styles.box} ${filteredCountries.length === 0 ? styles['no-scroll'] : ''}`} >
      <table className={styles.container}>
        <thead className={styles.header}>
          <tr className={styles.grid}>
            {Object.keys(allColumns).length > 0 && renderColumns(allColumns, sortCountriesHandler, lastSorting)}
          </tr>
        </thead>

        <tbody className={styles.body}>
          {Object.keys(filteredAllCases).length > 0 && renderCountries([filteredAllCases])}
          {filteredCountries.length > 0 && renderCountries(filteredCountries)}
        </tbody>
      </table>
    </div>
  )
}

export default Table
