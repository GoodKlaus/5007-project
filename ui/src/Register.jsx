import React from 'react';
// import URLSearchParams from 'url-search-params';
import { Route } from 'react-router-dom';
export default class Register extends React.Component {
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const form = document.forms.registerForm;
        const name = form.Name.value;
        const email = form.Email.value;
        const phoneNumber = form.PhoneNumber.value;
        const password = form.Password.value;
        const isOwnerOfEV = form.IsOwnerOfEV.checked;
        let pileAddress = isOwnerOfEV? form.PileAddress.value:"";
        let price = isOwnerOfEV? parseFloat(form.Price.value):0;
        let availableTime = isOwnerOfEV? form.AvailableTime.value:"";
        if(!(/^([a-zA-Z ]){2,30}$/.test(name))) {
            alert("Name can only accept alphabets and space character (2 - 30 characters) ")
        }else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
            alert("Please enter correctly formatted email ")
        }else if(!(/^\d{8}$/.test(phoneNumber))){
            alert("Please enter 8-digit phoneNumber ")
        }else if(!(/^\w\w{7,11}$/.test(password))){
            alert("Password should be 8-12 alphabets or digits")
        }else{
            console.log(isOwnerOfEV);
            if(isOwnerOfEV){
                if(!pileAddress){
                    alert("pileAddress can not be empty ")
    
                }else if(!price){
                    alert("price should be number ")
                }else if(!availableTime){
                    alert("availableTime can not be empty ")
                }
            }

            const registerUser = {
                name: name,
                email: email,
                phoneNumber:phoneNumber,
                password:password,
                isOwnerOfEV: isOwnerOfEV,
                addressOfPile: pileAddress,
                price: price,
                availableTime: availableTime,
            }
            console.log(registerUser)
            const register = async () => {
                const registedUser = await this.props.addNewUser(registerUser)
                if(!registedUser){
                    alert("The email or phoneNumber has been registered.")
                }else{
                    this.props.setLoginInfo({email:registerUser.email,password:registerUser.password});
                    this.props.setLoginStatus(true)
                }
            }
            register();
        }
    }
    render() {
        if(this.props.isLogined) {
            return (
                <React.Fragment>
                    <h3>Hi! You has registered a new account. Welcome to Charging Door! :) </h3>
                </React.Fragment>
            );
        }else{
            return (
                <React.Fragment>
                <div className='register_content'>
                <h2>Register</h2>
                <form name="registerForm" onSubmit={this.handleSubmit}>
                        <label style={{width:"150px", textAlign:"left", display:"inline-block"}}>Name:</label>
                        <input type="text" name="Name" placeholder="name" /><label style={{color :"red",fontSize:18}}>*</label>
                        <br/><br/>
                        <label style={{width:"150px", textAlign:"left", display:"inline-block"}}>Email:</label>
                        <input type="text" name="Email" placeholder="email with correct format" />
                        <label style={{color :"red",fontSize:18}}>*</label>
                        <br/><br/>
                        <label style={{width:"150px", textAlign:"left", display:"inline-block"}}>Phone Number: </label>
                        <input type="text" name="PhoneNumber" placeholder="8-digit phone number" />
                        <label style={{color :"red",fontSize:18}}>*</label>
                        <br/><br/>

                        <label style={{width:"150px", textAlign:"left", display:"inline-block"}}>Password: </label>
                        <input type="text" name="Password" placeholder="password" />
                        <label style={{color :"red",fontSize:18}}>*</label> 
                        <br/><br/>

                        <label style={{width:"150px", textAlign:"left", display:"inline-block"}}>Is a Owner of EV </label>
                        <input type="checkbox" name="IsOwnerOfEV" style={{width:"15px",height:"15px"}}/>
                        <label style={{color :"red",fontSize:18}}>*</label>
                        <br/><br/>

                        <label style={{width:"150px", textAlign:"left", display:"inline-block"}}>Address of Pile: </label>
                        <input type="text" name="PileAddress" placeholder="Please enter the address" />
                        <br/><br/>
                        <label style={{width:"150px", textAlign:"left", display:"inline-block"}}>Price: </label>
                        <input type="text" name="Price" placeholder="S$ price /hour" />
                        <br/><br/>
                        <label style={{width:"150px", textAlign:"left", display:"inline-block"}}>Available Time: </label>
                        <input type="text" name="AvailableTime" placeholder="available time" />
                        <br/><br/>
                        
                        <button>Sign up</button>
                </form>
                </div>

                </React.Fragment>
            );
        }
    }
}