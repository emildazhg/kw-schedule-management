import React from "react";
import ReactDOM from "react-dom";
import ReactFocusTrap from "react-focus-trap";

const ModalContent = ({ content, additionalButton, onClose }) => {
  return ReactDOM.createPortal(
    <ReactFocusTrap
      focusTrapOptions={{ onDeactivate: onClose }}
      className="modal__cover"
    >
      <div className="modal__main">
        <div className="modal__header">{content.header}</div>
        <div className="modal__body">{content.body}</div>
        <div className="modal__footer">
          <div className="button button-cancel" onClick={onClose}>
            Close
          </div>
          {additionalButton}
        </div>
      </div>
    </ReactFocusTrap>,
    document.body
  );
};

export default ModalContent;
