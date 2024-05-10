import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, deleteAll }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <h2>DELETE All</h2>
        <p>Do you really want to delete all todos?</p>
        <button onClick={deleteAll}>Yes</button>
        <button onClick={onClose}>No</button>
      </div>
    </div>
  );
};
export default Modal;
