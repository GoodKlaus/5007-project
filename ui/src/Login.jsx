import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory, useLocation } from 'react-router-dom';
import graphQLFetch from './graphQLFetch.js';

// import URLSearchParams from 'url-search-params';
import { Route } from 'react-router-dom';
export default class Login extends React.Component {
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const form = document.forms.loginForm;
        const emialOrPhone = form.EmailOrTelephone.value;
        const password = form.Password.value;
        let loginInfo = [];
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emialOrPhone)){
            loginInfo = {email:emialOrPhone,password:password}
        }else if(/^\d{8}$/.test(emialOrPhone)){
            loginInfo = {phoneNumber:emialOrPhone,password:password}
        }else{
            alert("error user information or password")
        }
        const login = async () => {
            const isExisted = await this.props.checkUserIsExisted(loginInfo);
            console.log(isExisted);

            if(isExisted){
                this.props.setLoginInfo(loginInfo);
                this.props.setLoginStatus(true)
            }else{
                alert("We could not find your account")
            }
        }
        if(loginInfo.length != 0 ){
            login();
        }  
        
    }

    render() {
        if(this.props.isLogined) {
            return (
                <React.Fragment>
                    <h3>Hi! You has logged in. Welcome to Charging Door! :) </h3>
                </React.Fragment>
            );
        }else{
            return (
                <React.Fragment>
                <div className='login_content'>

                <h2>Login</h2>
                    <form name="loginForm" onSubmit={this.handleSubmit}>
                        <label style={{width:"150px", textAlign:"left", display:"inline-block"}}>Email/Phone Number:</label>
                        <input type="text" name="EmailOrTelephone" placeholder="Please enter Email/ Phone Number" />
                        <br/><br/>
                        <label style={{width:"150px", textAlign:"left", display:"inline-block"}}>Password: </label>
                        <input type="password" name="Password" placeholder="Please enter password" />
                        <br/><br/>
                        <button>Login</button>
                    </form>
                    </div>
                </React.Fragment>
            );
        }
    }
}
