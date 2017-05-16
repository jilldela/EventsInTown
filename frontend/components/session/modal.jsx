import React from 'react';
import Modal from 'react-modal';

import SessionFormContainer from './session_form_container';
import ModalStyle from './modal_style';

class SessionModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openModal: false,
      signIn: false,
      formType: props.type
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  changeFormLink() {
    if (this.state.formType === 'Log In') {
      return (
        <p>Or, sign up.</p>
      );
    } else {
      return (
        <p>Already have an account? Log in.</p>
      );
    }
  }

  changeFormType() {
  }

  openModal() {
    this.setState({openModal: true});
  }

  closeModal() {
    this.setState({openModal: false});
  }

  render() {
    return (
      <div>
        <button className="session-button" onClick={this.openModal}>
          {this.props.type}
        </button>

        <Modal
          isOpen={this.state.openModal}
          onRequestClose={this.closeModal}
          style={ModalStyle}
          contentLabel="Session Modal">

          {this.changeFormLink}
          <button onClick={this.changeFormType}></button>

          <button onClick={this.closeModal} className="close-modal-button">
            close
          </button>

          <SessionFormContainer formType={this.state.formType}/>

        </Modal>
      </div>
    );
  }
}

export default SessionModal;
