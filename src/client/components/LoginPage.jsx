import React from 'react';
// import { Link } from 'react-router-dom';
//
// import { connect } from 'react-redux';

export default class LoginPage extends React.Component {
  constructor() {
    super();

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
    const { username, password, submitted } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlfor="username">Username </label>
            <input
              type="text"
              name="username"
              onChange={this.onChange}
              value={username}
            />
          </div>
          <div>
            <label htmlfor="password">Password </label>
            <input
              type="text"
              name="password"
              onChange={this.onChange}
              value={password}
            />
          </div>
          <div>
            <input type="submit" value="Login" />
            {/* <button>Register</button> */}
          </div>
        </form>
      </div>
    );
  }
}
