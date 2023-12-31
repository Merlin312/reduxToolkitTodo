import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../../store/todosSlice';

const RemoveAll = () => {
  const todos = useSelector((state) => state.todos); // Отримання списку елементів зі стану Redux
  const dispatch = useDispatch();
  const handleRemoveTodo = () => {
    dispatch(removeTodo(todos));
  };
  return (
    <>
      {todos.length >= 5 ? (
        <button style={{ marginTop: '10px' }} onClick={handleRemoveTodo}>
          RemoveAllTodo
        </button>
      ) : null}
    </>
  );
};
export default RemoveAll;
