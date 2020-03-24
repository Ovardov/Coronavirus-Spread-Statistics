import React from 'react'
import { Link } from 'react-router-dom'
import AllCases from '../AllCases'
import styles from './info-box.module.scss'
import Search from '../Search'
import { useTranslations } from '../../hooks/useTranslations'

const InfoBox = ({ allCases, findCountryHandler, searchedCountry, setSearchedCountry }) => {
  const { activeLanguage, changeLanguage, translate } = useTranslations();

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

        {activeLanguage === 'bg' && <button className="button" onClick={() => changeLanguage('en')}>BG</button>}
        {activeLanguage === 'en' && <button className="button" onClick={() => changeLanguage('bg')}>EN</button>}
      </section>
    </section>
  )
}

export default InfoBox
