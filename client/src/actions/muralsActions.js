import axios from "axios";

export function fetchMurals(){
  return function(dispatch) {
    dispatch({type: "FETCH_MURALS"});
    
    axios.get("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson")
      .then((response) => {
        dispatch({type: "FETCH_MURALS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_MURALS_REJECTED", payload: err})
      })
  }
}

