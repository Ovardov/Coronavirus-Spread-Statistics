import React, { useState, Fragment } from 'react'
import FA from 'react-fontawesome'
import styles from './marker.module.scss'

function Marker({ cases, recovered, deaths, todayCases, todayDeaths, active, critical }) {
    const [isShowedDescription, setIsShowedDescription] = useState(false);

    return (
        <Fragment>
            <FA name="map-marker-alt" className={styles.marker}
                onClick={() => setIsShowedDescription(!isShowedDescription)}
                size="3x"
            />

            {isShowedDescription && (<section className={styles.description}>
                <p>All Cases: <span className={styles.info}>{cases}</span></p>
                <p>Recovered: <span className={styles.info}>{recovered}</span></p>
                <p>Deaths: <span className={styles.info}>{deaths}</span></p>
                <p>Today Cases: <span className={styles.info}>{todayCases}</span></p>
                <p>Today Deaths: <span className={styles.info}>{todayDeaths}</span></p>
                <p>Active: <span className={styles.info}>{active}</span></p>
                <p>Critical: <span className={styles.info}>{critical}</span></p>
            </section>)}
        </Fragment>
    )
}

export default Marker
