import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {
  useStatisticsProvider,
  StatisticContext
} from '../../hooks/useStatistics'
import styles from './app.module.scss'
import HomePageSkeleton from '../HomePage/Skeleton'

const HomePage = lazy(() => import('../HomePage'))
const CountriesPage = lazy(() => import('../CountriesPage'))

function App() {
  const contextValue = useStatisticsProvider()

  return (
    <StatisticContext.Provider value={contextValue}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading</div>}>
          <div className={styles.site}>
            <main className={styles['site-main']}>
              <Suspense fallback={<HomePageSkeleton />}>
                <Switch>
                  <Route exact path="/" component={HomePage} />
                </Switch>
              </Suspense>

              <Switch>
              <Route path="/countries" component={CountriesPage} />
              </Switch>
            </main>
          </div>
        </Suspense>
      </BrowserRouter>
    </StatisticContext.Provider>
  )
}

export default App
