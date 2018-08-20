import React, { Component } from 'react';

export default class TodoList extends Component {
  render() {
    const todoList = this.props.todoList.map((todo) => {
      return (
        <li key={`todolist-li-${todo.id}`} className="list-group-item" onClick={ () => {
          this.props.onClick(todo.id);
        } }>{ todo.text }</li>
      );
    });

    return (
      <ul className="list-group">
        { todoList }
      </ul>
    );
  }
}
