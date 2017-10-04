import home from './home-reducer.js';
import geolocation from './geolocationReducer.js';
import murals from './muralsReducer.js';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

const reducers = {
  geolocation: geolocation,
  murals: murals,
  form: formReducer,
  home: home
}

const rootReducer = combineReducers(reducers);
export default rootReducer;