import { useState, useEffect } from 'react';

const PracticeApp = () => {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState('');
  // const [showButon, setShowButton] = useState(false);
  const handleValue = (event) => {
    event.target.value;
  };
  const handleAddNewTask = () => {
    setTodo([...todo, value]);
    setValue('');
  };
  useEffect(() => {
    const interval = setInterval(() => {
      console.clear();
    }, 30000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  // useEffect(() => {
  //   const renderInterval = setTimeout(() => {
  //     setShowButton(true);
  //     return () => {
  //       clearTimeout(renderInterval);
  //     };
  //   }, 10000);
  // }, []);
  return (
    <div>
      {/* {showButon && <button>setTimeButton</button>} */}
      <input
        value={value}
        onChange={handleValue}
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
        {todo.map((todos, index) => {
          return <li key={index}>{todos}</li>;
        })}
      </ul>
    </div>
  );
};
export default PracticeApp;
