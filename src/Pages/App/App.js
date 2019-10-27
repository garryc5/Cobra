import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../Components/NavBar/NavBar'
import ImA from '../ImA/ImA'

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  render() {
    return (
      <div id="welcome-banner">
        <h1>Cobra</h1>
        <Switch>
          <Route exact path='/' render={() =>
            <NavBar
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          } />
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
<<<<<<< HEAD
          }/>
            <Route exact path='/ImA' render={({ history }) => 
            <ImA
            user={this.state.user}
            />
            }/>
      </Switch>
    </div>
  );
}
=======
          } />

        </Switch>
      </div>
    );
  }
>>>>>>> fix unstage
}



export default App;
