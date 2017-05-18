import React from 'react';

class EventIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    return (
      <h1>In the EventIndex!</h1>
    );

  }
}

export default EventIndex;
