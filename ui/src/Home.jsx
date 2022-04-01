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
        const style = { width: '100%', height: '600px' };

        return (
            <React.Fragment>
                <div className='home_back'>
                    <h2 id="text_home">Where to Charge</h2>
                    <Search handleChange={this.handleChange} area={this.state.area}/>
                    <Map google={this.props.google} initialCenter={{lat:1.3521,lng:103.8198}} style={style}/>
                </div>
            </React.Fragment>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('')
})(Home);
