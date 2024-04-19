import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';

export const fetchCountries =  () => (dispatch) => {
    dispatch(countriesLoading(true));

    return fetch(baseUrl + 'get-data')
        .then(response => {
            if(response.ok) {
                return response;
            } else {
                var error = new Error('Error '+ response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }   
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
            .then(response => response.json())
            .then(countries => dispatch(addCountries(countries)))
            .catch(error => dispatch(countriesFailed(error.message)));
}

export const countriesLoading = () => ({
    type: ActionTypes.COUNTRY_LOADING
});

export const addCountries = (countries) => ({
    type: ActionTypes.ADD_COUNTRY,
    payload: countries
});

export const countriesFailed = (errmess) => ({
    type: ActionTypes.COUNTRY_FAILED,
    payload: errmess
})
