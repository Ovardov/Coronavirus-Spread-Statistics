import React from 'react'
import AllCases from '../AllCases'
import CountryCard from '../Countries/CountryCard'
import styles from './info-box.module.scss'
import Search from '../Search'

const InfoBox = ({ allCases, findCountry, setSearchedCountry, searchedCountryStats }) => {

  return (
    <section className={styles.container}>
      <section>
        <AllCases {...allCases} />
      </section>

      <section className={Object.keys(searchedCountryStats).length > 0 ? styles['search-box'] : ''}>
        <Search setSearchedCountry={setSearchedCountry} findCountry={findCountry} />
      </section>

      <section>
        {Object.keys(searchedCountryStats).length > 0 && <CountryCard {...searchedCountryStats} />}
      </section>
    </section>
  )
}

export default InfoBox
