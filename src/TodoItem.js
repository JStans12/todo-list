import React, { Component } from 'react';
import './TodoItem.css'

class TodoItem extends Component {
  removeItem() {

  }

  render() {
    return (
      <li className="todo-item">
        {this.props.todo * 2}
        <button
          className="delete-button"
          onClick={this.removeItem}>
          X
          </button>
      </li>
    )
  }
}

export default TodoItem;
