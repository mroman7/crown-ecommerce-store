import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';

import { setCurrentUser } from './redux/user/user.actions';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './components/signin-signup/signin-signup.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utile';

import './App.css';
class App extends React.Component{
  
  unsubscribeFromAuth = null;

  componentDidMount(){

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          // saving/ state value of new user in a redux store / dispatching (means changing state value)
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })          
        });        
      }
      else {
        // saving already redistered user login session / information in redux store state
        setCurrentUser(userAuth);
      }

    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact  path='/shop' component={ShopPage} />
          <Route exact  path='/signin' render={ () => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />) } />
        </Switch>
      </div>
    )
  }

}

// mapStateToProps is used to only get the state values
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
});


// mapDispatchToProps is used to change store's state value
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
