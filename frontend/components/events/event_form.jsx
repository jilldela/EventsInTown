import React from 'react';
import merge from 'lodash/merge';

class EventForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      organizer_id: props.session.currentUser.id,
      title: (props.eventDetail.title || ''),
      location: (props.eventDetail.location || ''),
      date: (props.eventDetail.date || ''),
      time: (props.eventDetail.time || ''),
      description: (props.eventDetail.description || ''),
      image: (props.eventDetail.image || ''),
      ticket_price: (props.eventDetail.ticket_price || 0),
      ticket_quantity: (props.eventDetail.ticket_quantity || 0)
    };

    this.deleteButton = this.deleteButton.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.upload = this.upload.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(property) {
    return (e) => {
      e.preventDefault();
      this.setState({ [property]: e.currentTarget.value });
    };
  }

  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      (error, images) => {
        if (error === null) {
          this.setState({image: images[0].url});
        }
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.props.type === "Create An Event") {
      this.handleCreate();
    } else {
      this.handleEdit();
    }
  }

  handleCreate() {
    this.props.createEvent(this.state)
      .then(data => {
        this.props.history.push(`/events/${data.id}`);
        this.props.closeModal();
      }
    );
  }

  handleEdit() {
    let newState = merge({}, this.props.eventDetail, this.state);

    this.props.updateEvent(newState)
      .then(data => {
        this.props.history.push(`/events/${data.id}`);
        this.props.closeModal();
      }
    );
  }

  deleteButton() {
    if (this.props.type === "Edit Event") {
      return (
        <button className="delete-event-button" onClick={this.handleDelete}>Delete</button>
      );
    }
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteEvent(this.props.eventDetail.id);
    this.props.history.push('/');
  }

  renderErrors() {
    return (
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`event-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let { title, location, date, description, ticket_price, ticket_quantity } = this.state;
    let { eventDetail } = this.props;

    return (
      <div>
        <form className="event-form-box" onSubmit={this.handleSubmit}>
          <h2 className="form-header">{this.props.type}</h2>
          {this.renderErrors()}

          <label className="event-label">
            <input
              type="text"
              placeholder="Event Title *"
              value={title}
              onChange={this.update('title')}
              className="event-input"/>
          </label>

          <label className="event-label">
            <input
              type="text"
              placeholder="Location *"
              value={location}
              onChange={this.update('location')}
              className="event-input"/>
          </label>

          <label className="event-label date">Date*
            <input
              type="date"
              value={date}
              onChange={this.update('date')}/>
          </label>

          <label className="event-label">
            <textarea
              value={description}
              onChange={this.update('description')}
              placeholder="Description *"
              className="event-input event-description-input"></textarea>
          </label>

          <label className="event-label ticket">Ticket Price*
            <input
              type="text"
              value={ticket_price}
              onChange={this.update('ticket_price')}
              className="event-input"/>
          </label>

          <label className="event-label ticket">Ticket Quantity*
            <input
              type="text"
              value={ticket_quantity}
              onChange={this.update('ticket_quantity')}
              className="event-input"/>
          </label>

          <label className="event-label">
            <button
              onClick={this.upload}
              className="image-button">Upload Image</button>
          </label>

          {this.deleteButton()}

          <button className="submit-button">{this.props.type}</button>

        </form>
      </div>
    );
  }
}

export default EventForm;
