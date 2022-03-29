import React from 'react';
// import URLSearchParams from 'url-search-params';
import { Route } from 'react-router-dom';
export default class Register extends React.Component {
    render() {
        return (
            <React.Fragment>
              <h1>Register</h1>
               <form name="registerForm" onSubmit={this.handleSubmit}>
                    <label style={{width:"150px", textAlign:"left", display:"inline-block"}}>Name:</label>
                    <input type="text" name="Name" placeholder="Please enter user name" />
                    <br/><br/>
                    <label style={{width:"150px", textAlign:"left", display:"inline-block"}}>Email:</label>
                    <input type="text" name="Email" placeholder="Please enter email" />
                    <br/><br/>
                    <label style={{width:"150px", textAlign:"left", display:"inline-block"}}>Phone Number: </label>
                    <input type="text" name="PhoneNumber" placeholder="Please enter Phone Number" />
                    <br/><br/>

                    <label style={{width:"150px", textAlign:"left", display:"inline-block"}}>Is a Owner of EV </label>
                    <input type="checkbox" />
                    <br/><br/>

                    <label style={{width:"150px", textAlign:"left", display:"inline-block"}}>Address of Pile: </label>
                    <input type="text" name="PileAddress" placeholder="Please enter the address" />
                    <br/><br/>
                    <label style={{width:"150px", textAlign:"left", display:"inline-block"}}>Price: </label>
                    <input type="text" name="Price" placeholder="Please enter the price of pile per hour" />
                    <br/><br/>
                    <label style={{width:"150px", textAlign:"left", display:"inline-block"}}>Available Time: </label>
                    <input type="text" name="AvailableTime" placeholder="Please enter available time" />
                    <br/><br/>
                    
                    <button>Sign up</button>
               </form>

              </React.Fragment>
        );
    }
}