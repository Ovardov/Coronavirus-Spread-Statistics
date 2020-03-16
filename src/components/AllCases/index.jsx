import React from 'react'
import styles from './all-cases.module.scss'

const AllCases = ({ cases, recovered, deaths }) => {
  return (
    <section className={styles.container}>
      <section>
        <p>{cases}</p>
        <p className={styles.title}>Confirmed</p>
      </section>
      <section>
        <p>{recovered}</p>
        <p className={styles.title}>Recovered</p>
      </section>
      <section>
        <p>{deaths}</p>
        <p className={styles.title}>Deaths</p>
      </section>
    </section>
  )
}

export default AllCases
