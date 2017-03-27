import React, { Component } from 'react';
import './TodoList.css';

class TodoList extends Component {
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <ul>
          {this.props.todos.map(function(todo, index){
            return <li key={index}>{todo}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
