import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage'
import styles from './app.module.scss'


function App() {
  return (
      <BrowserRouter >
        <div className={styles.site}>
          {/* {isLoading === true && <Loader isLoading={isLoading} />} */}


          <main className={styles['site-main']}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              
              <Route path="*" component={HomePage} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
  );
}

export default App;
