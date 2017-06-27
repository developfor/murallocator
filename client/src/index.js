import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import configureStore from './store/configure-store';

import App from './App';
import NotFound from './components/NotFound';

import Home from './containers/HomeContainer';
import Nearbymurals from './containers/NearbymuralsContainer';
import About from './containers/AboutContainer';
import Submitmural from './containers/SubmitmuralContainer';
import Newlyaddedmurals from './containers/NewlyaddedmuralsContainer';
import MuralMap from './containers/MapContainer';
import UploadMural from './containers/UploadMuralContainer';

import './css/normalize.css';
import './css/skeleton.css';
import './css/index.css';

import injectTapEventPlugin from 'react-tap-event-plugin';

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
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="nearby-murals" component={Nearbymurals}/>
      <Route path="about" component={About}/>
      <Route path="submit-mural" component={Submitmural}/>
      <Route path="map" component={MuralMap}/>
      <Route path="newly-added-murals" component={ Newlyaddedmurals }/>
      <Route path="upload-mural" component={ UploadMural }/>

       <Route path="*" component={NotFound} />
    </Route>
  </Router>

ReactDOM.render(
  router,
  document.getElementById('root')
)
