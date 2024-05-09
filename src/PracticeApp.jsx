import React, { useEffect, useState } from 'react';

const PracticeApp = () => {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    const interval1 = setInterval(() => {
      console.clear();
    }, 60000);
    return () => {
      clearInterval(interval1);
    };
  }, []);
  const handleValue = (event) => {
    setValue(event.target.value);
  };
  const handleAddValue = () => {
    setTodo([...todo, value]);
    setValue('');
  };
  return (
    <div>
      <input value={value} onChange={handleValue} />
      <button onClick={handleAddValue}>Add todo</button>
      <ul>
        {todo.map((todoItem, index) => {
          return (
            <li
              style={{
                color: 'red',
                fontSize: '2em',
              }}
              key={index}
            >
              {todoItem}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PracticeApp;
