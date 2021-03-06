export const dataService = {
    loadAllCases: () => {      
        return fetch(`https://corona.lmao.ninja/v2/all`, {
            method: 'GET',
        })
            .then(res => res.json())
            .catch(err => console.error(err));
    },

    loadAllCountries: () => {
        return fetch(`https://corona.lmao.ninja/v2/countries`, {
            method: 'GET',
        })
            .then(res => res.json())
            .catch(err => console.error(err));
    },
    loadCountryFromLocation: ({lat, lng}) => {
        return fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&language=en&key=${process.env.REACT_APP_GOOGLE_GEOCODING_API_KEY}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .catch(err => console.error(err));
    },
    loadCountryFromName: (countryName) => {
        return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${countryName}&language=en&key=${process.env.REACT_APP_GOOGLE_GEOCODING_API_KEY}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .catch(err => console.error(err));
    }
}