import React from 'react';
import { Table, Button } from 'react-bootstrap';
import {useLocation, useHistory} from 'react-router-dom'
import ICalendarLink from "react-icalendar-link";

import graphQLFetch from './graphQLFetch.js'

var id = 0;
var address_order = " ";
var price = 0;
var time_order = " ";
var cost_order = 0;
var day_ind = 0;
var start = "9:30";
var inter = 0; 

function BookingSum() {
    let location = useLocation();
    var time_start = location.state.timing;
    const duration = location.state.duration;
    var time_end = parseInt(time_start.split(':')[0]) + parseInt(duration) + ':'+ time_start.split(':')[1];
    var cost = parseInt(location.state.price) * parseInt(duration);
    const ind = parseInt(location.state.index);
    const days_index = parseInt(location.state.days_index);

    id = ind+1;
    address_order = location.state.address;
    price = location.state.price;
    time_order = time_start + ' - ' + time_end + ' ' + location.state.date;
    cost_order = cost;
    day_ind = days_index;
    start = time_start;
    inter = parseInt(duration);


    return (
        <Table hover className="table_sum">
            <tbody>
                <tr>
                    <th scope="row">Address</th>
                    <td>{location.state.address}</td>
                </tr>
                <tr>
                    <th scope="row">Price</th>
                    <td>S$ {location.state.price}/hour</td>
                </tr>
                <tr>
                    <th scope="row">Time</th>
                    <td>{time_start} - {time_end} {location.state.date}</td>
                </tr>
                <tr>
                    <th scope="row">Cost</th>
                    <td>S$ {cost}</td>
                </tr>
            </tbody>
        </Table>
    );
}

// create calender according to the summary information(start time, end time, location...)
function AddEventToCalender() {
    let location = useLocation();
    var time_start = location.state.timing;
    const duration = location.state.duration;
    var time_end = parseInt(time_start.split(':')[0]) + parseInt(duration) + ':'+ time_start.split(':')[1];
    const dayPara =  location.state.date.split("/");
    const year = dayPara[2];
    const month = dayPara[1].length == 1? "0"+dayPara[1]:dayPara[1] ;
    const day = dayPara[0].length == 1? "0"+dayPara[0]:dayPara[0] ;
    const event = {
        title: "Your EV Charging Booking",
        description: "It's time to charge your car at the place you booked",
        startTime:  year + "-"+month+"-"+day+"T"+time_start+":00+10:00",
        endTime:    year + "-"+month+"-"+day+"T"+time_end+":00+10:00",
        location: location.state.address,
    
        }
        
    return (
        <div className='buttom_addIcs'>
            <Button className="addIcs"> 
                <ICalendarLink event={event}>
                    Add to Calendar
                </ICalendarLink>
            </Button>
        </div> 
    
    );
}



/*
* Summary Page
* show order summary information
* coupon codes input, "add to calendar", and "process to pay" button   
*/
export default class Summary extends React.Component {
    constructor() {
        super();
        this.updateTime = this.updateTime.bind(this);
    }

    async updateTime(){
        console.log(this.props.isLogined)
        if(this.props.isLogined === false) {
            alert("You have not logged in, please log in before procedding!");
        } else {
            const query = `mutation userTimeOrder($combo: comboInputs!) {
                userTimeOrder(combo: $combo) {
                    id
                }
            }`
            const combo = {id: id, days_index: day_ind, selectedTime: start, duration: inter, name: this.props.LoginedUser.name, email: this.props.LoginedUser.email, phoneNumber: this.props.LoginedUser.phoneNumber, address: address_order, price: price, time: time_order, cost: cost_order};
            const data = await graphQLFetch(query, { combo });
            if (data) {
                console.log("Successfully change time table");
                alert("Your booking is successful!");
            }
        }
        
    }


    render() {
        return (
            <React.Fragment>
                <h2 style={{textAlign: "center"}}>Your Booking Summary</h2>
                <BookingSum />
                <div className='coupon'>
                    <label style={{width:"100px", textAlign:"left", display:"inline-block"}}>Coupon Code:</label>
                        <input type="text" name="Name" placeholder="mock coupon function" />
                        <Button className="pay">Use Coupon</Button>
                </div>


                <div className='button_pay'>
                <Button className="pay" onClick={this.updateTime}>Proceed to Pay</Button>
                </div>
                <AddEventToCalender/>
            </React.Fragment>
        );
    }
}
