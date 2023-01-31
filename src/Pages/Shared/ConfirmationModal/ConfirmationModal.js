import React from 'react';

const ConfirmationModal = ({title, message, closeModal, modalData, successAction, successButtonName}) => {
    return (
        <div> 
<input type="checkbox" id="confirmation-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="py-4">{message}</p>
    <div className="modal-action">
      <button onClick={closeModal} className='btn btn-accent'>Cancel</button>
      <label onClick={() => successAction(modalData)} htmlFor="confirmation-modal" className="btn">{successButtonName}</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default ConfirmationModal;