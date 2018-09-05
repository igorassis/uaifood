import { beginAjaxCall, ajaxCallError } from 'api/ajaxStatusActions';
import axios from 'axios';
import * as API from 'api/Connect';

const SEARCHBYCITY = API.SEARCHBYCITY;

export const LOAD_CITIES_ID = 'LOAD_CITIES_ID';
export const loadCitiesIdDispatch = (cities) => {
    return {type: LOAD_CITIES_ID, cities};
}
export const loadCitiesId = (city) => {
    return async dispatch => {
        dispatch(beginAjaxCall());

        try {
            const cities = await axios.get(SEARCHBYCITY+city, API.connect.getHeaders());
            return dispatch( loadCitiesIdDispatch(cities.response.location_suggestions))
        }catch(e){
            dispatch(ajaxCallError());
            throw e.errors;
        }
    };
}