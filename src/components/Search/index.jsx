import React from 'react';
import styles from './search.module.scss';

function Search({ findCountry, setSearchedCountry }) {
  return (
    <form className={styles.container}>
      <p>
        <input type="text" placeholder="Search" name="search" onChange={e => setSearchedCountry(e.target.value)} />
      </p>

      <button className={styles.button} onClick={findCountry}><i className="fas fa-search"></i></button>
    </form>
  )
}

export default Search;