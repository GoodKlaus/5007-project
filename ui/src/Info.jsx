import React from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap';
import {useLocation, useHistory} from 'react-router-dom'

const tt = [["9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"],
    ["11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"],
    ["9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00"],
    ["10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"],
    ["9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "16:00", "16:30", "17:00", "17:30", "18:00"],
    ["9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"], 
    ["9:30", "10:00", "10:30", "11:00", "12:00", "12:30", "13:00", "13:30", "14:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"]]

var time_select = "";

class TimeTable extends React.Component {
    constructor() {
        super();
    }

    render() {
        const findTrueIndex = (element) => element == true;
        const ind = this.props.info.days.findIndex(findTrueIndex);
        const timing = this.props.info.timetable[ind];

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

    return (
        <div>
            <div class="text_left"><h2>Address: {location.state.result.address[ind_curr]}</h2></div>
            <div class="text_right"><h2>Distance: {location.state.result.distance[ind_curr]} km</h2></div>
            <h2 class="price">Price: S$ {props.price}/hour</h2>
        </div>
    );
}

function Submission(props) {
    let history = useHistory();
    let location = useLocation();
    let ind_curr = parseInt(location.state.ind_curr);
    
    return (
        <Button onClick={()=>props.handlePush(history, location, ind_curr)}>Submit</Button>
    );
}

export default class InfoDetail extends React.Component {
    constructor() {
        super();
        this.state = {info: 
            {timetable: tt, days: [true,false,false,false,false,false,false]},
            time_sel: " ",
            price: 20,
            date_sel: false
        };
        this.show = this.show.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlePush = this.handlePush.bind(this);
    }

    show(addition) {
        var now = new Date();
        var target = new Date(now.getTime() + addition*24*60*60*1000);
        const date = (target.getDate()) + '/' + (target.getMonth()+1) + '/' + target.getFullYear();

        var days_init = [false,false,false,false,false,false,false];
        const day_of_week = (now.getDay() + addition) % 7;
        days_init[day_of_week] = true;
        
        const new_info = { ...this.state.info, days: days_init}
        this.setState({info: new_info, date_sel: date});
    }

    handleClick(t) {
        this.setState({time_sel: t});
    }

    handleChange(e) {
        this.setState({duration: e.target.value});
    }

    handlePush(history, location, ind_curr) {
        var now = new Date();
        const date_now = (now.getDate()) + '/' + (now.getMonth()+1) + '/' + now.getFullYear();

        history.push({pathname: "/summary", state: {
            address: location.state.result.address[ind_curr],
            price: this.state.price,
            timing: this.state.time_sel,
            duration: this.state.duration,
            date: (!this.state.date_sel) ? date_now : this.state.date_sel
        }});
    }

    render() {
        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        var now = new Date();

        return (
            <div>
            <Detail price={this.state.price}/>
            <h2>Vancant Timing</h2>
            <div id="nav_div">
            <ul id="nav">
                <li><a onClick={()=>this.show(0)}>Today</a></li>
                <li><a onClick={()=>this.show(1)}>{days[(now.getDay()+1)%7]}</a></li>
                <li><a onClick={()=>this.show(2)}>{days[(now.getDay()+2)%7]}</a></li>
                <li><a onClick={()=>this.show(3)}>{days[(now.getDay()+3)%7]}</a></li>
                <li><a onClick={()=>this.show(4)}>{days[(now.getDay()+4)%7]}</a></li>
                <li><a onClick={()=>this.show(5)}>{days[(now.getDay()+5)%7]}</a></li>
                <li><a onClick={()=>this.show(6)}>{days[(now.getDay()+6)%7]}</a></li>
            </ul>
            </div>
            <TimeTable info={this.state.info} handleClick={this.handleClick}/>
            <Form>
                <FormGroup row>
                    <ControlLabel>Your Selected Time: {this.state.time_sel}</ControlLabel>
                </FormGroup>
                <FormGroup row>
                    <ControlLabel>Your Charging Duration: </ControlLabel>
                    <FormControl componentClass="select" onChange={this.handleChange}>
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </FormControl>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{offset: 2,size: 10}}>
                        <Submission handlePush={this.handlePush}/>
                    </Col>
                </FormGroup>
            </Form>
            </div>
        );
    }
}
