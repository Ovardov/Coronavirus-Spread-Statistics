import React from 'react'
import FA from 'react-fontawesome'
import styles from './marker.module.scss'

function Marker({ text }) {
    return (
        <FA name="map-marker-alt" className={styles.marker}
            onClick={() => alert(text)}
            size="3x"
        />
    )
}

export default Marker
