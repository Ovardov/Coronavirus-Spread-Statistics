export const dataService = {
    loadAllCases: () => {      
        return fetch(`https://coronavirus-19-api.herokuapp.com/all`, {
            method: 'GET',
        })
            .then(res => res.json())
            .catch(err => console.error(err));
    },

    loadAllCountries: () => {
        return fetch(`https://coronavirus-19-api.herokuapp.com/countries`, {
            method: 'GET',
        })
            .then(res => res.json())
            .catch(err => console.error(err));
    },
    loadCountryFromLocation: ({lat, lng}) => {
        return fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .catch(err => console.error(err));
    },
    loadCountryFromName: (countryName) => {
        return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${countryName}&key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .catch(err => console.error(err));
    }
}