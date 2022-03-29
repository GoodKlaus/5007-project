import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import Home from './Home.jsx';
import Results from './Results.jsx';
import InfoDetail from './Info.jsx';
import Summary from './Summary.jsx';
import AboutUs from './AboutUs.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Profile from './Profile.jsx';

const NotFound = () => <h1>Page Not Found</h1>;

function Content() {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/home" component={Home} />
      <Route path="/results" component={Results} />
      <Route path="/info" component={InfoDetail} />
      <Route path="/summary" component={Summary} />
      <Route path="/aboutUs" component={AboutUs} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/profile" component={Profile} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default withRouter(Content);
