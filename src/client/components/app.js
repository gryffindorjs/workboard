import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage.jsx';
import RegistrationPage from './RegistrationPage.jsx';
import Board from './board.jsx';
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
            <Board /> 
          </div>

      // <div>
      //   {this.state.loggedIn ? (
      //     console.log('home page rendered')
      //     <div>
	    //     <Router history={history}>
      //         <div>
      //           <Route path="/board" component={Board} />
      //         </div>
      //       </Router>
          
      //   ) : (
      //     <div>
      //       <Router history={history}>
      //         <div>
      //           <Route path="/" component={LoginPage} />
      //           <Route path="/registration" component={RegistrationPage} />
      //         </div>
      //       </Router>
      //     </div>
      //   )}
      // </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
