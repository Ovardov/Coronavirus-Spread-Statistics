import React, { Fragment, useState, useEffect } from 'react'
import styles from './marker.module.scss'
import CountryCard from '../../CountryCard'

function Marker({ marker }) {
  const [isOpenedDescription, setIsOpenedDescription] = useState(true);

  useEffect(() => {
    setIsOpenedDescription(true)
  }, [marker])

  return (
    <Fragment>
      <span className={styles.marker}>
        <i className="fas fa-map-marker-alt"></i>
      </span>

      <CountryCard {...marker} setIsOpened={setIsOpenedDescription} isOpened={isOpenedDescription} />
    </Fragment>
  )
}

export default Marker
