import React, { Component } from 'react';
import './TodoItem.css'

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem() {
    this.props.removeItem(this.props.id);
  }

  render() {
    return (
      <li className="todo-item">
        {this.props.todo}
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
