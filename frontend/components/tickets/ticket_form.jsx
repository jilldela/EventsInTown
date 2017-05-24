import React from 'react';

class TicketForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      event_id: props.eventDetail.id,
      user_id: props.session.currentUser.id,
      quantity: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ quantity: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

  }

  render() {
    const { quantity } = this.state;

    return (
      <div className="ticket-box">

        <header className="ticket-modal-header">
          Select Tickets
          <button
            onClick={this.props.closeModal}
            className="close-modal-button">X</button>
        </header>

        <form
          className="ticket-form">
          <ul className="ticket-details">
            <label className="ticket-title">{this.props.eventDetail.title}</label>
            <label>${this.props.eventDetail.ticket_price}</label>
          </ul>
          <select className="ticket-quantity-selector">
            <option onChange={this.handleChange} value={1}>1</option>
            <option onChange={this.handleChange} value={2}>2</option>
            <option onChange={this.handleChange} value={3}>3</option>
            <option onChange={this.handleChange} value={4}>4</option>
            <option onChange={this.handleChange} value={5}>5</option>
            <option onChange={this.handleChange} value={6}>6</option>
          </select>
        </form>

        <button className="submit-button ticket-checkout-button" onClick={this.handleSubmit}>CHECKOUT</button>
      </div>
    );
  }
}

export default TicketForm;
