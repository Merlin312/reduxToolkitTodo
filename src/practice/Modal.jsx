import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button>dddd</button>

        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <h2>Modal Title</h2>
        <p>This is the content of the modal.</p>
        <button>dddd</button>
      </div>
    </div>
  );
};
export default Modal;
