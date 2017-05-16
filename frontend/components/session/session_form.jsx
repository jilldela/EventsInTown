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

  update(property) {
    return (e) => {
      e.preventDefault();
      this.setState({ [property]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  render() {
    return (
      <div className="login-form-conatiner">
        <form onSubmit={this.handleSubmit} className="login-form'box">
          <label>Username
            <input
              type="text"
              value={this.username}
              onChange={this.update('username')}
              className="login-input"
              />
          </label>
          <br/>
          <label>Password
            <input
              type="password"
              value={this.password}
              onChange={this.update('password')}
              className="login-input"
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
