import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       todos: [
         { id: 1, description: 'Walk the cat', isCompleted: true },
         { id: 2, description: 'Throw the dishes away', isCompleted: false },
         { id: 3, description: 'Buy new dishes', isCompleted: false }
       ],
      newTodoId: ' ',
     };
     console.log(this.state.todos, this.state.newTodoID);
  }

  handleChange(e) {
     this.setState({ newTodoId: e.target.value })
   }

  deleteToDo(to_delete) {
    let filtered_array = this.state.todos.filter((todo) =>
      (todo.id !== to_delete.id ));
    this.setState({todos: filtered_array});
  }


  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newTodoId) { return; }
    const newTodo = { id: this.state.todos.length + 1, description: this.state.newTodoId, isCompleted: false };
    this.setState({ todos: [...this.state.todos, newTodo], newTodoId: '' });
  }

  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }


  render() {
    return (
      <div className="App">

      <ul>
      { this.state.todos.map( (todo, index) =>
           <ToDo key={ index }
                 todo={todo}
                 id={ todo.id }
                 isCompleted={ todo.isCompleted }
                 toggleComplete={ () => this.toggleComplete(index) }
                 deleteToDo={ (todo) => this.deleteToDo (todo)}
           />
    ) }
       </ul>

         <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={ this.state.newTodoId } onChange={ (e) => this.handleChange(e) } />
          <input type="submit" />
        </form>

      </div>
    );
  }
}


export default App;
