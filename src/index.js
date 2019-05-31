import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import {Redirect, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import settings from './config/settings';
import Home from './components/Home/';
import './assets/scss/style.scss';


if (settings.IS_PROD) {
  ReactGA.initialize(settings.gaTrackingID);
}

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
)
