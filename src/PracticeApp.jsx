import React, { useState, useEffect } from 'react';

const PracticeApp = () => {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState('');

  const handleValue = (event) => {
    setValue(event.target.value);
  };

  const handleAddNewTask = () => {
    if (value.trim() !== '') {
      setTodo([...todo, value]);
      setValue('');
    }
  };

  const handlePressEnter = (event) => {
    if (event.key === 'Enter') {
      handleAddNewTask();
    }
  };
  const handleDelete = function () {
    console.log('test how work function expression');
  };
  useEffect(() => {
    const interval = setInterval(() => {
      console.clear();
    }, 30000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <input
        value={value}
        onChange={handleValue}
        onKeyPress={handlePressEnter}
        placeholder="write your todos"
        style={{
          fontSize: '1.5em',
          borderRadius: '0.5em',
          border: '0.1em solid white',
          padding: '0.2em',
          marginRight: '0.5em',
        }}
      />
      <button onClick={handleAddNewTask}>Add new task!</button>
      <h1>List of todos:</h1>
      <ul>
        {todo.map((task, index) => (
          <li key={index}>
            {task} <button onClick={handleDelete}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PracticeApp;
