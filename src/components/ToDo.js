import React, { Component } from 'react';

/* jshint ignore:start */
class ToDo extends Component {
  render() {
    return (
      <li>
       <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
       <span>{ this.props.description }</span>
      </li>
    );
  }
}
/* jshint ignore:end */

export default ToDo;
