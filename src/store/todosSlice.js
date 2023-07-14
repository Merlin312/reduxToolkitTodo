import { createSlice } from '@reduxjs/toolkit';

// Створення "срізу" (slice) за допомогою функції createSlice з пакету @reduxjs/toolkit
const todosSlice = createSlice({
  name: 'todos', // Назва срізу
  initialState: [], // Початковий стан (пустий масив)
  reducers: {
    // Визначення редукторів (actions) для зміни стану срізу
    addTodo: (state, action) => {
      // Редуктор для додавання нової задачі
      state.push({ id: Date.now(), text: action.payload, completed: false }); // Додавання нового об'єкта задачі до стану масиву
    },
    toggleTodo: (state, action) => {
      // Редуктор для зміни статусу виконання задачі
      const todo = state.find((todo) => todo.id === action.payload); // Знаходження задачі за ідентифікатором
      if (todo) {
        // Якщо задача знайдена
        todo.completed = !todo.completed; // Зміна статусу виконання задачі
      }
    },
    deleteTodo: (state, action) => {
      // Редуктор для видалення задачі
      return state.filter((todo) => todo.id !== action.payload); // Фільтрація масиву задач за ідентифікатором і повернення нового масиву без видаленої задачі
    },
    removeTodo: () => [],

    sortTodo: (state) => {
      state.sort((a, b) => a.text.localeCompare(b.text));
    },
  },
});

// Експорт редукторів (actions) з срізу
export const { addTodo, toggleTodo, deleteTodo, removeTodo, sortTodo } =
  todosSlice.actions;

// Експорт редуктора (reducer) срізу
export default todosSlice.reducer;
