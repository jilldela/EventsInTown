import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      errors: props.errors
    };

    this.renderErrors = this.renderErrors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return (e) => {
      e.preventDefault();
      this.setState({ [property]: e.currentTarget.value });
    };
  }

  renderErrors() {
      return(
        <ul className="errors">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  render() {

    let { username, password } = this.state;

    return (
      <div>
        <form className="session-form-box">
          <h2 className="form-header">{this.props.type}</h2>
          {this.renderErrors()}
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={this.update('username')}
              className="session-input"
              />
          <br/>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={this.update('password')}
              className="session-input"
              />
          <br/>
            <input
              type="submit"
              value="Submit"
              className="submit-button"
              onClick={this.handleSubmit}/><br/>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
