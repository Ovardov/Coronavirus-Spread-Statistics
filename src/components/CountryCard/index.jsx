import React, { Fragment } from 'react'
import { useTranslations } from '../../hooks/useTranslations'
import styles from './country-card.module.scss'

function CountryCard({ isOpened, setIsOpened, country, cases, recovered, deaths, todayDeaths, todayCases, active, critical, tests, casesPerOneMillion, deathsPerOneMillion, testsPerOneMillion }) {
  const { translate } = useTranslations();

  const handleClose = (e) => {
    e.stopPropagation()
    setIsOpened(false)
  }

  return (
    <div className={styles.container}>
      {isOpened && (
        <Fragment>
          <button onClick={handleClose} className={styles.close}><i className="fas fa-times"></i></button>

          {cases ? (
            <ul className={styles['more-info']}>
              <li>{translate('table.country')}: <span className={styles.info}>{country}</span></li>
              <li>{translate('table.cases')}: <span className={styles.info}>{cases.toLocaleString()}</span></li>
              <li>{translate('table.todayCases')}: <span className={styles.info}>{todayCases.toLocaleString()}</span></li>
              <li>{translate('table.deaths')}: <span className={styles.info}>{deaths.toLocaleString()}</span></li>
              <li>{translate('table.todayDeaths')}: <span className={styles.info}>{todayDeaths.toLocaleString()}</span></li>
              <li>{translate('table.recovered')}: <span className={styles.info}>{recovered.toLocaleString()}</span></li>
              <li>{translate('table.active')}: <span className={styles.info}>{active.toLocaleString()}</span></li>
              <li>{translate('table.critical')}: <span className={styles.info}>{critical.toLocaleString()}</span></li>
              <li>{translate('table.casesPerOneMillion')}: <span className={styles.info}>{casesPerOneMillion.toLocaleString()}</span></li>
              <li>{translate('table.deathsPerOneMillion')}: <span className={styles.info}>{deathsPerOneMillion.toLocaleString()}</span></li>
              <li>{translate('table.tests')}: <span className={styles.info}>{tests.toLocaleString()}</span></li>
              <li>{translate('table.testsPerOneMillion')}: <span className={styles.info}>{testsPerOneMillion.toLocaleString()}</span></li>
            </ul>
          ) : (
              <p className={styles['no-info']}>{translate('map.noCasesText')}</p>
            )}
        </Fragment>
      )}
    </div>

  )
}

export default CountryCard