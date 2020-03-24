import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {
  useStatisticsProvider,
  StatisticContext
} from '../../hooks/useStatistics'
import { useTranslationsProvider, LanguageContext } from '../../hooks/useTranslations'
import styles from './app.module.scss'
import HomePageSkeleton from '../HomePage/Skeleton'
import CountriesPageSkeleton from '../CountriesPage/Skeleton'

const HomePage = lazy(() => import('../HomePage'))
const CountriesPage = lazy(() => import('../CountriesPage'))

function App() {
  const languageContextValue = useTranslationsProvider()
  const statiscticsContextValue = useStatisticsProvider()

  return (
    <LanguageContext.Provider value={languageContextValue}>
      <StatisticContext.Provider value={statiscticsContextValue}>
        <BrowserRouter>
          <Suspense fallback={<div>Loading</div>}>
            <div className={styles.site}>
              <main className={styles['site-main']}>
                <Suspense fallback={<HomePageSkeleton />}>
                  <Switch>
                    <Route exact path="/" component={HomePage} />
                  </Switch>
                </Suspense>

                <Suspense fallback={<CountriesPageSkeleton />}>
                  <Switch>
                    <Route path="/countries" component={CountriesPage} />
                  </Switch>
                </Suspense>
              </main>
            </div>
          </Suspense>
        </BrowserRouter>
      </StatisticContext.Provider>
    </LanguageContext.Provider>
  )
}

export default App
