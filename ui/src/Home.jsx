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
        this.state = {area: " "};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const area = e.target.value;
        this.setState({area: area});
    }

    render() {
            
        return (
            <React.Fragment>
                <div>
                    <h2 id="text_home">Where to Charge</h2>
                    <Search handleChange={this.handleChange} area={this.state.area}/>
                    <Map google={this.props.google} initialCenter={{lat:1.3521,lng:103.8198}} />
                </div>
            </React.Fragment>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBKEEQ4HcGDKPwClXap5h9Cjqf7S2yfp9o')
})(Home);
