import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import Content from './Content.jsx';
import graphQLFetch from './graphQLFetch.js';

class NavBar extends React.Component {
  render() {
    if(this.props.isLogined){
      return (
        <nav>
            <ul>
                <li><img src="logo.png" alt="logo"  width="80" height="60"></img></li>
                <li><h3>Charging Door</h3></li>
                <li><NavLink exact to="/home">Home</NavLink></li>
                <li><NavLink to="/aboutUs">About Us</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
    
            </ul>  
        </nav>
      );
    }else{
      return (
        <nav>
            <ul>
                <li><img src="logo.png" alt="logo"  width="80" height="60"></img></li>
                <li><h3>Charging Door</h3></li>
                <li><NavLink exact to="/home">Home</NavLink></li>
                <li><NavLink to="/aboutUs">About Us</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
            </ul>  
        </nav>
      );
    }
    
  }
}

export default class Page extends React.Component {
  constructor(){
    super();
    this.state = {
      isLogined : false,
      loginInfo:[],
      LoginedUser : []
    }

    this.loadUserInfo = this.loadUserInfo.bind(this);
    this.setLoginInfo = this.setLoginInfo.bind(this);
    this.setLoginStatus = this.setLoginStatus.bind(this);
    this.checkUserIsExisted = this.checkUserIsExisted.bind(this);
    this.clearLoginedUserInfo = this.clearLoginedUserInfo.bind(this);
    this.addNewUser = this.addNewUser.bind(this);

  }

  async checkUserIsExisted(userInput) {
    const query = `query getUser ($userInput:userLoginInput!){
        getUser(userInput:$userInput){
          name email phoneNumber isOwnerOfEV addressOfPile price availableTime
      }
    }`;
    const data = await graphQLFetch(query, { userInput });
    if(data.getUser){
      return true
    }else{
      return false
    }
  }

  //save user infomation
  async loadUserInfo(userInput) {
    const query = `query getUser ($userInput:userLoginInput!){
        getUser(userInput:$userInput){
          name email phoneNumber isOwnerOfEV addressOfPile price availableTime
      }
    }`;
    const data = await graphQLFetch(query, { userInput });
    this.setState({LoginedUser:data.getUser})
  }

  //add new user infomation
  async addNewUser(userInput) {
    const query = `mutation registerNewUser ($userInput:userRegisterInput!){
        registerNewUser(userInput:$userInput){
        name email phoneNumber isOwnerOfEV addressOfPile price availableTime
      }
    }`;
    const data = await graphQLFetch(query, { userInput });
    if(!data){
      return null;
    }else{
      return data.registerNewUser;
    }
  }


  //save login information(email,phoneNumber,password)
  setLoginInfo(loginInfo){
    this.setState({loginInfo:loginInfo});
    this.loadUserInfo(loginInfo);
  }

  setLoginStatus(status){
    this.setState({isLogined:status})
  }

  clearLoginedUserInfo(){
    this.setState({LoginedUser:[]});

  }


  render() {
    return (
      <React.Fragment>
      <div className = "page">
        <header><NavBar isLogined = {this.state.isLogined} /></header>

        <div className = "content"><Content isLogined = {this.state.isLogined} LoginedUser = {this.state.LoginedUser}
              setLoginInfo = {this.setLoginInfo}  setLoginStatus = {this.setLoginStatus} 
              checkUserIsExisted = {this.checkUserIsExisted} loadUserInfo = {this.loadUserInfo}
              clearLoginedUserInfo = {this.clearLoginedUserInfo} addNewUser= {this.addNewUser}/></div>
      </div>
      <footer>
          <small><i>Copyright &copy; <strong>ChargingDoor</strong><br></br><a href="mailto:Charging@Door.com">Charging@Door</a>
          </i></small>
      </footer>
      </React.Fragment>
    );
  }
}

