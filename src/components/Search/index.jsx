import React from 'react';
import { useTranslations } from '../../hooks/useTranslations';
import styles from './search.module.scss';

function Search({ findCountryHandler, searchedCountry, setSearchedCountry}) {
  const {translate} = useTranslations();

  return (
    <form className={styles.container}>
      <p>
        <input type="text" placeholder={translate('searchPlaceholder')} name="search" value={searchedCountry} onChange={e => setSearchedCountry(e.target.value)} />
      </p>

      <button className={styles.button} onClick={findCountryHandler}><i className="fas fa-search" /></button>
    </form>
  )
}

export default Search;