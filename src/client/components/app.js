import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Board from './board.jsx';
import LoginPage from './LoginPage.jsx';
import RegistrationPage from './RegistrationPage.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user: {
        username: '',
        password: ''
      }
    };
    this.changeToTrue = () => {
      // e.preventDefault();
      console.log('clicked that button');
      this.setState({ loggedIn: true });
      this.state.loggedIn = true;
    };
    // this.changeToTrue = this.changeToTrue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({ loggedIn: true });
    // const { username, password } = this.state;
    // console.log(
    //   `User: // ${username} // with password: // ${password} // has been submitted`
    // );
  }

  render() {
    const { onSubmit } = this.onSubmit;
    return (
      <div>
        {this.state.loggedIn ? (
          <div>
            <h1 style={{ 'text-align': 'center' }}> Home Page</h1>
            <Board />
          </div>
        ) : (
          <div>
            <Router history={history}>
              <div>
                <Link to="/login">Login Here</Link>
                <br />
                <br />
                <Link to="/registration">Register Here</Link>

                <Route
                  exact
                  path="/login"
                  render={props => (
                    <LoginPage {...props} changeToTrue={this.changeToTrue} />
                  )}
                />
                <Route path="/registration" component={RegistrationPage} />
              </div>
            </Router>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
