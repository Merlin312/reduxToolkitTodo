import React, { useState, useEffect } from 'react';

const Todo = ({ deleteAll, todo, setTodo }) => {
  // const [todo, setTodo] = useState([]);
  const [value, setValue] = useState('');
  // сортування завдань
  const handleSortAll = () => {
    const sortTodo = [...todo].sort();
    setTodo(sortTodo);
  };
  // присвоєння значення для value
  const handleValue = (event) => {
    setValue(event.target.value);
  };
  // перевіряє чи наданий некст не пустий, і видаляє зайві пробіли з лівого і правого боку. Плюч додає до todo нове значення. паралельно стираючи введене в інпуті
  const handleAddNewTask = () => {
    if (value.trim() !== '') {
      setTodo([...todo, value]);
      setValue('');
    }
  };
  // при натисканні на Enter додає нове завдання
  const handlePressEnter = (event) => {
    if (event.key === 'Enter') {
      handleAddNewTask();
    }
  };
  // видаля елемент по індексу
  const handleDelete = function (index) {
    let newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };
  // що 30 секунд обнуляє консоль
  useEffect(() => {
    const interval = setInterval(() => {
      console.clear();
    }, 30000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ marginTop: '1em' }}>
      <div style={{ marginBottom: '1em' }}>
        {/* реалізація кнопки сортування */}
        {todo.length >= 5 && <button onClick={handleSortAll}>SortAll</button>}
      </div>
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
        <button onClick={handleAddNewTask}>Add new task</button>
        <h1>List of todos:</h1>
        <ul>
          {todo.map((task, index) => (
            <li key={index}>
              {task} <button onClick={() => handleDelete(index)}>X</button>
            </li>
          ))}
        </ul>
        {todo.length >= 5 && (
          <button
            onClick={() => {
              console.log('click');
              setTimeout(() => {
                setTodo([]);
              }, 10000);
            }}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default Todo;
