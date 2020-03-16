import React from 'react'
import styles from './country-card.module.scss'

function CountryCard({ cases, recovered, deaths, todayDeaths, todayCases, active, critical }) {
    return (
        <section className={styles['more-info']}>
            <p>All Cases: <span className={styles.info}>{cases}</span></p>
            <p>Recovered: <span className={styles.info}>{recovered}</span></p>
            <p>Deaths: <span className={styles.info}>{deaths}</span></p>
            <p>Today Cases: <span className={styles.info}>{todayCases}</span></p>
            <p>Today Deaths: <span className={styles.info}>{todayDeaths}</span></p>
            <p>Active: <span className={styles.info}>{active}</span></p>
            <p>Critical: <span className={styles.info}>{critical}</span></p>
        </section>
    )
}

export default CountryCard