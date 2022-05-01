import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import graphQLFetch from './graphQLFetch.js';

import Home from './Home.jsx';
import Results from './Results.jsx';
import InfoDetail from './Info.jsx';
import Summary from './Summary.jsx';
import AboutUs from './AboutUs.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Profile from './Profile.jsx';
import OrderDisplay from './Order.jsx';


const NotFound = () => <h1>Page Not Found</h1>;

export default class Content extends React.Component {
  render(){
    return (
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/results" component={Results} />
        <Route path="/info" component={InfoDetail} />
        <Route path="/summary" render={(props) => <Summary {...props} isLogined = {this.props.isLogined} LoginedUser = {this.props.LoginedUser}/>}/>
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/login"  render={(props) => <Login {...props} isLogined = {this.props.isLogined} 
              setLoginInfo = {this.props.setLoginInfo}  setLoginStatus = {this.props.setLoginStatus} 
              checkUserIsExisted = {this.props.checkUserIsExisted}/>}/>
              
        <Route path="/register" render={(props) => <Register {...props} isLogined = {this.props.isLogined}
              setLoginStatus = {this.props.setLoginStatus} setLoginInfo = {this.props.setLoginInfo} 
              addNewUser = {this.props.addNewUser} addNewUserCharger={this.props.addNewUserCharger}/>}/>
        
        <Route path="/profile" render={(props) => <Profile {...props} LoginedUser = {this.props.LoginedUser}
              isLogined = {this.props.isLogined} setLoginStatus = {this.props.setLoginStatus}
               clearLoginedUserInfo = {this.props.clearLoginedUserInfo}/>} />
        <Route path="/order" render={(props) => <OrderDisplay {...props} LoginedUser = {this.props.LoginedUser} />} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

