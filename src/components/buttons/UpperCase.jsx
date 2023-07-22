import { useDispatch } from 'react-redux';
import { upperCase } from '../../store/todosSlice';

const UpperCase = () => {
  const dispatch = useDispatch();
  const handleUpperCase = () => {
    dispatch(upperCase());
  };
  return (
    <>
      <button onClick={handleUpperCase}>UpperCase</button>
    </>
  );
};
export default UpperCase;
