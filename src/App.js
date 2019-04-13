import React, { Component } from 'react'
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
      newTodoDescription: ''
     };
  }

  handleChange(e) {
     this.setState({ newTodoDescription: e.target.value })
   }

   deleteToDo (to_delete) {
     let filtered_array = this.state.todos.filter((todo) =>
       (todo.id === to_delete.id ));
     this.setState({todos: filtered_array});
   }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newTodoDescription) { return; }
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
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
                 description={ todo.description }
                 isCompleted={ todo.isCompleted }
                 toggleComplete={ () => this.toggleComplete(index) }
                 deleteToDo={ (todo) => this.deleteToDo (todo)}
           />
    ) }
       </ul>
         <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
          <input type="submit" />
        </form>

      </div>
    );
  }
}


export default App;
