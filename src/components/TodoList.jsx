import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import '../style/TodoList.css';
import { removeTodo } from '../store/todosSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todos); // Отримання списку елементів зі стану Redux
  const dispatch = useDispatch();
  const handleRemoveTodo = () => {
    dispatch(removeTodo(todos));
    console.log(todos);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} /> // Відображення кожного елемента списку
      ))}

      <button style={{ marginTop: '10px' }} onClick={handleRemoveTodo}>
        Remove Todo
      </button>
    </ul>
  );
};

export default TodoList;
