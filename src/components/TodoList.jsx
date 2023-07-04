import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import '../style/TodoList.css';
import RemoveAll from './buttons/RemoveAll';

const TodoList = () => {
  const todos = useSelector((state) => state.todos); // Отримання списку елементів зі стану Redux

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} /> // Відображення кожного елемента списку
      ))}
      <RemoveAll />
    </ul>
  );
};

export default TodoList;
