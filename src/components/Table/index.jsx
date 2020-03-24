import React from 'react'
import styles from './table.module.scss'
import { useTranslations } from '../../hooks/useTranslations'

const renderCountries = filteredCountries => {
  return filteredCountries.map(country => {
    return (
      <tr key={country._id} className={styles.grid}>
        <td key={country.country}>{country.country}</td>
        <td key={country.country}>{country.cases}</td>
        <td className={styles.yellow} key={country.country}>{country.todayCases}</td>
        <td key={country.country}>{country.deaths}</td>
        <td className={styles.red} key={country.country}>{country.todayDeaths}</td>
        <td key={country.country}>{country.recovered}</td>
        <td key={country.country}>{country.active}</td>
        <td key={country.country}>{country.critical}</td>
        <td key={country.country}>{country.casesPerOneMillion}</td>
        <td key={country.country}>{country.deathsPerOneMillion}</td>
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

const Table = ({ filteredCountries, sortCountriesHandler, lastSorting }) => {
  const { translate } = useTranslations();

  const allColumns = translate('table');

  return (
    <div className={styles.box}>
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
