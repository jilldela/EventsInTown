import React from 'react';
import Modal from 'react-modal';

import SessionForm from './session_form';
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
    this.changeFormType = this.changeFormType.bind(this);
  }

  changeFormLink() {
    if (this.state.formType === 'Log In') {
      return (
        <p className="switch-form">Don't have an account? Sign up.</p>
      );
    } else {
      return (
        <p className="switch-form">Already have an account? Log in.</p>
      );
    }
  }

  changeFormType() {
    if (this.state.formType === 'Log In') {
      this.props.clearErrors();
      return this.setState({ formType: 'Sign Up' });
    } else {
      this.props.clearErrors();
      return this.setState({ formType: 'Log In' });
    }
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
          contentLabel="Session Modal"
          className="session-form-container">

          <ul className="modal-buttons">
            <li>
              <button
                onClick={this.closeModal}
                className="close-modal-button">
                X
              </button>
            </li>
            <li>
              <button
                onClick={this.changeFormType}
                className="switch-form-button">
                {this.changeFormLink()}
              </button>
            </li>
          </ul>


          <SessionForm
            formType={this.state.formType}
            processForm={this.props.processForm}
            errors={this.props.errors}/>

        </Modal>
      </div>
    );
  }
}

export default SessionModal;
