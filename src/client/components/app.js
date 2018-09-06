import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Board from './board.jsx';
import LoginPage from './LoginPage.jsx';
import RegistrationPage from './RegistrationPage.jsx';

const TempHome = () => {
  console.log('Home Component Rendered');
  return <div>Home me up Homie</div>;
};

// const error = () => {
//   console.log('Error Component Rendered');
//   return <div>Error Route does not exist</div>;
// };


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
        <h1> Hello World to the Home Page</h1>
        {this.state.loggedIn ? (
          <div>
          {/* // temp home component */}
            <TempHome /> 
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

                <Route exact path="/login" component={LoginPage} />
                <Route path="/registration" component={RegistrationPage} />
                {/* <Route component={error} /> */}
              </div>
            </Router>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
