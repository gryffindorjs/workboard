import React from 'react';
import { Link } from 'react-router-dom';

// import { connect } from 'react-redux';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
      // submitted: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  onSubmit(event) {
    event.preventDefault();
    // this.setState({ submited: true });
    const { username, password } = this.state;
    console.log(
      `User: // ${username} // with password: // ${password} // has been submitted`
    );
  }

  render() {
    console.log('Login Component Rendered');
    console.log(this.props);
    const { username, password, submitted } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="username">Username </label>
            <input
              type="text"
              name="username"
              onChange={this.onChange}
              value={username}
            />
          </div>
          <div>
            <label htmlFor="password">Password </label>
            <input
              type="text"
              name="password"
              onChange={this.onChange}
              value={password}
            />
          </div>
          <div>
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    );
  }
}
