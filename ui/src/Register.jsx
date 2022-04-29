import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';

import graphQLFetch from './graphQLFetch.js'

const initAddress = ["Jurong Gateway", "Pandan Garden", "31 Jurong East Avenue"];
const initDistance = [0.5, 1.2, 1.7];
const initVacancy = [['Today', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'],
                      ['Today', 'Wednesday', 'Thursday', 'Saturday', 'Sunday', 'Monday'],
                      ['Today', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday']];

function Result(props) {
  let history = useHistory();

  function handlePush() {
    history.push({pathname: "/info", state: {address: props.users[props.ind].addressOfPile, price: props.users[props.ind].price, dist: props.dist, ind_curr: props.ind}});
  }

  return  (
    <div className="result" onClick={handlePush}>
          <div className="text_left"><h4>Address: {props.users[props.ind].addressOfPile}</h4></div>
          <div className="text_right"><h4>Distance: {props.dist}km</h4></div>
          <h4 className="vacant_time">Vacant Time: {props.users[props.ind].availableTimeDisplay.map(t => <span>{t}</span>).reduce((prev, curr) => [prev, ', ', curr])}</h4>
    </div>
  );
}

export default class Results extends React.Component {
  constructor() {
    super();
    this.state = { target: [], users: [], result: {
      address: initAddress, distance: initDistance, vacancy: initVacancy}};
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const query = `query {
      resultTarget {
        id address lat lon
      }
      userChargerList {
        id addressOfPile lat lon price availableTimeDisplay
      }
    }`;
    const data = await graphQLFetch(query);
    if (data) {
      this.setState({ target: data.resultTarget, users: data.userChargerList });
    }
  }

  distance(lat1, lat2, lon1, lon2) {
    const R = 6371;
    var latDistance = (lat2 - lat1) * Math.PI / 180.0;
    var lonDistance = (lon2 - lon1) * Math.PI / 180.0;
    var a = Math.sin(latDistance / 2) * Math.sin(latDistance / 2) 
              + Math.cos(lat1*Math.PI/180.0) * Math.cos(lat2*Math.PI/180.0) * Math.sin(lonDistance / 2) * Math.sin(lonDistance / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var distance = R * c;
    let height = 0;
    distance = Math.pow(distance, 2) + Math.pow(height, 2);
    return Math.sqrt(distance);
  }

  render() {
    const user_lst = this.state.users;
    const temp_dist = [];
    for (var i=0; i<user_lst.length; i++) {
      var temp = this.distance(this.state.target.lat, this.state.users[i].lat, this.state.target.lon, this.state.users[i].lon);
      temp_dist.push([temp.toFixed(2), i]);
    }
    temp_dist.sort();

    var results= [];
    for (var j=0; j<temp_dist.length; j++) {
      results.push(<Result users={this.state.users} dist={temp_dist[j][0]} ind={j}/>);
    }
    
    return (
      <React.Fragment>
        <div className='result_content'>
        <h2 style={{color: "#283292"}}>Charging at: {this.state.target.address}</h2>
        {results}
        </div>
      </React.Fragment>
    );
  }
}
