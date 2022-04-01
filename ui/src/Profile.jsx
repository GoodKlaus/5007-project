import React from 'react';
// import URLSearchParams from 'url-search-params';
import { Route } from 'react-router-dom';
export default class Register extends React.Component {
    render() {
        return (
            <React.Fragment>
              <div className='profile_content'>
              <h2>Profile</h2>
                <form name="registerForm" onSubmit={this.handleSubmit}>
                    <label style={{width:"150px", textAlign:"left", display:"inline-block"}}>Name:</label>
                    <label>Zhu Haoyu</label>
                    <br/><br/>
                    <label style={{width:"150px", textAlign:"left", display:"inline-block"}}>Email:</label>
                    <label>12345678@u.nus.edu</label>
                    <br/><br/>
                    <label style={{width:"150px", textAlign:"left", display:"inline-block"}}>Phone Number: </label>
                    <label>12345678</label>
                    <br/><br/>

                    <label style={{width:"150px", textAlign:"left", display:"inline-block"}}>Is a Owner of EV </label>
                    <input type="checkbox" checked="true"/>
                    <br/><br/>

                    <label style={{width:"150px", textAlign:"left", display:"inline-block"}}>Address of Pile: </label>
                    <label>Pandan Garden</label>
                    <br/><br/>
                    <label style={{width:"150px", textAlign:"left", display:"inline-block"}}>Price: </label>
                    <label>S$ 20/hour</label>
                    <br/><br/>
                    <label style={{width:"150px", textAlign:"left", display:"inline-block"}}>Available Time: </label>
                    <label>From 2:00 pm   to   8:00 pm   Weekdays </label>
                    <br/><br/>
                    
                </form>
               </div>
              </React.Fragment>
        );
    }
}