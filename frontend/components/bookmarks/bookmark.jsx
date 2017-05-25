import React from 'react';
import { Link } from 'react-router-dom';

class Bookmark extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      event_id: parseInt(props.match.params.eventId),
      selected: false
    };

    this.bookmarkIcon = this.bookmarkIcon.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    const { bookmarks } = this.props.user;
    const { event_id } = this.state;

    let selected;

    if (bookmarks) {
      selected = bookmarks.filter( bookmark => (
        parseInt(event_id) === bookmark.id
      ));
    }

    if ( selected && selected.length >= 1 ) {
      this.setState({ selected: true });
    } else {
      this.setState({ selected: false});
    }
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.fetchUser(this.props.currentUser.id);
    }
  }

  bookmarkIcon() {
    if ( this.state.selected === true ) {
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

      if (this.state.selected) {
        this.props.deleteBookmark(this.state.event_id)
          .then(this.setState({ selected: false }));
      } else {
        const bookmark = {
          event_id: this.state.event_id,
          user_id: this.props.currentUser.id
        };
        this.props.createBookmark(bookmark)
          .then(this.setState({ selected: true }));
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
