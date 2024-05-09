import React, { useEffect, useState } from 'react';

const PracticeApp = () => {
  const [todo, setTodo] = useState(['novel', 'code', 'drunk', 'wst']);

  useEffect(() => {
    const interval1 = setInterval(() => {
      console.clear();
    }, 60000);

    const interval2 = setInterval(() => {
      console.log('Hello sexy girl');
    }, 5000);

    // Повертаємо функцію з очищенням інтервалів при виході з компонента
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return (
    <div>
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
