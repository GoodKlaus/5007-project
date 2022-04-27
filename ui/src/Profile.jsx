import React from 'react';
// import URLSearchParams from 'url-search-params';
import { Route } from 'react-router-dom';
export default class Register extends React.Component {
    constructor(){
        super();
        this.logout = this.logout.bind(this);
    }
    logout(){
        this.props.setLoginStatus(false);
        this.props.clearLoginedUserInfo();
    }
    render() {
        if(this.props.isLogined === false){
            return (
                <React.Fragment>
                    <h3 style={{color:"red"}}>Error! Have not logged in. </h3>
                </React.Fragment>
            );
        }else{
            return (
                <React.Fragment>
                <div className='profile_content'>
                <h2>Profile</h2>
                    <form name="registerForm" onSubmit={this.handleSubmit}>
                        <label style={{width:"150px", textAlign:"left", display:"inline-block"}}>Name:</label>
                        <label>{this.props.LoginedUser.name}</label>
                        <br/><br/>
                        <label style={{width:"150px", textAlign:"left", display:"inline-block"}}>Email:</label>
                        <label>{this.props.LoginedUser.email}</label>
                        <br/><br/>
                        <label style={{width:"150px", textAlign:"left", display:"inline-block"}}>Phone Number: </label>
                        <label>{this.props.LoginedUser.phoneNumber}</label>
                        <br/><br/>

                        <label style={{width:"150px", textAlign:"left", display:"inline-block"}}>Is a Owner of EV </label>
                        <input type="checkbox" checked={this.props.LoginedUser.isOwnerOfEV} style={{width:"15px",height:"15px"}}/>
                        <br/><br/>

                        <label style={{width:"150px", textAlign:"left", display:"inline-block"}}>Address of Pile: </label>
                        <label>{this.props.LoginedUser.addressOfPile}</label>
                        <br/><br/>
                        <label style={{width:"150px", textAlign:"left", display:"inline-block"}}>Price: </label>
                        <label>S$ {this.props.LoginedUser.price} /hour</label>
                        <br/><br/>
                        <label style={{width:"150px", textAlign:"left", display:"inline-block"}}>Available Time: </label>
                        <label>{this.props.LoginedUser.availableTime} </label>
                        <br/><br/>
                    </form>
                    <button className='logoutButtom' onClick={this.logout}>Logout</button>
                </div>
                </React.Fragment>
            );
        }
    }
}