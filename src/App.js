import React, { Component } from 'react';
import './App.css';
import Title from './Title';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
    this.todoIds = 1;
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
  }

  getNewTodoId() {
    const id = this.todoIds;
    this.todoIds += 1;
    return id;
  }

  handleAddTodo(value) {
    if (value) {
      const newTodo = {
        id: this.getNewTodoId(),
        text: value,
      };
      this.state.data.push(newTodo);
      this.setState({ data: this.state.data });
    }
  }

  handleRemoveTodo(id) {
    const currentTodos = this.state.data.filter((todo) => {
      if (todo.id !== id) return todo;
    });
    this.setState({ data: currentTodos });
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
