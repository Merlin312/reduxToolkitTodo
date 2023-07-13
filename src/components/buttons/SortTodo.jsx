import { useDispatch, useSelector } from 'react-redux';

const SortTodo = () => {
  const dispatch = useDispatch;
  const todos = useSelector((state) => state.todos);

  const handleSortTodo = () => {
    dispatch(sortTodo);
    console.log(todos);
  };
  return <button onClick={handleSortTodo}>Sort</button>;
};
export default SortTodo;
