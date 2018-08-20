import React, { Component } from 'react';
import './App.css';
import Title from './Title';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import FirebaseDB from './FirebaseDB';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    /**
     * FirebaseDB instance to access to external database.
     * @type {FirebaseDB}
     */
    this.firebaseDB = new FirebaseDB();

    // Set empty state and see if exists todos on external database.
    this.state = {
      data: [],
    };
    this.firebaseDB.getTodos((snapshotObject) => {
      for (const key in snapshotObject) {
        if (snapshotObject.hasOwnProperty(key)) {
          const element = snapshotObject[key];
          this.state.data.push({ id: key, text: element.text });
        }
      }
      this.setState({ data: this.state.data });
    });
  }

  getNewTodoId() {
    // The current timestamp is the choosed id.
    return Date.now();
  }

  handleAddTodo(value) {
    if (value) {
      // Frontend behaviour.
      const newTodo = {
        id: this.getNewTodoId(),
        text: value,
      };
      this.state.data.push(newTodo);
      this.setState({ data: this.state.data });
      // Backend behaviour.
      this.firebaseDB.createTodo(newTodo);
    }
  }

  handleRemoveTodo(id) {
    const currentTodos = this.state.data.filter((todo) => {
      return todo.id === id ? null : todo.id;
    });
    // Frontend behaviour.
    this.setState({ data: currentTodos });
    // Backend behaviour.
    this.firebaseDB.removeTodo(id);
  }

  render() {
    return (
      <main role="main" className="container">
        <div className="row">
          <div className="col">
            <Title titleName={'Groceries list'} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <TodoForm onClick={ this.handleAddTodo } />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <TodoList onClick={ this.handleRemoveTodo } todoList={ this.state.data } />
          </div>
        </div>
      </main>
    );
  }
}

export default App;
