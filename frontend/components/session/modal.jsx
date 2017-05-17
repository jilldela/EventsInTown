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
    this.changeFormType = this.changeFormType.bind(this);
  }

  changeFormLink() {
    if (this.state.formType === 'Log In') {
      return (
        <p>Don't have an account? Sign up.</p>
      );
    } else {
      return (
        <p>Already have an account? Log in.</p>
      );
    }
  }

  changeFormType() {
    if (this.state.formType === 'Log In') {
      return this.setState({ formType: 'Sign Up', errors: [] });
    } else {
      return this.setState({ formType: 'Log In', errors: [] });
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
          contentLabel="Session Modal">

          <ul className="modal-buttons">
            <li>
              <button onClick={this.closeModal} className="close-modal-button">
                X
              </button>
            </li>
            <li>
              <button onClick={this.changeFormType}>{this.changeFormLink()}</button>
            </li>
          </ul>


          <SessionFormContainer formType={this.state.formType} />

        </Modal>
      </div>
    );
  }
}

export default SessionModal;
