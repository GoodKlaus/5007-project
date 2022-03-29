import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';

import AboutUs from './AboutUs.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Profile from './Profile.jsx';

const NotFound = () => <h1>Page Not Found</h1>;

export default function Contents() {
  return (
    <Switch>
      {/* <Redirect exact from="/" to="/issues" /> */}
      <Route path="/aboutUs" component={AboutUs} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/profile" component={Profile} />
      <Route component={NotFound} />
    </Switch>
  );
}