/** @format */

// IMPORTS
import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import configData from './../data/config.json';
// import Tooltip from 'react-simple-tooltip';
// import {css} from 'styled-components';
import {ReactComponent as IconCloudy} from './../icon/weather/iconCloudy.svg';
import {ReactComponent as IconPartlyCloudy} from './../icon/weather/iconPartlyCloudy.svg';
import {ReactComponent as IconRainbow} from './../icon/weather/iconRainbow.svg';
import {ReactComponent as IconRainy} from './../icon/weather/iconRainy.svg';
import {ReactComponent as IconSnowy} from './../icon/weather/iconSnowy.svg';
import {ReactComponent as IconSunny} from './../icon/weather/iconSunny.svg';
import {ReactComponent as IconWindy} from './../icon/weather/iconWindy.svg';

// SECURE DATA
const cors = (configData as any).CORS;
const skyKey = (configData as any).SKYKEY;
const request = (configData as any).REQUEST;
const units = (configData as any).UNITS;

// MATH FUNCTION
Math.trunc =
  Math.trunc ||
  function (x) {
    if (isNaN(x)) {
      return NaN;
    }
    if (x > 0) {
      return Math.floor(x);
    }
    return Math.ceil(x);
  };

// CLASS FOOTER
class Footer extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      weather: [],
      currentWeather: '',
      currentLat: -41.2865,
      currentLng: 174.7762,
      geo: false,
      isLoaded: false,
    };
    this.locationReady = this.locationReady.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.showPosition = this.showPosition.bind(this);
  }

  // GET USER LOCATION
  getLocation() {
    this.setState({
      isLoaded: false,
    });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log('geolocation unavailable...');
    }
  }

  // GET USER LAT & LNG
  showPosition(position: {
    coords: {
      latitude: {toFixed: (arg0: number) => string};
      longitude: {toFixed: (arg0: number) => string};
    };
  }) {
    var lat = position.coords.latitude.toFixed(4);
    var lng = position.coords.longitude.toFixed(4);
    this.setState({
      currentLat: lat,
      currentLng: lng,
    });
    this.locationReady();
  }

  // GEO LOCATION FUNCTION INTO WEATHER DATA FUNCTION
  locationReady() {
    this.setState({
      geo: true,
    });
    // RUN WEATHER DATA FUNCTION
    this.getData();
  }

  // WEATHER DATA FUNCTION
  getData() {
    // FETCH DATA
    fetch(
      cors +
        request +
        skyKey +
        '/' +
        this.state.currentLat +
        ',' +
        this.state.currentLng +
        units
    )
      .then((res) => res.json())
      .then((jsonp) => {
        this.setState(
          {
            weather: jsonp,
            isLoaded: true,
          },
          () => {
            this.setWeatherIcon();
          }
        );
      })
      // ERROR
      .catch((error) => {
        if (error.res) {
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('error ', error.message);
        }
        console.log(error.config);
      });
  }

  // SET WEATHER ICON
  setWeatherIcon() {
    this.setState({
      currentWeather: this.state.weather.currently.icon,
    });
  }

  // GET WEATHER DATA ON LOAD
  componentWillMount() {
    this.getData();
  }

  render() {
    // DYNAMIC WEATHER ICONS BASED ON WEATHER
    let weatherDisplay;
    var currentWeather = this.state.currentWeather;
    // var weather = this.state.weather;
    var {isLoaded} = this.state;
    if (currentWeather === 'cloudy') {
      weatherDisplay = <IconCloudy />;
    } else if (currentWeather === 'partly-cloudy-day') {
      weatherDisplay = <IconPartlyCloudy />;
    } else if (currentWeather === 'fog') {
      weatherDisplay = <IconRainbow />;
    } else if (currentWeather === 'rain') {
      weatherDisplay = <IconRainy />;
    } else if (currentWeather === 'snow') {
      weatherDisplay = <IconSnowy />;
    } else if (currentWeather === 'clear-day') {
      weatherDisplay = <IconSunny />;
    } else if (currentWeather === 'wind') {
      weatherDisplay = <IconWindy />;
    } else if (currentWeather === 'sleet') {
      weatherDisplay = <IconSnowy />;
    } else if (currentWeather === 'clear-night') {
      weatherDisplay = <IconSunny />;
    } else if (currentWeather === 'partly-cloudy-night') {
      weatherDisplay = <IconPartlyCloudy />;
    }
    if (!isLoaded) {
      // RENDER LOADING ICON
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
          {/* FOOTER */}
          <div className='footer'>
            <div className='line' />
            <div className='row'>
              {/* FA ICONS */}
              <div className='colWrap responsiveWrap miniWrap col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                {/* LINKEDIN */}
                <a
                  href='https://www.linkedin.com/in/mike-parker-aa084310a'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <FontAwesomeIcon
                    icon={['fab', 'linkedin-in']}
                    className={this.props.faIcon}
                  />
                </a>
                {/* FACEBOOK */}
                <a
                  href='https://www.facebook.com/michael.parker.3532507'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <FontAwesomeIcon
                    icon={['fab', 'facebook-square']}
                    className={this.props.faIcon}
                  />
                </a>
                {/* PINTEREST */}
                <a
                  href='https://www.pinterest.co.uk/WildPastry/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <FontAwesomeIcon
                    icon={['fab', 'pinterest']}
                    className={this.props.faIcon}
                  />
                </a>
                {/* GITHUB */}
                <a
                  href='https://github.com/WildPastry'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <FontAwesomeIcon
                    icon={['fab', 'github']}
                    className={this.props.faIcon}
                  />
                </a>
                {/* EMAIL */}
                <a href='mailto:mike@mikeparker.co.nz'>
                  <FontAwesomeIcon
                    icon={['fas', 'envelope']}
                    className={this.props.faIcon}
                  />
                </a>
                {/* MESSENGER */}
                <a
                  href='https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F598356603%2F'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <FontAwesomeIcon
                    icon={['fab', 'facebook-messenger']}
                    className={this.props.faIcon}
                  />
                </a>
                {/* INSTAGRAM */}
                <a
                  href='https://www.instagram.com/mikeparkernz/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <FontAwesomeIcon
                    icon={['fab', 'instagram']}
                    className={this.props.faIcon}
                  />
                </a>
              </div>
              {/* ARCHIVES */}
              <div className='colWrap right responsiveText col-xs-6 col-sm-6 col-md-3 col-lg-3'>
                {/* ARCHIVES HEADING */}
                <h4 className={this.props.footerHeading}>ARCHIVES</h4>
                {/* ARCHIVES LIST */}
                <ul className={this.props.list}>
                  {/* WEBSITES */}
                  <li>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href='https://fear.mikeparker.co.nz/'>
                      The Fear Board
                    </a>
                  </li>
                  <li>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href='https://sok.mikeparker.co.nz/'>
                      School of Kennedy
                    </a>
                  </li>
                  <li>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href='https://nat.mikeparker.co.nz/'>
                      Let Nature In
                    </a>
                  </li>
                </ul>
              </div>
              {/* CONTACT DETAILS */}
              <div className='colWrap right col-xs-6 col-sm-6 col-md-3 col-lg-3'>
                {/* CONTACT HEADING */}
                <h4 className={this.props.footerHeading}>CONTACT</h4>
                {/* CONTACT LIST */}
                <ul className={this.props.list}>
                  {/* PHONE NUMBER */}
                  <li x-ms-format-detection='none'>022 5025 485</li>
                  {/* EMAIL ADDRESS */}
                  <li>
                    <a href='mailto:mike@mikeparker.co.nz'>mike@mikeparker.co.nz</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* COPYRIGHT AND WEATHER */}
            <div className='row'>
              <div className='footerWrap'>
                <div className='lineThinFooter' />
                <div className='flex wrap responsiveFooterWrap'>
                  {/* WEATHER ICON/TEMP/GEO WRAP
                  <div className='weatherWrap flex'>
                    WEATHER ICON
                    {weatherDisplay}
                    TEMP
                    <h2 className={this.props.footerTemp}>
                      {Math.trunc(weather.currently.temperature) + '°'}{' '}
                    </h2>
                    TOOLTIP AND MARKER ICON WRAP
                    <div className='tooltipWrap'>
                      TOOLTIP
                      <Tooltip
                        content='Get&nbsp;your&nbsp;location'
                        background='#ff6666'
                        fadeDuration={300}
                        border='#000'
                        radius={3}
                        offset={5}
                        padding={7}
                        color='#fff'
                        customCss={css`font-weight: 400;`}>
                        <div className='footerIconWrap' onClick={this.getLocation}>
                          MAP MARKER ICON
                          <FontAwesomeIcon
                            icon={['fas', 'map-marker-alt']}
                            className={this.props.footerIcon}/>
                        </div>
                      </Tooltip>
                    </div>
                  </div> */}
                  {/* COPYRIGHT */}
                  <p className={this.props.footerCopyright}>
                    &copy; mike parker <span className='text300'>2019</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

// EXPORT
export default Footer;
