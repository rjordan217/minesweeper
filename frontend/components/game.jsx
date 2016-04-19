var React = require('react');
var Board = require('./board');
var Minesweeper = require('../../msgame');

var Game = React.createClass({
  getInitialState: function() {
    var cuadro = new Minesweeper.Board();
    return {
      board: cuadro
    };
  },
  updateGame: function() {

  },
  render: function() {
    return (
      <div>
        <h1>El Camino del Dragaminas</h1>
        <Board board={this.state.board} update={this.updateGame}></Board>
      </div>
    );
  }

});

module.exports = Game;
