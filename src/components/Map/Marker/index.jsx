import React, { Fragment } from 'react'
import styles from './marker.module.scss'
import CountryCard from '../../CountryCard'

function Marker({ marker }) {

    return (
        <Fragment>
            <span className={styles.marker}>
                <i className="fas fa-map-marker-alt"></i>
            </span>

            <CountryCard {...marker} />
        </Fragment>
    )
}

export default Marker
