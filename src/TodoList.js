import React, { Component } from 'react';
import './TodoList.css';

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(function(todo){
          return <li>{todo}</li>;
        })}
      </ul>
    );
  }
}

export default TodoList;
