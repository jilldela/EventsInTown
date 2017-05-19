import React from 'react';
import Modal from 'react-modal';

import EventForm from './event_form';
import ModalStyle from './modal_style';

class EventModal extends React.Component {
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
    const { createEvent, session, errors, type, eventDetail } = this.props;

    return(
      <div className="event-modal">
        <button className="session-button" onClick={this.openModal}>
          Create Event
        </button>
        <Modal
          isOpen={this.state.openModal}
          onRequestClose={this.closeModal}
          style={ModalStyle}
          contentLabel="Event Form Modal"
          className="event-form-container">

          <EventForm
            type={type}
            eventDetail={{}}
            createEvent={createEvent}
            session={session}
            errors={errors}
            closeModal={this.closeModal}/>

        </Modal>

      </div>
    );
  }
}

export default EventModal;
