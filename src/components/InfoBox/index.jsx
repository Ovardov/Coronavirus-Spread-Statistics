import React from 'react'
import { Link } from 'react-router-dom'
import AllCases from '../AllCases'
import styles from './info-box.module.scss'
import Search from '../Search'
import { useTranslations } from '../../hooks/useTranslations'

const InfoBox = ({ allCases, findCountryHandler, searchedCountry, setSearchedCountry }) => {
  const { changeLanguage, translate } = useTranslations();

  return (
    <section className={styles.container}>
      <section>
        <AllCases {...allCases} />
      </section>

      <section className={styles['search-box']}>
        <Search findCountryHandler={findCountryHandler} searchedCountry={searchedCountry} setSearchedCountry={setSearchedCountry} />
      </section>

      <section className={styles.buttons}>
        <Link to="/countries">
          <button className="button">{translate('buttons.seeAllCountries')}</button>
        </Link>

        <div className={styles['language-buttons']}>
          <button className="button" onClick={() => changeLanguage('bg')}>BG</button>
          <button className="button" onClick={() => changeLanguage('en')}>EN</button>
        </div>
      </section>
    </section>
  )
}

export default InfoBox
