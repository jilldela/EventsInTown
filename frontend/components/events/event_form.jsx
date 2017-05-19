import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class EventForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      organizer_id: props.session.currentUser.id,
      title: '',
      location: '',
      date: '',
      time: '',
      description: '',
      image: '',
      ticket_price: 0,
      ticket_quantity: 0,
    };

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

    this.props.createEvent(this.state)
      .then(data => {
        this.props.history.push(`/events/${data.id}`);
        this.props.closeModal();
      }
      );
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

    return (
      <div>
        <form className="event-form-box" onSubmit={this.handleSubmit}>
          <h2 className="form-header">Create An Event</h2>
          {this.renderErrors()}

          <label>Event Title*
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={this.update('title')}
              className="event-input"/>
          </label>

          <label>Location*
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={this.update('location')}
              className="event-input"/>
          </label>

          <label>
            <input
              type="date"
              value={date}
              onChange={this.update('date')}/>
          </label>

          <label>Description*
            <textarea
              value={description}
              onChange={this.update('description')}
              placeholder="Description"
              className="event-description"></textarea>
          </label>

          <label>Ticket Price*
            <input
              type="text"
              value={ticket_price}
              onChange={this.update('ticket_price')}
              className="event-input"/>
          </label>

          <label>Ticket Quantity*
            <input
              type="text"
              value={ticket_quantity}
              onChange={this.update('ticket_quantity')}
              className="event-input"/>
          </label>

          <label>
            <button
              onClick={this.upload}
              className="image-button">Upload Image</button>
          </label>

          <button className="submit-button">Create Event!</button>

        </form>
      </div>
    );
  }
}

export default withRouter(EventForm);
