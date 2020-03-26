import React from 'react'
import { useTranslations } from '../../hooks/useTranslations'
import styles from './all-cases.module.scss'

const AllCases = ({ cases, recovered, deaths }) => {
  const { translate } = useTranslations();

  return (
    <section className={styles.container}>
      <section className={styles.cases}>
        <p>{cases.toLocaleString()}</p>
        <p className={styles.title}>{translate('allCases.cases')}</p>
      </section>
      <section className={styles.recovered}>
        <p>{recovered.toLocaleString()}</p>
        <p className={styles.title}>{translate('allCases.recovered')}</p>
      </section>
      <section className={styles.deaths}>
        <p>{deaths.toLocaleString()}</p>
        <p className={styles.title}>{translate('allCases.deaths')}</p>
      </section>
    </section>
  )
}

export default AllCases
