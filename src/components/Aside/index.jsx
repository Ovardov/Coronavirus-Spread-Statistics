import React from 'react'
import styles from './aside.module.scss'
import CountriesList from '../Countries/CountriesList'


function Aside({ allCases, allCountries }) {
    return (
        <aside className={styles.container}>
            <section className={styles.info}>
                <section>
                    <p>{allCases.cases}</p>
                    <p className={styles.title}>Confirmed</p>
                </section>
                <section>
                    <p>{allCases.recovered}</p>
                    <p className={styles.title}>Recovered</p>
                </section>
                <section>
                    <p>{allCases.deaths}</p>
                    <p className={styles.title}>Deaths</p>
                </section>
            </section>

            <section>
                <CountriesList countries={allCountries} />
            </section>
        </aside>
    )
}

export default Aside