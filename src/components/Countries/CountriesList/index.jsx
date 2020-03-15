import React from 'react'
import styles from './countries-list.module.scss'
import CountryCard from '../CountryCard'

const renderCountries = (countries) => {
    return countries.map(country => {
        return <CountryCard key={country.country} {...country} />
    })
}


function CountriesList({countries}) {
    return (
        <ul className={styles.list}>{countries.length > 0 && renderCountries(countries)}</ul>
    )
}

export default CountriesList