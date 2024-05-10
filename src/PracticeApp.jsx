import { useState } from 'react';
import Modal from './practice/Modal';
import Todo from './practice/todo/Todo';

const PracticeApp = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };
  // const deleteAllTodo = () => {
  //   console.log('delete function work');
  console.log('some');
  // };
  return (
    <div>
      <h1>Hello</h1>
      {/* <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        deleteAll={deleteAllTodo}
      />
      <h1>Simple Modal Example</h1>
      <button onClick={openModal}>Delete all todos</button> */}
      {/* <Todo deleteAll={deleteAllTodo} /> */}
    </div>
  );
};

export default PracticeApp;
