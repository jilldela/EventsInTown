import React from 'react';
import { Route } from 'react-router-dom';

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {eventDetail} = this.props;

    return (
      <li>{eventDetail.title}</li>
    );
  }
}

export default EventIndexItem;
