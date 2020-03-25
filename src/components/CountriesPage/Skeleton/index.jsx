import React from 'react'
import Skeleton from 'react-loading-skeleton'
import styles from './skeleton.module.scss'

const CountriesPageSkeleton = () => {
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <Skeleton className={styles.button} width={100} height={33} />

        <div className={styles.search}>
          <Skeleton width="100%" height="100%" />
        </div>
      </section>

      <section className={styles.map}>
        <Skeleton width="100%" height="100%" />
      </section>
    </div>
  )
}

export default CountriesPageSkeleton
