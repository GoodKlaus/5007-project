import React from 'react';
import ReactDOM from 'react-dom';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap';
import {useLocation, useHistory} from 'react-router-dom'

import graphQLFetch from './graphQLFetch.js'

const tt = [["9:30"],
    ["9:30"],
    ["9:30"],
    ["9:30"],
    ["9:30"],
    ["9:30"], 
    ["9:30"]];
var ind_from_result = 0;



class TimeTable extends React.Component {
    constructor() {
        super();
    }

    render() {
        var timing = [];
        if (this.props.users.length > 1) {
            timing = this.props.users[ind_from_result].availableTimeTable[this.props.days_index];
        } else {
            timing = this.props.users[0].availableTimeTable[this.props.days_index];
        }
        

        return (
            <div className="container">
            <table className="grid">
                <tbody>
                <tr>
                { timing.map( row =>
                <td><Button color="primary" onClick={()=>this.props.handleClick(row)}>{row}</Button></td>)}
                </tr>
                </tbody>
            </table>
            </div>
        );
    }
}

function Detail(props) {
    let location = useLocation();
    let ind_curr = parseInt(location.state.ind_curr);
    ind_from_result = ind_curr;

    return (
        <div className='detail'>
            <div className="text_left"><h3>Address: {location.state.address}</h3></div>
            <div className="text_right"><h3>Distance: {location.state.dist} km</h3></div>
            <h3 className="price">Price: S$ {location.state.price}/hour</h3>
        </div>
    );
}

function Submission(props) {
    let history = useHistory();
    let location = useLocation();
    let ind_curr = parseInt(location.state.ind_curr);

    if (props.time_sel != " ") {
        const selected_time = props.time_sel;
        const tt_selected = props.users[ind_curr].availableTimeTable[props.days_index];
        const time_index = tt_selected.indexOf(selected_time);

        var selectionOK = true;
        var hours = [];
        const dt = props.duration;
        for (let i=0; i-1<dt; i++) {
            if(time_index+i>=tt_selected.length){
                console.log("duration too long", i);
                selectionOK = false;
                break;
            }
            const colon_ind = tt_selected[time_index+i].indexOf(':');
            var temp_hour = parseInt(tt_selected[time_index+i].slice(0, colon_ind));
            if (i>0 && temp_hour-1>hours[i-1]) {
                console.log("gap !!!");
                selectionOK = false;
                break;
            }
            hours.push(temp_hour);
        }
        console.log(selectionOK);
        if(!selectionOK){
            // alert("Your selection either exceeds owner's available time range or overlap booked timing, please select again");
            refresh(history, location);
        }
    }

    return (
        <Button type="submit" onClick={()=>props.handlePush(history, location, ind_curr)}>Submit</Button>
    );
}

function refresh(hist, loc) {
    hist.replace('/reload');
    setTimeout(()=>{
        hist.replace({pathname:'/info', state:{address: loc.state.address, price: loc.state.price, dist: loc.state.dist, ind_curr: loc.state.ind_curr}});
    })
}

export default class InfoDetail extends React.Component {
    constructor() {
        super();
        this.state = {users: [{availableTimeTable: tt}], days: [true,false,false,false,false,false,false], days_index: 0,
            time_sel: " ",
            duration: 1,
            date_sel: false,
            color_a: ["usual", "usual", "usual", "usual", "usual", "usual", "usual"],
        };
        this.show = this.show.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlePush = this.handlePush.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }
    
    async loadData() {
        const query = `query {
          userChargerList {
            id addressOfPile price availableTimeDisplay availableTimeTable
          }
        }`;
        const data = await graphQLFetch(query);
        if (data.userChargerList.length > 0) {
          this.setState({ users: data.userChargerList });
        }
    }

    show(addition) {
        var now = new Date();
        var target = new Date(now.getTime() + addition*24*60*60*1000);
        const date = (target.getDate()) + '/' + (target.getMonth()+1) + '/' + target.getFullYear();

        var days_init = [false,false,false,false,false,false,false];
        const day_of_week = (now.getDay() + addition) % 7;
        days_init[day_of_week] = true;

        var color_change = ["usual", "usual", "usual", "usual", "usual", "usual", "usual"];
        color_change[addition] = "Change";
        
        this.setState({color_a: color_change, days: days_init, days_index: addition, date_sel: date});
    }

    handleClick(t) {
        this.setState({time_sel: t});
    }

    handleChange(e) {
        this.setState({duration: e.target.value});
    }

    handlePush(history, location, ind_curr) {
        console.log("no prob");
        if (this.state.time_sel != " ") {
            var now = new Date();
            const date_now = (now.getDate()) + '/' + (now.getMonth()+1) + '/' + now.getFullYear();
            history.push({pathname: "/summary", state: {
                address: this.state.users[ind_curr].addressOfPile,
                price: this.state.users[ind_curr].price,
                timing: this.state.time_sel,
                duration: this.state.duration,
                date: (!this.state.date_sel) ? date_now : this.state.date_sel,
                index: ind_curr,
                days_index: this.state.days_index,
            }});
        } else {
            alert("You MUST select a charging time");
            refresh(history, location);
        } 
    }

    render() {
        var days = [];
        var now = new Date();
        for (let i=0; i<7; i++) {
            var temp = new Date(now.getTime() + i*24*60*60*1000);
            const date = (temp.getDate()) + '/' + (temp.getMonth()+1);
            days.push(date);
        }

        return (
            <React.Fragment>
            <Detail />
            <div id="nav_div">
            <h3 style={{textAlign:'center'}}>Vancant Timing</h3>
            <ul id="nav">
                <li  className={this.state.color_a[0]}><a onClick={()=>this.show(0)}>Today</a></li>
                <li  className={this.state.color_a[1]}><a onClick={()=>this.show(1)}>{days[1]}</a></li>
                <li  className={this.state.color_a[2]}><a onClick={()=>this.show(2)}>{days[2]}</a></li>
                <li  className={this.state.color_a[3]}><a onClick={()=>this.show(3)}>{days[3]}</a></li>
                <li  className={this.state.color_a[4]}><a onClick={()=>this.show(4)}>{days[4]}</a></li>
                <li  className={this.state.color_a[5]}><a onClick={()=>this.show(5)}>{days[5]}</a></li>
                <li  className={this.state.color_a[6]}><a onClick={()=>this.show(6)}>{days[6]}</a></li>
            </ul>
            <TimeTable users={this.state.users} days_index={this.state.days_index} handleClick={this.handleClick}/>
            </div>
            <Form horizontal className='info_form'>
                <FormGroup>
                    <Col sm={4}><h4>Your Selected Time:</h4></Col>
                    <Col sm={6}><h4>{this.state.time_sel}</h4></Col>
                </FormGroup>
                <FormGroup>
                    <Col sm={4}><h4>Your Charging Duration:</h4></Col>
                    <Col sm={6}>
                    <FormControl componentClass="select" onChange={this.handleChange}>
                        <option value={1}>1 hour</option>
                        <option value={2}>2 hours</option>
                        <option value={3}>3 hours</option>
                        <option value={4}>4 hours</option>
                        <option value={5}>5 hours</option>
                    </FormControl>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col smOffset={4} sm={6}>
                        <Submission handlePush={this.handlePush} users={this.state.users} time_sel={this.state.time_sel} days_index={this.state.days_index} duration={this.state.duration}/>
                    </Col>
                </FormGroup>
            </Form>
            </React.Fragment>
        );
    }
}