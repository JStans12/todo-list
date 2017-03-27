import React, { Component } from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <ul>
          {this.props.todos.map(function(todo, index){
            return <TodoItem key={index} todo={todo} />;
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
