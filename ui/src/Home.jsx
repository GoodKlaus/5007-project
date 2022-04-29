import React, {Component} from 'react';
import { useHistory } from 'react-router-dom'
import { Map, GoogleApiWrapper } from 'google-maps-react'
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from 'react-google-autocomplete';

import graphQLFetch from './graphQLFetch.js'

Geocode.setApiKey('AIzaSyBKEEQ4HcGDKPwClXap5h9Cjqf7S2yfp9o');
Geocode.enableDebug();

function ResultMap() {
    let history = useHistory();

    function handlePush() {
        history.push({pathname: "/results"});
    }

    return (
        <button type="submit" onClick={handlePush} className="searchButton">Search</button>
    );
}
class SearchMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {address: '', city: '', area: '', state: '',
                        mapPosition: {lat: this.props.center.lat, lng: this.props.center.lng},
                        markerPosition: {lat: this.props.center.lat, lng: this.props.center.lng}
                    };
    }

    componentDidMount() {
        Geocode.fromLatLng( this.state.mapPosition.lat , this.state.mapPosition.lng ).then(
            response => {
                console.log(response);
                const address = response.results[0].formatted_address,
                    addressArray =  response.results[0].address_components,
                    city = this.getCity( addressArray ),
                    area = this.getArea( addressArray ),
                    state = this.getState( addressArray );

                this.setState( {address: ( address ) ? address : '', 
                                area: ( area ) ? area : '', 
                                city: ( city ) ? city : '',
                                state: ( state ) ? state : '',
                                } )
            }, error => {console.log(error);}
        );
    }

    shouldComponentUpdate( nextProps, nextState ){
        if (this.state.markerPosition.lat !== this.props.center.lat ||
            this.state.address !== nextState.address ||
            this.state.city !== nextState.city ||
            this.state.area !== nextState.area ||
            this.state.state !== nextState.state
        ) {
         return true
        } else if ( this.props.center.lat === nextProps.center.lat ){
         return false
        }
    }

    getCity = ( addressArray ) => {
        let city = '';
        for( let i = 0; i < addressArray.length; i++ ) {
            if( addressArray[i].types[0] && 'administrative_area_level_2' === addressArray[i].types[0] ) {
                city = addressArray[i].long_name;
                return city;
            }
        }
    };

    getArea = ( addressArray ) => {
        let area = '';
        for( let i = 0; i < addressArray.length; i++ ) {
            if( addressArray[i].types[0] ) {
                for ( let j = 0; j < addressArray[i].types.length; j++ ) {
                    if( 'sublocality_level_1' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j] ) {
                        area = addressArray[i].long_name;
                        return area;
                    }
                }
            }
        }
    };
      
    getState = ( addressArray ) => {
        let state = '';
        for( let i = 0; i < addressArray.length; i++ ) {
            for( let i = 0; i < addressArray.length; i++ ) {
                if ( addressArray[i].types[0] && 'administrative_area_level_1' === addressArray[i].types[0] ) {
                    state = addressArray[i].long_name;
                    return state;
                }
            }
        }
    };

    onChange = ( event ) => {
		this.setState({ [event.target.name]: event.target.value });
	};

    onInfoWindowClose = ( event ) => {};

    onMarkerDragEnd = ( event ) => {
		let newLat = event.latLng.lat(),
		    newLng = event.latLng.lng();

		Geocode.fromLatLng( newLat , newLng ).then(
			response => {
				const address = response.results[0].formatted_address,
				      addressArray =  response.results[0].address_components,
				      city = this.getCity( addressArray ),
				      area = this.getArea( addressArray ),
				      state = this.getState( addressArray );
				this.setState( {
					address: ( address ) ? address : '',
					area: ( area ) ? area : '',
					city: ( city ) ? city : '',
					state: ( state ) ? state : '',
					markerPosition: {
						lat: newLat,
						lng: newLng
					},
					mapPosition: {
						lat: newLat,
						lng: newLng
					},
				} )
			},
			error => {
				console.error(error);
			}
		);
	};

    async uploadTarget(target) {
        const query = `mutation targetAdd($target: TargetInputs!) {
            targetAdd(target: $target) {
                id
            }
        }`
        const data = await graphQLFetch(query, { target });
        if (data) {
            console.log("Successful");
        }
    }

    onPlaceSelected = ( place ) => {
		console.log( 'plc', place );
		const addr = place.formatted_address,
		      addressArray =  place.address_components,
		      city = this.getCity( addressArray ),
		      area = this.getArea( addressArray ),
		      state = this.getState( addressArray ),
		      latValue = place.geometry.location.lat(),
		      lngValue = place.geometry.location.lng();
        
        const target = {address: addr, lat: latValue, lon: lngValue}
        this.uploadTarget(target);
        
		// Set these values in the state.
		this.setState({
			address: ( addr ) ? addr : '',
			area: ( area ) ? area : '',
			city: ( city ) ? city : '',
			state: ( state ) ? state : '',
			markerPosition: {
				lat: latValue,
				lng: lngValue
			},
			mapPosition: {
				lat: latValue,
				lng: lngValue
			},
		});
	};

    render() {
        const AsyncMap = withScriptjs(
			withGoogleMap(
				props => (
					<GoogleMap google={ this.props.google }
					           defaultZoom={ this.props.zoom }
					           defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
					>
                        {/* For Auto complete Search Box */}
                        <h2 id="text_home">Where to Charge</h2>
                        <div id="form_home">
                            <Autocomplete
							    style={{
								    width: '50%',
								    height: '40px',
								    paddingLeft: '16px',
                                    margin: 'auto'
							    }}
							    onPlaceSelected={ this.onPlaceSelected }
                                placeholder={this.state.address}
                                options={{
                                    types: ["geocode", "establishment"],
                                }}
						    />
                            <ResultMap />
                        </div>
						
						{/* InfoWindow on top of marker */}
						<InfoWindow
							onClose={this.onInfoWindowClose}
							position={{ lat: ( this.state.markerPosition.lat + 0.0018 ), lng: this.state.markerPosition.lng }}
						>
							<div>
								<span style={{ padding: 0, margin: 0 }}>{ this.state.address }</span>
							</div>
						</InfoWindow>
						{/*Marker*/}
						<Marker google={this.props.google}
						        name={'Dolores park'}
						        draggable={true}
						        onDragEnd={ this.onMarkerDragEnd }
						        position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
						/>
						<Marker />
					</GoogleMap>
				)
			)
		);
		let map;
		if( this.props.center.lat !== undefined ) {
			map = <div>
				<AsyncMap
					googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBKEEQ4HcGDKPwClXap5h9Cjqf7S2yfp9o&language=en&libraries=places`}
					loadingElement={
						<div style={{ height: `100%` }} />
					}
					containerElement={
						<div style={{ height: this.props.height }} />
					}
					mapElement={
						<div style={{ height: `100%` }} />
					}
				/>
			</div>
		} else {
			map = <div style={{height: this.props.height}} />
		}
		return( map )
	}
}

export default class Home extends Component {
    render() {
      return(
          <React.Fragment>
                <SearchMap google={this.props.google} center={{lat: 1.2966, lng: 103.7764}} height='500px' zoom={12}/>
          </React.Fragment>
          
        )
    }
  }
