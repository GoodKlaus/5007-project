import React from 'react';
// import URLSearchParams from 'url-search-params';
import { Route } from 'react-router-dom';
import Geocode from "react-geocode";

Geocode.setApiKey('AIzaSyBKEEQ4HcGDKPwClXap5h9Cjqf7S2yfp9o');
Geocode.enableDebug();

export default class Register extends React.Component {
    constructor(){
        super();
        this.state = {lat: 0.0, lon: 0.0};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getcoor = this.getcoor.bind(this);
    }
    getcoor() {
        const address = document.forms.registerForm.PileAddress.value;
        Geocode.fromAddress(address).then(
            (response) => {
                const lat_new = response.results[0].geometry.location.lat;
                const lng = response.results[0].geometry.location.lng;
                this.setState({lat: lat_new, lon: lng});
            },
              (error) => {
                console.error(error);
            }
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        const form = document.forms.registerForm;
        const name = form.Name.value;
        const email = form.Email.value;
        const phoneNumber = form.PhoneNumber.value;
        const password = form.Password.value;
        const isOwnerOfEVCharger = form.IsOwnerOfEVCharger.checked;

        let pileAddress = isOwnerOfEVCharger? form.PileAddress.value:"";
        if(isOwnerOfEVCharger) {
            this.getcoor(pileAddress);
        }
        let price = isOwnerOfEVCharger? parseFloat(form.Price.value):0;
        let start = parseInt(form.TimeStart.value);
        let end = parseInt(form.TimeEnd.value);
        if(!(/^([a-zA-Z ]){2,30}$/.test(name))) {
            alert("Name can only accept alphabets and space character (2 - 30 characters) ")
        }else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
            alert("Please enter correctly formatted email ")
        }else if(!(/^\d{8}$/.test(phoneNumber))){
            alert("Please enter 8-digit phoneNumber ")
        }else if(!(/^\w\w{7,11}$/.test(password))){
            alert("Password should be 8-12 alphabets or digits")
        }else{
            if(isOwnerOfEVCharger){
                if(!pileAddress){
                    alert("pileAddress can not be empty ")
    
                }else if(!price){
                    alert("price should be number ")
                }else if(start >= end){
                    alert("Please fill in correct available time format ")
                } else {
                        console.log(this.state.lat);
                        const registerUserCharger = {
                            name: name,
                            email: email,
                            phoneNumber:phoneNumber,
                            password:password,
                            isOwnerOfEVCharger: isOwnerOfEVCharger,
                            addressOfPile: pileAddress,
                            price: price,
                            startTime: start,
                            endTime: end,
                            lat: this.state.lat,
                            lon: this.state.lon,
                        };
                        const register = async () => {
                            const registedUserCharger = await this.props.addNewUserCharger(registerUserCharger)
                            if(!registedUserCharger){
                                alert("The email or phoneNumber has been registered.")
                            }else{
                                this.props.setLoginInfo({email:registerUserCharger.email,password:registerUserCharger.password, isOwnerOfEVCharger: registerUserCharger.isOwnerOfEVCharger});
                                this.props.setLoginStatus(true)
                            }
                        }
                        register();
                }
            } else {
                const registerUser = {
                    name: name,
                    email: email,
                    phoneNumber:phoneNumber,
                    password:password,
                    isOwnerOfEVCharger: isOwnerOfEVCharger,
                };
                const register = async () => {
                    const registedUser = await this.props.addNewUser(registerUser)
                    if(!registedUser){
                        alert("The email or phoneNumber has been registered.")
                    }else{
                        this.props.setLoginInfo({email:registerUser.email,password:registerUser.password, isOwnerOfEVCharger: registerUser.isOwnerOfEVCharger});
                        this.props.setLoginStatus(true)
                    }
                }
                register();
            }
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
                        <label style={{width:"200px", textAlign:"left", display:"inline-block"}}>Name:</label>
                        <input type="text" name="Name" placeholder="name" /><label style={{color :"red",fontSize:18}}>*</label>
                        <br/><br/>
                        <label style={{width:"200px", textAlign:"left", display:"inline-block"}}>Email:</label>
                        <input type="text" name="Email" placeholder="email with correct format" />
                        <label style={{color :"red",fontSize:18}}>*</label>
                        <br/><br/>
                        <label style={{width:"200px", textAlign:"left", display:"inline-block"}}>Phone Number: </label>
                        <input type="text" name="PhoneNumber" placeholder="8-digit phone number" />
                        <label style={{color :"red",fontSize:18}}>*</label>
                        <br/><br/>

                        <label style={{width:"200px", textAlign:"left", display:"inline-block"}}>Password: </label>
                        <input type="text" name="Password" placeholder="password" />
                        <label style={{color :"red",fontSize:18}}>*</label> 
                        <br/><br/>

                        <label style={{width:"200px", textAlign:"left", display:"inline-block"}}>Is a Owner of EV Charger </label>
                        <input type="checkbox" name="IsOwnerOfEVCharger" style={{width:"15px",height:"15px"}}/>
                        <label style={{color :"red",fontSize:18}}>*</label>
                        <br/><br/>

                        <label style={{width:"200px", textAlign:"left", display:"inline-block"}}>Address of Pile: </label>
                        <input type="text" name="PileAddress" placeholder="Please enter the address" />
                        <br/><br/>
                        <button onClick={this.getcoor} style={{width:"auto", marginRight:"10px"}}>Obtain Coordinates</button>
                        <label style={{width:"auto", textAlign:"left", display:"inline-block", color:"red"}}>Coordinates: ({this.state.lat}, {this.state.lon}) </label>
                        <br/><br/>
                        <label style={{width:"200px", textAlign:"left", display:"inline-block"}}>Price: </label>
                        <input type="text" name="Price" placeholder="S$ price /hour" />
                        <br/><br/>
                        <label style={{width:"200px", textAlign:"left", display:"inline-block"}}>Time Available - Start (Everyday): </label>
                        <select name="TimeStart">
                            <option value="0">00:00</option>
                            <option value="1">01:00</option>
                            <option value="2">02:00</option>
                            <option value="3">03:00</option>
                            <option value="4">04:00</option>
                            <option value="5">05:00</option>
                            <option value="6">06:00</option>
                            <option value="7">07:00</option>
                            <option value="8">08:00</option>
                            <option value="9">09:00</option>
                            <option value="10">10:00</option>
                            <option value="11">11:00</option>
                            <option value="12">12:00</option>
                            <option value="13">13:00</option>
                            <option value="14">14:00</option>
                            <option value="15">15:00</option>
                            <option value="16">16:00</option>
                            <option value="17">17:00</option>
                            <option value="18">18:00</option>
                            <option value="19">19:00</option>
                            <option value="20">20:00</option>
                            <option value="21">21:00</option>
                            <option value="22">22:00</option>
                            <option value="23">23:00</option>
                        </select>
                        <br/><br/>
                        <label style={{width:"200px", textAlign:"left", display:"inline-block"}}>Time Available - End (Everyday): </label>
                        <select name="TimeEnd">
                            <option value="0">00:00</option>
                            <option value="1">01:00</option>
                            <option value="2">02:00</option>
                            <option value="3">03:00</option>
                            <option value="4">04:00</option>
                            <option value="5">05:00</option>
                            <option value="6">06:00</option>
                            <option value="7">07:00</option>
                            <option value="8">08:00</option>
                            <option value="9">09:00</option>
                            <option value="10">10:00</option>
                            <option value="11">11:00</option>
                            <option value="12">12:00</option>
                            <option value="13">13:00</option>
                            <option value="14">14:00</option>
                            <option value="15">15:00</option>
                            <option value="16">16:00</option>
                            <option value="17">17:00</option>
                            <option value="18">18:00</option>
                            <option value="19">19:00</option>
                            <option value="20">20:00</option>
                            <option value="21">21:00</option>
                            <option value="22">22:00</option>
                            <option value="23">23:00</option>
                        </select>
                        <br/><br/>
                        
                        <button>Sign up</button>
                </form>
                </div>

                </React.Fragment>
            );
        }
    }
}
