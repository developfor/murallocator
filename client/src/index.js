import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import AppState from './stores/appState';

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
const appState = new AppState();
injectTapEventPlugin()



const Main = (props) => (
    <App children={props.children}/>
)

let router = 
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={Main} appState={appState} >
      <IndexRoute component={Home} appState={appState} />
      <Route path="nearby-murals" component={Nearbymurals} appState={appState} />
      <Route path="about" component={About} appState={appState} />
      <Route path="submit-mural" component={Submitmural} appState={appState} />
      <Route path="map" component={MuralMap} appState={appState} />
      <Route path="newly-added-murals" component={ Newlyaddedmurals } appState={appState} />
      <Route path="upload-mural" component={ UploadMural }appState={appState} />
       <Route path="*" component={NotFound} appState={appState} />
    </Route>
  </Router>

ReactDOM.render(
  router,
  document.getElementById('root')
)
