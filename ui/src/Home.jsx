import React from 'react';
import { useHistory } from 'react-router-dom'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

function Search(props) {
    let history = useHistory();

    function handlePush() {
        history.push({pathname: "/results", state: {area: props.area}});
    }

    return (
        <div id="form_home">
        <form>
            <input type="text" onChange={props.handleChange}/>
            <button type="submit" onClick={handlePush}>Search</button>
        </form>
        </div>
    );
}

export class Home extends React.Component {
    constructor() {
        super();
        this.state = {area: " ", lat: 0, lon: 0};
        this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount() {
        await navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude, lon: position.coords.longitude}),
            err => console.log(err)
        );
    }

    handleChange(e) {
        const area = e.target.value;
        this.setState({area: area});
    }

    render() {
        const style = { width: '100%', height: '600px' };

        return (
            <React.Fragment>
                <div className='home_back'>
                    <h2 id="text_home">Where to Charge</h2>
                    <Search handleChange={this.handleChange} area={this.state.area}/>
                    <Map google={this.props.google} center={{lat: this.state.lat, lng: this.state.lon}} style={style}><Marker key={"Current Location"} position={{lat: this.state.lat, lng: this.state.lon}} /></Map>
                </div>
            </React.Fragment>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBKEEQ4HcGDKPwClXap5h9Cjqf7S2yfp9o')
})(Home);
