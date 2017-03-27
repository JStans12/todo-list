import React, { Component } from 'react';
import './TodoItem.css'

class TodoItem extends Component {
  render() {
    return (
      <li>{this.props.todo * 2}</li>
    )
  }
}

export default TodoItem;
