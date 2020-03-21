import React from 'react'
import Skeleton from 'react-loading-skeleton'
import styles from './skeleton.module.scss'

const HomePageSkeleton = () => {
  return (
    <div className={styles.container}>

      <section className={styles['info-box']}>
        <section className={styles["all-cases"]}>
          <section>
            <p><Skeleton width="90%" height={20} /></p>
            <p><Skeleton width="100%" height={20} /></p>
          </section>

          <section>
            <p><Skeleton width="90%" height={20} /></p>
            <p><Skeleton width="100%" height={20} /></p>
          </section>

          <section>
            <p><Skeleton width="90%" height={20} /></p>
            <p><Skeleton width="100%" height={20} /></p>
          </section>
        </section>

        <section className={styles['search-box']}>
            <Skeleton width="100%" height={36}/>
        </section>

        <section className={styles.button}>
            <Skeleton width={140} height={33}/>
        </section>
      </section>

      <section className={styles.map} >
          <Skeleton width="100vw" height="100vh"/>
      </section>
    </div>
  )
}

export default HomePageSkeleton
