import {createStore, combineReducers, applyMiddleware} from "redux";
import {reducer as formReducer} from "redux-form";
import thunkMiddleware from "redux-thunk";
import searchReducer from "./search-reducer";
import countryReducer from './country-reducer';
let reducers = combineReducers({
    searchPage: searchReducer,
    countryPage: countryReducer,
    form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;