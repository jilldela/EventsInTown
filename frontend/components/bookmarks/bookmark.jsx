import React from 'react';
import { Link } from 'react-router-dom';

class Bookmark extends React.Component {
  constructor(props) {
    super(props);

    this.bookmarkIcon = this.bookmarkIcon.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id);
  }

  bookmarkIcon() {
    const { bookmarks } = this.props.user;
    const { eventId } = this.props.match.params;

    let selected;

    if (bookmarks) {
      selected = bookmarks.filter( bookmark => (
        parseInt(eventId) === bookmark.id
      ));
    }

    if ( selected && selected.length >= 1 ) {
      return (
        <i className="fa fa-bookmark selected" aria-hidden="true"></i>
      );
    } else {
      return (
        <i className="fa fa-bookmark-o unselected" aria-hidden="true"></i>
      );
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="bookmark">{this.bookmarkIcon()}</div>
    );
  }
}

export default Bookmark;
