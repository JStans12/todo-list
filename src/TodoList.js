import React, { Component } from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';

class TodoList extends Component {
  addItem() {
    console.log('stuff')
  }

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <ul>
          {this.props.todos.map(function(todo, index){
            return <TodoItem key={index} todo={todo} />;
          })}
        </ul>
        <input type="text" ref="itemInput"></input>
        <button onClick={this.addItem}>Add Item</button>
      </div>
    );
  }
}

export default TodoList;
