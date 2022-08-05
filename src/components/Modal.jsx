import React from "react";

const Modal = ({ modalState, setModalState, text }) => {
   return (
      <div className="modal">
         <button
            type="button"
            value={`${modalState}`}
            className="modal-close-btn"
            onClick={() => setModalState(modalState)}
         >
            Close
         </button>
         <span className="modal-text">{text}</span>
      </div>
   );
};

export default Modal;
