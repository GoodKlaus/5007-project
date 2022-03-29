import React from 'react';
// import URLSearchParams from 'url-search-params';
import { Route } from 'react-router-dom';
export default class AboutUs extends React.Component {
    render() {
        return (
            <React.Fragment>
              <h1>About Us</h1>
              <h3>Welcome to CharingDoor, a convenient platform for shared charging piles of electric vehicles</h3>
              <br/>
              <h2>What We have:</h2>

              <h3>Show the information of charging piles and indicate vacant time.</h3>

              <h3>Quickly set up your own charging pile information and update it at any time.</h3>

              <h3>Search available private charging piles nearby or at specific place and make a booking.</h3>

              <h3>Offers secure transactions with various coupons.</h3>

              <h3> Automatically add schedules, prompting you to pick up the car in time.</h3>

              </React.Fragment>
        );
    }
}