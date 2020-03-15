import React, { useState, useEffect } from 'react'
import Aside from '../Aside'
import Map from '../Map'
import dataService from '../../services/dataService'
import styles from './home-page.module.scss'

function HomePage() {
    const [allCases, setAllCases] = useState({ confirmed: null, recovered: null, deaths: null });
    const [allCountries, setAllCountries] = useState({});

    const markers = [
        {
            latitude: 42.7219285, longitude: 24.422234, name: 'Test', country: 'Bulgaria'
        }
    ]

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
                <Aside allCases={allCases} allCountries={allCountries} />
            </section>
            <section className={styles.map}>
                <Map markers={markers} />
            </section>
        </div>
    )
}

export default HomePage