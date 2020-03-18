import React from 'react'
import styles from './table.module.scss'

const renderCountries = filteredCountries => {
  return filteredCountries.map(country => {
    return (
      <tr key={country.country + country.cases} className={styles.grid}>
        <td className={styles['two-columns']}>{country.country}</td>
        <td>{country.cases}</td>
        <td>{country.todayCases}</td>
        <td>{country.recovered}</td>
        <td>{country.deaths}</td>
        <td>{country.todayDeaths}</td>
        <td>{country.active}</td>
        <td>{country.critical}</td>
      </tr>
    )
  })
}

const Table = ({ filteredCountries }) => {
  return (
    <>
      <div className={styles['sticky-header']}>
        <table className={styles.container}>
          <thead className={styles.header}>
            <tr className={styles.grid}>
              <th className={styles['two-columns']}>County</th>
              <th>Total Cases</th>
              <th>Today Cases</th>
              <th>Total Recovered</th>
              <th>Total Deaths</th>
              <th>Today Deaths</th>
              <th>Active</th>
              <th>Critical</th>
            </tr>
          </thead>
        </table>
      </div>

      <div className={styles.body}>
        <table className={styles.container}>
          <tbody className={styles.body}>
            {filteredCountries.length > 0 && renderCountries(filteredCountries)}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table
