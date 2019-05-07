import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import configData from './../data/config.json';
import { ReactComponent as IconCloudy } from './../icon/weather/iconCloudy.svg';
import { ReactComponent as IconPartlyCloudy } from './../icon/weather/iconPartlyCloudy.svg';
import { ReactComponent as IconRainbow } from './../icon/weather/iconRainbow.svg';
import { ReactComponent as IconRainy } from './../icon/weather/iconRainy.svg';
import { ReactComponent as IconSnowy } from './../icon/weather/iconSnowy.svg';
import { ReactComponent as IconSunny } from './../icon/weather/iconSunny.svg';
import { ReactComponent as IconWindy } from './../icon/weather/iconWindy.svg';

const cors = (configData as any).CORS;
const skyKey = (configData as any).SKYKEY;
const request = (configData as any).REQUEST;
const units = (configData as any).UNITS;

class Footer extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      weather: [],
      currentWeather: '',
      currentLat: -41.2865,
      currentLng: 174.7762,
      geo: false,
      isLoaded: false
    };
    this.locationReady = this.locationReady.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.showPosition = this.showPosition.bind(this);
  }

  getLocation() {
    this.setState({
      isLoaded: false
    });
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
    var lat = position.coords.latitude.toFixed(4);
    var lng = position.coords.longitude.toFixed(4);
    this.setState({
      currentLat: lat,
      currentLng: lng
    });
    this.locationReady();
  }

  locationReady() {
    this.setState({
      geo: true
    });
    this.getData();
  }

  getData() {
    fetch(
      cors + request + skyKey + '/' + this.state.currentLat + ',' + this.state.currentLng + units
    )
      .then(res => res.json())
      .then(jsonp => {
        this.setState(
          {
            weather: jsonp,
            isLoaded: true
          },
          () => {
            this.setWeatherIcon();
          }
        );
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

  setWeatherIcon() {
    this.setState({
      currentWeather: this.state.weather.currently.icon
    });
  }

  componentWillMount() {
    this.getData();
  }

  componentDidMount() {
    console.log('Footer component loaded...');
  }

  render() {
    // WEATHER ICONS
    let weatherDisplay;
    var currentWeather = this.state.currentWeather;
    var weather = this.state.weather;
    var { isLoaded } = this.state;
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
              <div className='colWrap col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                <a href='https://www.linkedin.com/in/michael-parker-aa084310a/' target='new'>
                  <FontAwesomeIcon icon={['fab', 'linkedin-in']} className={this.props.faIcon} />
                </a>
                <a href='https://www.facebook.com/michael.parker.3532507' target='new'>
                  <FontAwesomeIcon
                    icon={['fab', 'facebook-square']}
                    className={this.props.faIcon}
                  />
                </a>
                <a href='https://www.pinterest.co.uk/WildPastry/' target='new'>
                  <FontAwesomeIcon icon={['fab', 'pinterest']} className={this.props.faIcon} />
                </a>
                <a href='https://github.com/WildPastry' target='new'>
                  <FontAwesomeIcon icon={['fab', 'github']} className={this.props.faIcon} />
                </a>
                <a href='mailto:mykdsn@gmail.com'>
                  <FontAwesomeIcon icon={['fas', 'envelope']} className={this.props.faIcon} />
                </a>
                <a href='https://www.facebook.com/michael.parker.3532507' target='new'>
                  <FontAwesomeIcon
                    icon={['fab', 'facebook-messenger']}
                    className={this.props.faIcon}
                  />
                </a>
              </div>
              {/* ARCHIVES */}
              <div className='colWrap right responsiveText col-xs-6 col-sm-6 col-md-3 col-lg-3'>
                <h4 className={this.props.footerHeading}>archives</h4>
                <ul className={this.props.list}>
                  <li>
                    <a href='index.html'>The Fear Board</a>
                  </li>
                  <li>
                    <a href='index.html'>School of Kennedy</a>
                  </li>
                  <li>
                    <a href='index.html'>Let Nature In</a>
                  </li>
                  <li>
                    <a href='index.html'>MYK Design</a>
                  </li>
                </ul>
              </div>
              {/* CONTACT DETAILS */}
              <div className='colWrap right col-xs-6 col-sm-6 col-md-3 col-lg-3'>
                <h4 className={this.props.footerHeading}>contact details</h4>
                <ul className={this.props.list}>
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
                  {weatherDisplay}
                  <h2 className={this.props.footerTemp}>
                    {Math.trunc(weather.currently.temperature) + '°'}{' '}
                  </h2>
                  <div className='footerIconWrap' onClick={this.getLocation}>
                    <FontAwesomeIcon
                      icon={['fas', 'map-marker-alt']}
                      className={this.props.footerIcon}
                      title='Get your location'
                    />
                  </div>
                  <p className={this.props.footerCopyright}>&copy; mike parker 2019</p>
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
