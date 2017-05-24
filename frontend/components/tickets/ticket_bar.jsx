import React from 'react';
import Modal from 'react-modal';

import TicketForm from './ticket_form';
import ModalStyle from './modal_style';

class TicketBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openModal: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({openModal: true});
  }

  closeModal() {
    this.setState({openModal: false});
  }

  render() {
    return (
      <div className="ticket-bar">
        <img
          src="https://res.cloudinary.com/db08acmvn/image/upload/v1495225777/bookmark_kdhxda.png"
          alt="bookmark"
          className="bookmark"/>
        <button className="ticket-button" onClick={this.openModal}>TICKETS</button>

          <Modal
            isOpen={this.state.openModal}
            onRequestClose={this.closeModal}
            style={ModalStyle}
            contentLabel="Tickets Modal"
            className="ticket-modal-container">

            <header className="ticket-modal-header">
              Select Tickets
              <button
                onClick={this.closeModal}
                className="close-modal-button">X</button>
            </header>
            <TicketForm closeModal={this.closeModal}/>

          </Modal>
      </div>
    );
  }
}

export default TicketBar;
