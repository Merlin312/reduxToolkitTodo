import { useDispatch } from 'react-redux';
import { sortTodo } from '../../store/todosSlice';

const SortTodo = () => {
  const dispatch = useDispatch();

  const handleSortTodo = () => {
    dispatch(sortTodo()); // Виклик редуктора sortTodo як функції
  };
  return <button onClick={handleSortTodo}>Sort</button>;
};

export default SortTodo;
