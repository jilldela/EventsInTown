import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {

  }

  update(property) {
    return (e) => {
      e.preventDefault();
      this.setState({ [property]: e.currentTarget.value });
    };
  }

  authRedirect() {
    if (this.props.formType === 'Log In') {
      return (
        <Link>Or, sign up.</Link>
      );
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  render() {
    return (
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className="session-form-box">
          <h3>{this.props.formType}</h3>
          <br/>
          <label>
            <input
              type="text"
              placeholder="Username"
              value={this.username}
              onChange={this.update('username')}
              className="session-input"
              />
          </label>
          <br/>
          <label>
            <input
              type="password"
              placeholder="Password"
              value={this.password}
              onChange={this.update('password')}
              className="session-input"
              />
          </label>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
