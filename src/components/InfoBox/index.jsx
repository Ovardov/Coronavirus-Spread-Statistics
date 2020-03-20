import React from 'react'
import {Link} from 'react-router-dom'
import AllCases from '../AllCases'
// import CountryCard from '../Countries/CountryCard'
import styles from './info-box.module.scss'
import Search from '../Search'

const InfoBox = ({ allCases, findCountryHandler, searchedCountry, setSearchedCountry }) => {

  return (
    <section className={styles.container}>
      <section>
        <AllCases {...allCases} />
      </section>

      <section className={styles['search-box']}>
        <Search findCountryHandler={findCountryHandler} searchedCountry={searchedCountry} setSearchedCountry={setSearchedCountry} />
      </section>

      <section>
        <Link to="/countries">
          <button className="button">See All Countries</button>
        </Link>
      </section>
    </section>
  )
}

export default InfoBox
