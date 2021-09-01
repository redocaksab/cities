import axios from "axios"

const SET_COUNTRIES = "SET-COUNTRIES";

let initialState = {
    countryInformation: {},
}

const countryReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_COUNTRIES: {
          return {
              ...state,
              countryInformation: action.countryInf,
          }
      }
        default:
            return state;

    }
}
const setCountryInf = (countryInf) => ({type: SET_COUNTRIES, countryInf})

export const getCountryInformation = (countryName) => {

    return (dispatch) => {
        axios.get(`https://api.visicom.ua/data-api/4.0/en/search/adm_country.json?text=${countryName}&key=213c3c86d2484ac85ae7b605cc5c99ae`)
        .then((response) => {
            
            if("features" in response.data) {
                dispatch(setCountryInf(response.data.features[0]));
            } else {
                dispatch(setCountryInf(response.data));
            }
            
        })
    }
}

export default countryReducer;