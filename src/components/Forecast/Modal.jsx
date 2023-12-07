import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, toggleModal, children, isEmpty}) => {
  return (
    <div className="modal" style={{ display : isOpen ? 'unset' : 'none' }}>
      <div className="modal-content" style={{ display : isEmpty ? 'none' : 'block' }}>
        { toggleModal && 
        <button className='bg-white flex right-0' onClick={toggleModal}>
          x
        </button>
        }
        {children}
      </div>
    </div>
  );
};

export default Modal;
