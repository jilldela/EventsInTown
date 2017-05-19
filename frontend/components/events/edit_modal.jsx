import React from 'react';
import Modal from 'react-modal';

import EventForm from './event_form';
import ModalStyle from './modal_style';

class EditModal extends React.Component {
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
    const {
      updateEvent,
      session,
      errors,
      eventDetail,
      deleteEvent,
      history
    } = this.props;

    return (
      <div>
        <button
          className="edit-form-button"
          onClick={this.openModal}>
            Edit Event
        </button>

          <Modal
            isOpen={this.state.openModal}
            onRequestClose={this.closeModal}
            style={ModalStyle}
            contentLabel="Event Form Modal"
            className="event-form-container">

            <EventForm
              history={history}
              type="Edit Event"
              updateEvent={updateEvent}
              eventDetail={eventDetail}
              deleteEvent={deleteEvent}
              session={session}
              errors={errors}
              closeModal={this.closeModal}/>

          </Modal>
      </div>
    );
  }
}

export default EditModal;
