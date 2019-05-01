import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import configData from './../data/config.json';

var lat = -41.2865,
  lng = 174.7762;
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
    // this.locationReady = this.locationReady.bind(this);
    // this.getLocation = this.getLocation.bind(this);
    // this.showPosition = this.showPosition.bind(this);
  }

  // getLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(this.showPosition);
  //   } else {
  //     console.log('geolocation unavailable...');
  //   }
  // }

  // showPosition(position: {
  //   coords: {
  //     latitude: { toFixed: (arg0: number) => string };
  //     longitude: { toFixed: (arg0: number) => string };
  //   };
  // }) {
  //   lat = position.coords.latitude.toFixed(4);
  //   lng = position.coords.longitude.toFixed(4);
  //   this.locationReady();
  // }

  // locationReady() {
  //   this.setState({
  //     geo: true
  //   });
  //   this.getData();
  // }

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
    this.getData();
    // this.getLocation();
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
              <div className='colWrap col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} className='faIcon' />
                <FontAwesomeIcon icon={['fab', 'facebook-square']} className='faIcon' />
                <FontAwesomeIcon icon={['fab', 'pinterest']} className='faIcon' />
                <FontAwesomeIcon icon={['fab', 'github']} className='faIcon' />
                <FontAwesomeIcon icon={['fab', 'facebook-messenger']} className='faIcon' />
                <FontAwesomeIcon icon={['fas', 'envelope']} className='faIcon' />
              </div>

              {/* ARCHIVES */}
              <div className='colWrap right col-xs-6 col-sm-6 col-md-3 col-lg-3'>
                <h4 className='marBot'>archives</h4>
                <ul className='footerListWrap'>
                  <li>
                    <a href='index.html'>fear.mparker.co.nz</a>
                  </li>
                  <li>
                    <a href='index.html'>sok.mparker.co.nz</a>
                  </li>
                  <li>
                    <a href='index.html'>nat.mparker.co.nz</a>
                  </li>
                  <li>
                    <a href='index.html'>mykdesign.mparker.co.nz</a>
                  </li>
                </ul>
              </div>
              {/* CONTACT DETAILS */}
              <div className='colWrap right col-xs-6 col-sm-6 col-md-3 col-lg-3'>
                <h4 className='marBot'>contact details</h4>
                <ul className='footerListWrap'>
                  <li x-ms-format-detection='none'>+64 022 5025 485</li>
                  <li>
                    <a href='mailto:mykdsn@gmail.com'>mike@mparker.co.nz</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* COPYRIGHT AND WEATHER */}
            <div className='row'>
              <div className='footerWrap'>
                <div className='lineThinFooter' />
                <div className='flex'>
                  <svg className='icon icon-windy' viewBox='0 0 220 220'>
                    <g className='small-cloud'>
                      <path
                        fill='#43647E'
                        d='M69.054,67.463c-5.109-9.405-15.105-15.409-25.866-15.409c-14.947,0-27.066,10.456-29.036,24.651
	C6.634,78.396,1,85.121,1,93.143c0,9.293,7.561,16.854,16.853,16.854c3.911,0,7.547-1.27,10.472-3.617
	c4.715,3.022,9.6,4.497,14.864,4.497c4.978,0,8.361-0.792,12.25-2.944c3.312,1.927,7.053,2.944,10.932,2.944
	c12.016,0,21.792-9.776,21.792-21.792C88.162,77.976,79.807,68.789,69.054,67.463z'
                      />
                    </g>
                    <g className='cloud-offset'>
                      <path
                        fill='#43647E'
                        d='M113.903,179.264c-6.173,0-12.273-1.229-17.931-3.585
	c-6.062,2.515-12.218,3.585-19.999,3.585c-8.325,0-16.356-1.866-23.959-5.559c-5.329,2.711-11.262,4.119-17.492,4.119
	c-21.27,0-38.574-17.306-38.574-38.576c0-15.345,9.325-29.175,22.996-35.269c6.653-25.268,29.615-42.96,57.029-42.96
	c19.873,0,38.259,9.958,49.18,26.313c20.532,5.085,35.406,23.653,35.406,45.276C160.56,158.334,139.63,179.264,113.903,179.264z'
                      />
                    </g>
                    <g className='main-cloud'>
                      <path
                        fill='#43647E'
                        d='M118.294,97.231c-8.359-15.388-24.715-25.212-42.32-25.212c-24.457,0-44.283,17.108-47.506,40.333
	c-12.301,2.767-21.52,13.771-21.52,26.896c0,15.205,12.369,27.576,27.574,27.576c6.396,0,12.348-2.078,17.133-5.917
	c7.713,4.944,15.705,7.356,24.318,7.356c8.145,0,13.68-1.295,20.043-4.816c5.418,3.152,11.541,4.816,17.887,4.816
                        c19.662,0,35.656-15.996,35.656-35.656C149.56,114.432,135.888,99.401,118.294,97.231z'
                      />
                    </g>
                    <g className='wind-string'>
                      <path
                        fill='none'
                        stroke='#43637D'
                        strokeMiterlimit='10'
                        d='M85.263,105.176
		c3.002-1.646,6.403-2.549,9.903-2.549c11.375,0,20.633,9.256,20.633,20.633s-9.258,20.633-20.633,20.633H3.473'
                      />
                      <path
                        fill='none'
                        stroke='#43637D'
                        strokeMiterlimit='10'
                        d='M69.756,113.884
		c1.62-0.888,3.457-1.376,5.345-1.376c6.14,0,11.136,4.996,11.136,11.137c0,6.14-4.996,11.136-11.136,11.136H25.313'
                      />
                      <path
                        fill='none'
                        stroke='#43637D'
                        strokeMiterlimit='10'
                        d='M75.536,180.462
		c2.131,1.166,4.545,1.809,7.027,1.809c8.072,0,14.642-6.569,14.642-14.643s-6.569-14.643-14.642-14.643H18.043'
                      />
                    </g>
                  </svg>
                  <h4 className='footerTemp'>{Math.trunc(weather.currently.temperature) + '°'} </h4>
                  <p className='footerCopyright textSpotGrey'>&copy; mike parker 2019</p>
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
