var React = require('react');

var Tile = React.createClass({
  render: function() {
    return (
      <li className={this.props.className}
        data-pos={this.props.tile}
        onClick={this.props.onClick}>T</li>
    );
  }

});

module.exports = Tile;
