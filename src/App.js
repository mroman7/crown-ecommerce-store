import { Switch, Route } from 'react-router';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './components/signin-signup/signin-signup.component';
import { auth } from './firebase/firebase.utile';
import React from 'react';

class App extends React.Component{
  
  constructor(props){
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact  path='/shop' component={ShopPage} />
          <Route exact  path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    )
  }

}

export default App;
