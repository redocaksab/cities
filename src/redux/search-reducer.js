import axios from "axios"

const SEARCH_PROCESS = "SEARCH-PROCESS";
const CLEAR_STATE = "CLAER-STATE";

let initialState = {
    countries: [],
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_PROCESS: {
            return {
                ...state, countries: action.countries,
            }
        }
        case CLEAR_STATE: {
            return {
                countries: []
            }
        }
        default:
            return state;

    }
}
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}
export const getCountries = (countryName) => {

    return (dispatch) => {
        axios.get(`https://api.visicom.ua/data-api/4.0/en/search/adm_country.json?text=${countryName}&key=213c3c86d2484ac85ae7b605cc5c99ae`)
            .then(response => {
                if (isEmpty(response.data)) {
                    dispatch(clearState());
                } else {
                    let countries;
                    if (Array.isArray(response.data.features)) {
                        countries = response.data.features.map((item) => item.properties.name);
                    } else {
                        countries = [response.data.properties.name];
                    }
                    dispatch(setCountries(countries || [response.data.properties.name]));
                }

            })
    }
}

export const clearState = () => ({ type: CLEAR_STATE });

const setCountries = (countries) => ({ type: SEARCH_PROCESS, countries })

export default searchReducer;