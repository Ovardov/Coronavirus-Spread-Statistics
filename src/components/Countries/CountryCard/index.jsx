import React from 'react'
import styles from './country-card.module.scss'

function CountryCard({ cases, recovered, deaths, todayDeaths, todayCases, active, critical }) {
    return (
        <ul className={styles['more-info']}>
            <li>All Cases: <span className={styles.info}>{cases}</span></li>
            <li>Recovered: <span className={styles.info}>{recovered}</span></li>
            <li>Deaths: <span className={styles.info}>{deaths}</span></li>
            <li>Today Cases: <span className={styles.info}>{todayCases}</span></li>
            <li>Today Deaths: <span className={styles.info}>{todayDeaths}</span></li>
            <li>Active: <span className={styles.info}>{active}</span></li>
            <li>Critical: <span className={styles.info}>{critical}</span></li>
        </ul>
    )
}

export default CountryCard