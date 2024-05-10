import React, { useState, useEffect } from 'react';

const Todo = ({ deleteAll }) => {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState('');
  // const [del, setDel] = useState(false);
  const hadleDeleteAll = () => {
    console.log('handleDelete works');
  };

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
  const handleDelete = function (index) {
    let newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
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
    <div style={{ marginTop: '1em' }}>
      {/* <>
        <button onClick={deleteAll && hadleDeleteAll}>Delete</button>
      </> */}
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
    </div>
  );
};

export default Todo;
