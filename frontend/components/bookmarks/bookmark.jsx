import React from 'react';
import { Link } from 'react-router-dom';

class Bookmark extends React.Component {
  constructor(props) {
    super(props);

    this.bookmarkIcon = this.bookmarkIcon.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(newProps) {
  }

  bookmarkIcon() {
    if ( this.props.eventDetail.bookmarked) {
      return (
        <i className="fa fa-bookmark selected" aria-hidden="true"></i>
      );
    } else {
      return (
        <i className="fa fa-bookmark-o unselected" aria-hidden="true"></i>
      );
    }
  }

  handleClick() {
    if (this.props.loggedIn === false) {
      window.SessionOpenModal();
    } else {
      if (this.props.eventDetail.bookmarked) {
        this.props.deleteBookmark(this.props.eventDetail.id);
      } else {
        const bookmark = { event_id: this.props.eventDetail.id };
        this.props.createBookmark(bookmark);
      }
    }
  }

  render() {
    return (
      <div className="bookmark" onClick={this.handleClick}>{this.bookmarkIcon()}</div>
    );
  }
}

export default Bookmark;
