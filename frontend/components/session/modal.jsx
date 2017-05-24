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
      type: props.type
    };

    window.SessionOpenModal = () => {
      this.setState({openModal: true});
    };

    window.SessionOpenModal = window.SessionOpenModal.bind(this);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.changetype = this.changetype.bind(this);
  }

  changeFormLink() {
    if (this.state.type === 'Log In') {
      return (
        <p className="switch-form">Don't have an account? Sign up.</p>
      );
    } else {
      return (
        <p className="switch-form">Already have an account? Log in.</p>
      );
    }
  }

  changetype() {
    if (this.state.type === 'Log In') {
      this.props.clearErrors();
      return this.setState({ type: 'Sign Up' });
    } else {
      this.props.clearErrors();
      return this.setState({ type: 'Log In' });
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
                onClick={this.changetype}
                className="switch-form-button">
                {this.changeFormLink()}
              </button>
            </li>
          </ul>


          <SessionForm
            type={this.state.type}
            requestLogIn={this.props.requestLogIn}
            requestSignUp={this.props.requestSignUp}
            errors={this.props.errors}/>

        </Modal>
      </div>
    );
  }
}

export default SessionModal;
