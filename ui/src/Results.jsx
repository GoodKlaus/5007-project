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
    <h2 style={{color: "#283292"}}>Charging at: {location.state.area}</h2>
  );
}

function Result(props) {
  let history = useHistory();

  function handlePush() {
    history.push({pathname: "/info", state: {result: props.result, ind_curr: props.ind}});
  }

  return  (
    <div className="result" onClick={handlePush}>
          <div className="text_left"><h4>Address: {props.result.address[props.ind]}</h4></div>
          <div className="text_right"><h4>Distance: {props.result.distance[props.ind]}km</h4></div>
          <h4 className="vacant_time">Vacant Time: {props.result.vacancy[props.ind].map(t => <span>{t}</span>).reduce((prev, curr) => [prev, ', ', curr])}</h4>
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
        <div className='result_content'>
        <Searching />
        <Result result={this.state.result} ind={0}/>
        <Result result={this.state.result} ind={1}/>
        <Result result={this.state.result} ind={2}/>
        </div>
      </React.Fragment>
    );
  }
}
