import React, { Component } from "react";
import ModalContent from "components/ModalContent";

class Modal extends Component {
  state = { isOpen: false };

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isOpen } = this.state;
    const { modalProps, modalContent, additionalButton } = this.props;
    const toggleResult = this.toggleModal;

    return (
      <div>
        <div onClick={toggleResult}>{modalProps}</div>
        {isOpen && (
          <ModalContent
            onClose={toggleResult}
            content={modalContent}
            additionalButton={additionalButton}
          />
        )}
      </div>
    );
  }
}

export default Modal;
