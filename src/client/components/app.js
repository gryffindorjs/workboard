import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage.jsx';
import RegistrationPage from './RegistrationPage.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }
  render() {
    return (
      <div>
        <h1> Hello World</h1>
        {this.state.loggedIn ? (
          console.log('home page rendered')
        ) : (
          <div>
            <Router history={history}>
              <div>
                <Route path="/" component={LoginPage} />
                <Route path="/registration" component={RegistrationPage} />
              </div>
            </Router>
            {/* <LoginPage />
            <RegistrationPage /> */}
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
