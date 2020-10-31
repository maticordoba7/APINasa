const APIKEY = process.env.REACT_APP_NOT_SECRET_CODE
const axios = require('axios');


export const SET_IMAGES = "SET_IMAGES";
export const SET_PAGE = "SET_PAGE"; 


export function setImages (rover, page) {
    return function(dispatch) {
      return axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000&page=${page}&api_key=${APIKEY}`)
        .then(result => result.data)
        .then(data => {
          dispatch({
            type: SET_IMAGES,
            payload: data.photos
          })
        })
    };
  }


export function setPage(number) {
    return function(dispatch) {
        dispatch({
            type: SET_PAGE,
            payload: number
        })
    }
}