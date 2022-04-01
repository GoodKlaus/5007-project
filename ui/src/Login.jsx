import React from 'react';
// import URLSearchParams from 'url-search-params';
import { Route } from 'react-router-dom';
export default class Register extends React.Component {
    render() {
        return (
            <React.Fragment>
             <div className='login_content'>

              <h2>Login</h2>
                <form name="loginForm">
                    <label style={{width:"150px", textAlign:"left", display:"inline-block"}}>Email/Phone Number:</label>
                    <input type="text" name="EmailOrTelephone" placeholder="Please enter Email/ Phone Number" />
                    <br/><br/>
                    <label style={{width:"150px", textAlign:"left", display:"inline-block"}}>Password: </label>
                    <input type="text" name="Password" placeholder="Please enter password" />
                    <br/><br/>
                    <button>Login</button>
                </form>
                </div>
              </React.Fragment>
        );
    }
}