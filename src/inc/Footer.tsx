import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
      currentWeatherIcon: '',
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
    console.log('Footer component loaded...');
  }
  render() {
    var weather = this.state.weather;
    var { isLoaded } = this.state;
    if (!isLoaded) {
      return (
        <React.Fragment>
          <div id='loader'>
            <div className='loader' />
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className='footer'>
            <div className='line' />
            <div className='row'>
              <div className='colWrap marBot col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                <FontAwesomeIcon icon={['fab', 'facebook-square']} className='faIcon' />
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} className='faIcon' />
                <FontAwesomeIcon icon={['fab', 'pinterest']} className='faIcon' />
                <FontAwesomeIcon icon={['fab', 'github']} className='faIcon' />
                <FontAwesomeIcon icon={['fab', 'facebook-messenger']} className='faIcon' />
                <FontAwesomeIcon icon={['fas', 'envelope']} className='faIcon' />
                {/* <FontAwesomeIcon
                  icon={['fas', 'star-of-life']}
                  className='faIcon textPeach slow-spin'
                /> */}
              </div>
              <div className='colWrap col-xs-6 col-sm-6 col-md-3 col-lg-3'>
                <h4 className='marBot'>contact details</h4>
                <ul>
                  <li>+64 022 5025 485</li>
                  <li>mike@mparker.co.nz</li>
                  <li>WildPastry@WhatsApp</li>
                </ul>
              </div>
              <div className='colWrap col-xs-6 col-sm-6 col-md-3 col-lg-3'>
                <h4 className='marBot'>archived websites</h4>
                <ul>
                  <li>fearboard.mparker.co.nz</li>
                  <li>sok.mparker.co.nz</li>
                  <li>nat.mparker.co.nz</li>
                  <li>mykdesign.mparker.co.nz</li>
                </ul>
              </div>
            </div>
            <div className='row wrapEnd'>
              <div className='footerWrap'>
                <div className='lineThin' />
                <div className='flex wrapEnd'>
                  <div id='weatherIcon'>
                    <img
                      className='weatherIcon'
                      src={require('./../icon/weather/sleet.svg')}
                      alt='Weather Icon'
                    />
                  </div>
                  <h4 className='footerItem'>{Math.trunc(weather.currently.temperature) + '°'} </h4>
                  <p className='footerItem textPeach'>&copy; mike parker 2019</p>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Footer;
