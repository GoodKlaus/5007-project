import React from 'react';
// import URLSearchParams from 'url-search-params';
import { Route } from 'react-router-dom';
export default class AboutUs extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='aboutUs_content'>
                    <h2>About Us</h2>
                    <h3>&emsp;Welcome to CharingDoor, a convenient platform for shared charging piles of electric vehicles</h3>
                    <br/>
                    <h2>What We have:</h2>

                    <h3>&emsp;&diams;Show the information of charging piles and indicate vacant time.</h3>

                    <h3>&emsp;&diams;Quickly set up your own charging pile information and update it at any time.</h3>

                    <h3>&emsp;&diams;Search available private charging piles nearby or at specific place and make a booking.</h3>

                    <h3>&emsp;&diams;Offers secure transactions with various coupons.</h3>

                    <h3>&emsp;&diams;Automatically add schedules, prompting you to pick up the car in time.</h3>
                </div>
              </React.Fragment>
        );
    }
}