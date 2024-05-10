import { useState } from 'react';
import Modal from './practice/Modal';
import Todo from './practice/todo/Todo';

const PracticeApp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const deleteAllTodo = () => {
    console.log('delete function work');
  };
  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        deleteAll={deleteAllTodo}
      />
      <button onClick={openModal}>Delete all todos</button>
      <Todo deleteAll={deleteAllTodo} />
    </div>
  );
};

export default PracticeApp;
