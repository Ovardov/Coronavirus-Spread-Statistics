export const dataService = {
    loadAllCases: () => {      
        return fetch(`https://corona.lmao.ninja/all`, {
            method: 'GET',
        })
            .then(res => res.json())
            .catch(err => console.error(err));
    },

    loadAllCountries: () => {
        return fetch(`https://corona.lmao.ninja/countries`, {
            method: 'GET',
        })
            .then(res => res.json())
            .catch(err => console.error(err));
    },
    loadCountryFromLocation: ({lat, lng}) => {
        return fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&language=en&key=AIzaSyBKhcj_pFct_GAtYszUC0rs_HM2ZPuOH_U`, {
            method: 'GET',
        })
            .then(res => res.json())
            .catch(err => console.error(err));
    },
    loadCountryFromName: (countryName) => {
        return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${countryName}&language=en&key=AIzaSyBKhcj_pFct_GAtYszUC0rs_HM2ZPuOH_U`, {
            method: 'GET',
        })
            .then(res => res.json())
            .catch(err => console.error(err));
    }
}