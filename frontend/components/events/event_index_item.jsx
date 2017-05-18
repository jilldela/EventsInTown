import React from 'react';
import { Link } from 'react-router-dom';

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { eventDetail } = this.props;

    return (

        <div className="carousel-cell" >
          <Link to={`/events/${eventDetail.id}`}>
            <img
              className="cell-image"
              src={`${eventDetail.image}`}
              alt={`${eventDetail.title}`}/>            
          </Link>
        </div>

    );
  }
}

export default EventIndexItem;
