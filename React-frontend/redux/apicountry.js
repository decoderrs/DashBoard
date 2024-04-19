import * as ActionTypes from './ActionTypes';

export const Countries = (state = {
    isLoading: true,
    errMess: null,
    countries: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COUNTRY:
            return {...state, isLoading: false,errMess: null, countries:action.payload }
        case ActionTypes.COUNTRY_FAILED:
            return  {...state,isLoading: false,errMess: action.payload};
        case ActionTypes.COUNTRY_LOADING:
            return {...state,isLoading: true, errMess: null, countries: []};
        default:
            return state;
    }
};