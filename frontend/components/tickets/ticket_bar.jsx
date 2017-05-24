import React from 'react';
import Modal from 'react-modal';

import TicketForm from './ticket_form';
import SessionForm from '../session/session_form';
import ModalStyle from './modal_style';

class TicketBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openModal: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.modalType = this.modalType.bind(this);
  }

  openModal() {
    this.setState({openModal: true});
  }

  closeModal() {
    this.setState({openModal: false});
  }

  modalType() {
    if (this.props.loggedIn === false) {
      window.SessionOpenModal();
    } else {
      this.openModal();
    }
  }

  render() {
      return (
        <div className="ticket-bar">
          <img
            src="https://res.cloudinary.com/db08acmvn/image/upload/v1495225777/bookmark_kdhxda.png"
            alt="bookmark"
            className="bookmark"/>
          <button className="ticket-button" onClick={this.modalType}>TICKETS</button>

          <Modal
            isOpen={this.state.openModal}
            onRequestClose={this.closeModal}
            style={ModalStyle}
            contentLabel="Tickets Modal"
            className="ticket-modal-container">

            <TicketForm
              closeModal={this.closeModal}
              eventDetail={this.props.eventDetail}/>

          </Modal>
        </div>
      );

  }
}

export default TicketBar;
