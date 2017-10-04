export default (state = [], action) => {
  switch (action.type) {
    case 'GET_GEOLOCATION':
    return  [action.geolocation]
      // return [...state,
      //   Object.assign({}, action.geolocation)
      // ];
    default:
      return state;
  }
};

