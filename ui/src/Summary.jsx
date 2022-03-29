import React from 'react';
import { Table, Button } from 'react-bootstrap';
import {useLocation, useHistory} from 'react-router-dom'

function BookingSum() {
    let location = useLocation();
    var time_start = location.state.timing;
    const duration = location.state.duration;
    var time_end = parseInt(time_start.split(':')[0]) + parseInt(duration) + ':'+ time_start.split(':')[1];
    var cost = parseInt(location.state.price) * parseInt(duration);


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
                    <td>{cost}</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default class Summary extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <React.Fragment>
                <h2>Your Booking Summary</h2>
                <BookingSum />
                <Button className="pay">Proceed to Pay</Button>
            </React.Fragment>
        );
    }
}
