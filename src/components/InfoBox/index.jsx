import React from 'react'
import AllCases from '../AllCases'
import CountryCard from '../Countries/CountryCard'
import styles from './info-box.module.scss'
import Search from '../Search'

const InfoBox = ({ allCases, findCountryHandler, searchedCountry, setSearchedCountry }) => {

  return (
    <section className={styles.container}>
      <section>
        <AllCases {...allCases} />
      </section>

      <section className={styles['search-box']}>
        <Search findCountryHandler={findCountryHandler} searchedCountry={searchedCountry} setSearchedCountry={setSearchedCountry}/>
      </section>

    </section>
  )
}

export default InfoBox
