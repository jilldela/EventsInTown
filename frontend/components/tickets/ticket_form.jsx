import React from 'react';

class TicketForm extends React.Component {

  render() {
    return (
      <div className="ticket-box">

        <header className="ticket-modal-header">
          Select Tickets
          <button
            onClick={this.props.closeModal}
            className="close-modal-button">X</button>
        </header>

        <form className="ticket-form">
          <ul className="ticket-details">
            <label>{this.props.eventDetail.title}</label>
            <label>${this.props.eventDetail.ticket_price}</label>
          </ul>
          <select className="ticket-quantity-selector">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
        </form>

        <button className="submit-button ticket-checkout-button">CHECKOUT</button>
      </div>
    );
  }
}

export default TicketForm;
