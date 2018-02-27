import { request } from "app/utils/request";
import { GET_COUNTRY_FIFA } from "./actionTypes";

export function setCountryFifa(country) {
  return { country, type: GET_COUNTRY_FIFA };
}

export function getCountryFifa(countryId) {
  return dispatch => {
    return request().get("/matches/country", { params: { fifa_code: countryId } })
    .then(response => {
      dispatch(setCountryFifa(response.data));
    });
  };
}

export default {
  getCountryFifa,
};
