import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './style/App.css';
import Buttons from './components/Buttons';

const App = () => {
  setInterval(() => {
    console.clear();
  }, 60000);
  return (
    <div className="container">
      <Buttons />
      <h1>Todo List!!! </h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
