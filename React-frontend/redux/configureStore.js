import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Countries } from './apicountry';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            countries: Countries
        }), applyMiddleware(thunk, logger)
    )
    return store;
}