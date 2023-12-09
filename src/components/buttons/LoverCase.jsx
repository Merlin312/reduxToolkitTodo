import { useDispatch } from 'react-redux';

const LoverCase = () => {
  const dispatch = useDispatch();
  const handleLoverCase = () => {
    dispatch(loverCase());
  };
  return (
    <>
      <button onClick={handleLoverCase}>LoverCase</button>
    </>
  );
};
export default LoverCase;
