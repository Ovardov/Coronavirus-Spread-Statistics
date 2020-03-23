import React from 'react'
import styles from './table.module.scss'

const renderCountries = filteredCountries => {
  return filteredCountries.map(country => {
    return (
      <tr key={country.country + country.cases} className={styles.grid}>
        <td>{country.country}</td>
        <td>{country.cases}</td>
        <td className={styles.yellow}>{country.todayCases}</td>
        <td>{country.deaths}</td>
        <td className={styles.red}>{country.todayDeaths}</td>
        <td>{country.recovered}</td>
        <td>{country.active}</td>
        <td>{country.critical}</td>
        <td>{country.casesPerOneMillion}</td>
      </tr>
    )
  })
}

const renderColumns = (allColumns, sortCountriesHandler, lastSorting) => {
  return allColumns.map(({ key, name, value }) => {
    return (
      <th key={key} onClick={() => sortCountriesHandler(value)}>
        <span className={styles.name}>{name} </span>
        <span className={styles.icon}>{lastSorting.key === value && <i className={`fas fa-arrow-${lastSorting.method === 'ascending' ? 'up' : 'down'}`}></i>}</span>
      </th>
    )
  })
}

const Table = ({ filteredCountries, sortCountriesHandler, lastSorting }) => {
  const allColumns = [
    { key: 1, name: 'Country', value: 'country' },
    { key: 2, name: 'Total Cases', value: 'cases' },
    { key: 3, name: 'Today Cases', value: 'todayCases' },
    { key: 4, name: 'Total Deaths', value: 'deaths' },
    { key: 5, name: 'Today Deaths', value: 'todayDeaths' },
    { key: 6, name: 'Total Recovered', value: 'recovered' },
    { key: 7, name: 'Active', value: 'active' },
    { key: 8, name: 'Critical', value: 'critical' },
    { key: 9, name: 'Cases Per One Million', value: 'casesPerOneMillion' },
  ];

  return (
    <div className={styles.box}>
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
    </div>
  )
}

export default Table
