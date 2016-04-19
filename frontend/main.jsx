var React = require('react');
var ReactDOM = require('react-dom');
var Game = require('./components/game');

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    React.createElement(Game, {}),
    document.getElementById("root")
  );
});
