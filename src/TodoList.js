import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './TodoList.css';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: this.props.todos };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addItem() {
    var todos = this.props.todos;
    todos.push(ReactDOM.findDOMNode(this.refs.itemInput).value);
    ReactDOM.findDOMNode(this.refs.itemInput).value = "";
    localStorage.setItem('todos', JSON.stringify(todos));
    this.setState({ todos: todos });
  }

  removeItem(todo) {
    var todos = this.props.todos;
    todos.splice(todo, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    this.setState({ todos: todos });
  }

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <ul>
          {
            this.state.todos.map(function(todo, index){
              return <TodoItem
                        key={index}
                        id={index}
                        todo={todo}
                        removeItem={this.removeItem}
                     />;
            }.bind(this))
          }
        </ul>
        <input type="text" ref="itemInput"></input>
        <button onClick={this.addItem}>Add Item</button>
      </div>
    );
  }
}

export default TodoList;
