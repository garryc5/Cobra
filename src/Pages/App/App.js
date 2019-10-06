import React, { Component } from 'react';
import './App.css';
// , Redirect 
import { Route, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
// import tokenService from '../../utils/tokenService';
import NavBar from '../../Components/NavBar/NavBar'


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
    this.setState({user: userService.getUser()});
  }

render() {
  return (
    <div>
      <h1>Bargain</h1>
      <Switch>
        <Route exact path='/' render={() =>
          <NavBar 
            user={this.state.user}
            handleLogout={this.handleLogout}
          />
        }/>
        <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
        
      </Switch>
    </div>
  );
}
}



export default App;
