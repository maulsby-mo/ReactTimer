var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Countdown = require('Countdown');
var Timer = require('Timer');


//load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
//app css
require('style!css!sass!applicationStyles');

$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    <Route path="countdown" component={Countdown} />
    <IndexRoute path="timer" component={Timer} ></IndexRoute>
  </Route>
  </Router>,
  document.getElementById('app')
);
