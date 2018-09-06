import React from 'react';
// import { Link } from 'react-router-dom';

export default class RegistrationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userProfile: {
        email: '',
        firstName: '',
        lastName: '',
        username: '',
        password: ''
      },
      submitted: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(event) {
    const { name, value } = event.target;
    const { userProfile } = this.state;
    this.setState({
      userProfile: {
        ...userProfile,
        [name]: value
      }
    });
  }
  onSubmit(event) {
    event.preventDefault();
    // this.setState({ submited: true });
    let { userProfile } = this.state;
    // userProfile = JSON.stringify(userProfile);
    console.log(userProfile);
  }
  // onSubmit={}
  render() {
    const {
      email,
      firstName,
      lastName,
      username,
      password
    } = this.state.userProfile;

    console.log('Registration Component Rendered');

    return (
      <div>
        <h1>Registration</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div>
            <label htmlFor="firstName">First Name: </label>
            <input
              type="text"
              name="firstName"
              onChange={this.onChange}
              value={firstName}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              name="lastName"
              onChange={this.onChange}
              value={lastName}
            />
          </div>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              name="username"
              onChange={this.onChange}
              value={username}
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="text"
              name="password"
              onChange={this.onChange}
              value={password}
            />
          </div>
          <div>
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    );
  }
}
