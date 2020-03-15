const postService = {
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
    }
}

export default postService;