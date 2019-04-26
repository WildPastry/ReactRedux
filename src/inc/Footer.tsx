import React, { Component } from 'react';
import configData from './../data/config.json';

var lat: string, lng: string;
const cors = (configData as any).CORS;
const skyKey = (configData as any).SKYKEY;
const request = (configData as any).REQUEST;
const units = (configData as any).UNITS;

class Footer extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      weather: [],
      geo: false,
      isLoaded: false
    };
    this.locationReady = this.locationReady.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.showPosition = this.showPosition.bind(this);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log('geolocation unavailable...');
    }
  }

  showPosition(position: {
    coords: {
      latitude: { toFixed: (arg0: number) => string };
      longitude: { toFixed: (arg0: number) => string };
    };
  }) {
    lat = position.coords.latitude.toFixed(4);
    lng = position.coords.longitude.toFixed(4);
    this.locationReady();
  }

  locationReady() {
    this.setState({
      geo: true
    });
    this.getData();
  }

  getData() {
    // console.log('lat: ' + lat);
    // console.log('lng: ' + lng);
    fetch(cors + request + skyKey + '/' + lat + ',' + lng + units)
      .then(res => res.json())
      .then(json => {
        this.setState({
          weather: json,
          isLoaded: true
        });
      })
      .catch(error => {
        if (error.res) {
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('error ', error.message);
        }
        console.log(error.config);
      });
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    var weather = this.state.weather;
    var { isLoaded } = this.state;
    if (!isLoaded) {
      return (
        <div>
          <h4 className='textPeach'>loading...</h4>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <h4>footer</h4>
          <p>{weather.currently.icon}</p>
          <p>{Math.trunc(weather.currently.temperature) + '°'}</p>
        </React.Fragment>
      );
    }
  }
}

export default Footer;
