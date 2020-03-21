import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useStatisticsProvider, StatisticContext } from '../../hooks/useStatistics'
import styles from './app.module.scss'

const HomePage = lazy(() => import('../HomePage'))
const CountriesPage = lazy(() => import('../CountriesPage'))

function App() {
  const contextValue = useStatisticsProvider()

  return (
    <StatisticContext.Provider value={contextValue}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading</div>}>
          <div className={styles.site}>
            {/* {isLoading === true && <Loader isLoading={isLoading} />} */}

            <main className={styles['site-main']}>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/countries" component={CountriesPage} />

                {/* <Route path="*" component={NotFound} /> */}
              </Switch>
            </main>
          </div>
        </Suspense>

      </BrowserRouter>
    </StatisticContext.Provider>
  )
}

export default App
