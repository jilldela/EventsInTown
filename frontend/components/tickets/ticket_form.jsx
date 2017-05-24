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
    const { eventDetail } = this.props;

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
            <label className="ticket-title">{eventDetail.title}</label>
            <label>${eventDetail.ticket_price}</label>
          </ul>
          <select className="ticket-quantity-selector" onChange={this.handleChange}>
            <option disabled selected>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
        </form>
        <footer className="ticket-form-footer">
          <label>QTY: {quantity}</label>
          <label>TOTAL: ${eventDetail.ticket_price * quantity}</label>
          <button className="submit-button ticket-checkout-button" onClick={this.handleSubmit}>CHECKOUT</button>
        </footer>
      </div>
    );
  }
}

export default TicketForm;
