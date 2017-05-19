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
    const {updateEvent, session, errors, eventDetail} = this.props;

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
              type="Edit Event"
              eventDetail={eventDetail}
              updateEvent={updateEvent}
              session={session}
              errors={errors}
              closeModal={this.closeModal}/>

          </Modal>
      </div>
    );
  }
}

export default EditModal;
