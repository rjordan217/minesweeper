var React = require('react');
var Tile = require('./tile');
var Board = React.createClass({
  render: function() {
    var popular = function(j) {
      var row = [];
      var imprimir = function(evento) {
        console.log(evento.target.getAttribute("data-pos"));
      };
      for(var i = 0; i < 25; i++) {
        row.push(<Tile className="tile" tile={[j,i]} onClick={imprimir}></Tile>);
      }
      return row;
    };
    return (
      <div>
        {(function() {
        var grid = [];
        for(var j = 0; j < 25; j++) {
          grid.push(
            <ul className="grid">{popular(j)}</ul>
          );
        }
        return grid;
      })()}
      </div>
    );
  }

});

module.exports = Board;
