import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <li>
       <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
       <button onClick={() => this.props.deleteToDo(this.props.todo)}>DELETE</button>
       <span>{ this.props.todo.description }</span>
      </li>
    );
  }
}

export default ToDo;
