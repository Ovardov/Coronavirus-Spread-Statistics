import React, { useState, useEffect } from 'react'
import Aside from '../Aside'
import Map from '../Map'
import dataService from '../../services/dataService'
import styles from './home-page.module.scss'

function HomePage() {
    const [allCases, setAllCases] = useState({ confirmed: null, recovered: null, deaths: null });
    const [allCountries, setAllCountries] = useState({});

    useEffect(() => {
        (async function getCases() {
            try {
                const casesRes = await dataService.loadAllCases();
                const countriesRes = await dataService.loadAllCountries();
                
                setAllCases({ cases: casesRes.cases, recovered: casesRes.recovered, deaths: casesRes.deaths });
                setAllCountries(countriesRes);
            } catch (e) {
                console.error('Load all cases', e);
            }
        })();
    }, [])

    return (
        <div className={styles.container}>
            <section className={styles.aside}>
                <Aside allCases={allCases} allCountries={allCountries}/>
            </section>
            <section className={styles.map}>
                {/* <Map /> */}
            </section>
        </div>
    )
}

export default HomePage