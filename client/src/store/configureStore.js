import rootReducer from '../reducers';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';


export default (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  )
}