import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './style/App.css';

const App = () => {
  setInterval(() => {
    console.clear();
  }, 60000);
  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoForm /> {/* Відображає форму для створення нового елемента */}
      <TodoList /> {/* Відображає список елементів */}
    </div>
  );
};

export default App;
