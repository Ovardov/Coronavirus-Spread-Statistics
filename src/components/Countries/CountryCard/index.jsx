import React, { useState } from 'react'
import FA from 'react-fontawesome'
import styles from './country-card.module.scss'


function CountryCard({ country, cases, recovered, deaths, todayDeaths, todayCases, active, critical }) {
    const [isShowedMore, setShowMore] = useState(false);

    return (
        <li className={styles.card} onClick={() => setShowMore(!isShowedMore)}>
            <section className={styles.header}>
                <span className={styles.name}>{country}</span>

                <span className={styles.icon}><FA name={isShowedMore ? "arrow-circle-up" : "chevron-circle-down"}/></span>
            </section>

            {isShowedMore && (
                <section className={styles['more-info']}>
                    <p>All Cases: <span className={styles.info}>{cases}</span></p>
                    <p>Recovered: <span className={styles.info}>{recovered}</span></p>
                    <p>Deaths: <span className={styles.info}>{deaths}</span></p>
                    <p>Today Cases: <span className={styles.info}>{todayCases}</span></p>
                    <p>Today Deaths: <span className={styles.info}>{todayDeaths}</span></p>
                    <p>Active: <span className={styles.info}>{active}</span></p>
                    <p>Critical: <span className={styles.info}>{critical}</span></p>
                </section>
            )}

        </li>
    )
}

export default CountryCard