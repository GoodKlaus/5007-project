import React from 'react';
import { Table, Button } from 'react-bootstrap';
// import URLSearchParams from 'url-search-params';
import { Route } from 'react-router-dom';

import graphQLFetch from './graphQLFetch.js'

/*
* Order Page
*/
export default class OrderDisplay extends React.Component {
    constructor(){
        super();
        this.state = {orders: [{address: " ", price: 0, time: " ", cost: 0}], noorder: false};
    }

    componentDidMount() {
        this.loadData();
    }
    
    async loadData() {
        const query = `query userOrderList($userInfo:userOrderCheck!){
            userOrderList(userInfo:$userInfo) {
                address price time cost
          }
        }`;
        const userInfo = {name: this.props.LoginedUser.name, email: this.props.LoginedUser.email, phoneNumber: this.props.LoginedUser.phoneNumber};
        const data = await graphQLFetch(query, {userInfo});
        console.log(data);
        if (data.userOrderList.length > 0) {
          this.setState({ orders: data.userOrderList });
        } else {
            this.setState({noorder: true});
        }
    }

    
    render() {
        const orders = this.state.orders;

        if (this.state.noorder === false) {
            return(
                <React.Fragment>
                    <h2 style={{textAlign: "center"}}>Your Orders</h2>
                    {orders.map(order => 
                    <Table hover className="table_sum">
                        <tbody>
                            <tr>
                                <th scope="row">Address</th>
                                <td>{order.address}</td>
                            </tr>  
                            <tr>
                                <th scope="row">Price</th>
                                <td>S$ {order.price}/hour</td>
                            </tr>
                            <tr>
                                <th scope="row">Time</th>
                                <td>{order.time}</td>
                            </tr>
                            <tr>
                                <th scope="row">Cost</th>
                                <td>S$ {order.cost}</td>
                            </tr>
                        </tbody>
                    </Table>
                    )
                    }
                    
                </React.Fragment>
            );
        } else {
            return(
                <React.Fragment>
                    <h2 style={{textAlign: "center"}}>Please go ahead to make your booking</h2>
                </React.Fragment>
            );
            
        }
        
    }
}
