import React from 'react';

class TicketForm extends React.Component {

  render() {
    return (
      <div className="ticket-box">
        <form className="ticket-form">
          inside the form!
        </form>

        <button className="submit-button">Checkout</button>
      </div>
    );
  }
}

export default TicketForm;
