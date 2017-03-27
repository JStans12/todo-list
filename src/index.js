import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoList from './TodoList'
import './index.css';

ReactDOM.render(
  <div>
    <App />
    <TodoList todos={[1,2,3,4,5]}/>
  </div>,
  document.getElementById('root')
);
