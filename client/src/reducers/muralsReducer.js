export default function reducer(state={
  murals: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case "FETCH_MURALS": {
      return {...state, fetching: true}
    }
    case "FETCH_MURALS_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_MURALS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        murals: action.payload,
      }
    }
  }

  return state
}
