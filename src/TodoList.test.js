import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

it('renders without crashing', () => {
  var todos = [1,2,3];
  const div = document.createElement('div');
  ReactDOM.render(<TodoList todos={todos}/>, div);
});
