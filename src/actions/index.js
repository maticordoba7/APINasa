const APIKEY = process.env.REACT_APP_NOT_SECRET_CODE
const axios = require('axios');


export const SET_IMAGES = "SET_IMAGES";
export const SET_PAGE = "SET_PAGE";
export const SET_ROVER = "SET_ROVER"; 
export const SET_CAMERA = "SET_CAMERA";
export const SET_EARTH_DATE = "SET_EARTH_DATE";
export const SET_SOL_DATE = "SET_SOL_DATE";

export function setImages (rover, page, camera, earthDate, solDate) {
  var url = ""
  if (solDate){
    url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${solDate}&camera=${camera}&page=${page}&api_key=${APIKEY}`
  } else {
    url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${earthDate}&camera=${camera}&page=${page}&api_key=${APIKEY}`
  }
  return function(dispatch) {
      return axios.get(url)
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

export function setRover(rover) {
  return function(dispatch) {
      dispatch({
          type: SET_ROVER,
          payload: rover
      })
  }
}


export function setCamera(camera) {
  return function(dispatch) {
      dispatch({
          type: SET_CAMERA,
          payload: camera
      })
  }
}


export function setEarthDate(earthDate) {
  return function(dispatch) {
    dispatch({
      type: SET_EARTH_DATE,
      payload: earthDate
    })
  }
}


export function setSolDate(solDate) {
  return function(dispatch) {
    dispatch({
      type: SET_SOL_DATE,
      payload: solDate
    })
  }
}