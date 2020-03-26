import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'
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
            <Helmet>
              <meta charSet="utf-8" />
              <meta name="description" content={languageContextValue.translate('app.description')} />
              <link rel="canonical" href="https://ovardov.netlify.com/" />
              <title>{languageContextValue.translate('app.title')}</title>
            </Helmet>

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
        </BrowserRouter>
      </StatisticContext.Provider>
    </LanguageContext.Provider>
  )
}

export default App
