import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Project extends Component<any, any> {
  componentDidMount() {
    console.log('Project component loaded...');
  }

  render() {
    return (
      <React.Fragment>
        {/* INFORMATION */}
        <div className='row'>
          <div className='colWrap col-xs-12 col-sm-6 col-md-6 col-lg-6'>
            <h2 className='marBot'>Wagamama</h2>
            <p>
              Wagamama wants to improve customer engagement and sales of some of their more unique
              offerings by providing table ordering via digital devices. Customers will be able to
              use touch screens at their table or booth, tablet type devices mounted at the bar or
              their own phones anywhere within the venue.
              <br />
              <br />
              They require a system that enable customers to easily order and see the progress of
              their order and makes suggestions and/or offers.
            </p>
          </div>
          <div className='colWrap col-xs-12 col-sm-6 col-md-6 col-lg-6'>
            <h2 className='marBot'>project details</h2>
            <ul>
              <li>FIELDS <span className='textWhite'>UX | WEB</span></li>
              <li>CLIENT <span className='textWhite'>Wagamama | Student Project</span></li>
              <li>TIMELINE <span className='textWhite'>Apr 2017 - Nov 2019</span></li>
              <li>LIVE SITE <span className='textWhite'>sitename.mparker.co.nz</span></li>
            </ul>
          </div>
          <div className='colWrap center col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <div className='lineThin' />
            {/* <h2 className='marBot'>tools</h2> */}
            <FontAwesomeIcon icon={['fab', 'adobe']} className='toolIcon' />
            <FontAwesomeIcon icon={['fab', 'less']} className='toolIcon' />
            <FontAwesomeIcon icon={['fab', 'sass']} className='toolIcon' />
            <FontAwesomeIcon icon={['fab', 'grunt']} className='toolIcon' />
            <FontAwesomeIcon icon={['fab', 'git']} className='toolIcon' />
            <div className='lineThin' />
          </div>
        </div>
        {/* IMAGES */}
        <div className='row'>
        <div className='imgWrap col-xs-12 col-sm-12 col-md-12 col-lg-12'>
        <img src={require('./../img/project/wag/01.jpg')} alt='Gallery' />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Project;
