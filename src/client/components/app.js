import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from '/Users/user/Desktop/codesmith/Reinforcement Project/workboard/src/client/components/LoginPage.jsx';

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
          <LoginPage />
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
