import React from 'react';
import { NavLink } from 'react-router-dom';

import Content from './Content.jsx';

function NavBar() {
  return (
    <nav>
        <ul>
            <li><img src="logo.png" alt="logo"  width="100" height="50"></img></li>
            <li><h3>Charging Door</h3></li>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/aboutUs">About Us</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
            <li><NavLink to="/profile">Profile</NavLink></li>

        </ul>  
    </nav>
  );
}

export default function Page() {
  return (
    <div>
      <NavBar />
      <Content /> 
    </div>
  );
}