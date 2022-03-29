import React from 'react';
import ReactDOM from 'react-dom';
import { useHistory, useLocation } from 'react-router-dom';

const initAddress = ["Jurong Gateway", "Pandan Garden", "31 Jurong East Avenue"];
const initDistance = [0.5, 1.2, 1.7];
const initVacancy = [['Today', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'],
                      ['Today', 'Wednesday', 'Thursday', 'Saturday', 'Sunday', 'Monday'],
                      ['Today', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday']];

function Searching() {
  let location = useLocation();

  return (
    <h1>Charging at: {location.state.area}</h1>
  );
}

function Result(props) {
  let history = useHistory();

  function handlePush() {
    history.push({pathname: "/info", state: {result: props.result, ind_curr: props.ind}});
  }

  return  (
    <div class="result" onClick={handlePush}>
          <div class="text_left"><p>Address: {props.result.address[props.ind]}</p></div>
          <div class="text_right"><p>Distance: {props.result.distance[props.ind]}km</p></div>
          <p class="vacant_time">Vacant Time: {props.result.vacancy[props.ind].map(t => <span>{t}</span>).reduce((prev, curr) => [prev, ', ', curr])}</p>
    </div>
  );
}

export default class Results extends React.Component {
  constructor() {
    super();
    this.state = {result: {
      address: initAddress, distance: initDistance, vacancy: initVacancy}
    };
  }

  render() {
    return (
      <React.Fragment>
        <Searching />
        <Result result={this.state.result} ind={0}/>
        <Result result={this.state.result} ind={1}/>
        <Result result={this.state.result} ind={2}/>
      </React.Fragment>
    );
  }
}
