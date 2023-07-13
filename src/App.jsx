// import React from 'react';
// import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList';
// import './style/App.css';
// import Buttons from './components/Buttons';
import Practice from './practice/Practice';

const App = () => {
  setInterval(() => {
    console.clear();
  }, 60000);
  return (
    <div className="container">
      <Practice />
      {/* <Buttons />
      <h1>Todo List! </h1>
      <TodoForm />
      <TodoList /> */}
    </div>
  );
};

export default App;
