import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import Content from './Content.jsx';

function NavBar() {
  return (
    <nav>
        <ul>
            <li><img src="logo.png" alt="logo"  width="100" height="50"></img></li>
            <li><h3>Charging Door</h3></li>
            <li><NavLink exact to="/home">Home</NavLink></li>
            <li><NavLink to="/aboutUs">About Us</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
            <li><NavLink to="/profile">Profile</NavLink></li>

        </ul>  
    </nav>
  );
}

function Page() {
  return (
    <React.Fragment>
    <div>
      <NavBar />
      <Content />
    </div>
    <footer>
		    <small><i>Copyright &copy; <strong>ChargingDoor</strong><br></br><a href="mailto:Charging@Door.com">Charging@Door</a>
		    </i></small>
	  </footer>
    </React.Fragment>
  );
}

export default withRouter(Page);
