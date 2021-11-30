import React from 'react';
import ReactDom from 'react-dom';

const Modal = ({ open, onClose }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <div className='modal__overlay'>
      <div className='modal__content'>
        <button onClick={onClose}>Close Modal</button>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
