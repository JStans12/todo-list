import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList'
import './index.css';

var todos = JSON.parse(localStorage.getItem('todos')) || [];

ReactDOM.render(
  <TodoList todos={todos}/>,
  document.getElementById('root')
);
