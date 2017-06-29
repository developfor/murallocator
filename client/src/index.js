import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import configureStore from './store/configure-store';

import App from './App';
import Home from './containers/HomeContainer';
import UploadMural from './containers/UploadMuralContainer';
import About from './containers/AboutContainer';

import './index.css';

import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const store = configureStore();

const Main = (props) => (
  <Provider store={store}>
    <App children={props.children}/>
  </Provider>
)

let router = 
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="upload-mural" component={UploadMural}/>
    </Route>
  </Router>

ReactDOM.render(
  router,
  document.getElementById('root')
)
