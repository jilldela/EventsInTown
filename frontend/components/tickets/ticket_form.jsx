import React from 'react';

class TicketForm extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);

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
    this.setState({ quantity: parseInt(e.currentTarget.value) });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTicket(this.state)
      .then(() => {
        this.props.closeModal();
        this.props.history.push(`/users/${this.props.session.currentUser.id}`);
      }
    );
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
          onSubmit={this.handleSubmit}
          className="ticket-form">
          <ul className="ticket-details">
            <label className="ticket-title">{eventDetail.title}</label>
            <label>${eventDetail.ticket_price}</label>
            <select className="ticket-quantity-selector" onChange={this.handleChange}>
              <option disabled selected>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
            </select>
          </ul>
          <footer className="ticket-footer">
            <label>QTY: {quantity}</label>
            <label>TOTAL: ${eventDetail.ticket_price * quantity}</label>
            <button className="submit-button ticket-checkout-button">CHECKOUT</button>
          </footer>
        </form>
      </div>
    );
  }
}

export default TicketForm;
