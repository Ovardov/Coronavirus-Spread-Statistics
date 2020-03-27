import React from 'react'
import styles from './table.module.scss'

const renderCountries = filteredCountries => {
  return filteredCountries.map(country => {
    return (
      <tr key={country.country} className={styles.grid}>
        <td>{country.country}</td>
        <td>{country.cases}</td>
        <td className={styles.yellow} >{country.todayCases}</td>
        <td>{country.deaths}</td>
        <td className={styles.red} >{country.todayDeaths}</td>
        <td>{country.recovered}</td>
        <td>{country.active}</td>
        <td>{country.critical}</td>
        <td>{country.casesPerOneMillion}</td>
        <td>{country.deathsPerOneMillion}</td>
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

const Table = ({ allColumns, filteredCountries, sortCountriesHandler, lastSorting }) => {
  return (
    <div className={`${styles.box} ${filteredCountries.length === 0 ? styles['no-scroll'] : ''}`} >
      <table className={styles.container}>
        <thead className={styles.header}>
          <tr className={styles.grid}>
            {Object.keys(allColumns).length > 0 && renderColumns(allColumns, sortCountriesHandler, lastSorting)}
          </tr>
        </thead>

        <tbody className={styles.body}>
          {filteredCountries.length > 0 && renderCountries(filteredCountries)}
        </tbody>
      </table>
    </div>
  )
}

export default Table
