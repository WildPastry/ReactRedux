import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Project extends Component<any, any> {
  componentDidMount() {
    console.log('Project component loaded...');
  }

  render() {
    return (
      <React.Fragment>
        {/* DESCRIPTION */}
        <div className='row wrap'>
          <div className='colWrap col-xs-12 col-sm-12 col-md-7 col-lg-7'>
            <h1 className='textPeach marBot'>Wagamama</h1>
            <h2>
              Wagamama wants to improve customer engagement and sales of some of their more unique
              offerings by providing table ordering via digital devices.
            </h2>
            <br />
            <p>
              Customers will be able to use touch screens at their table or booth, tablet type
              devices mounted at the bar or their own phones anywhere within the venue. They require
              a system that enable customers to easily order and see the progress of their order and
              makes suggestions and/or offers.
            </p>
          </div>
          {/* PROJECT DETAILS */}
          <div className='colWrap col-xs-12 col-sm-12 col-md-4 col-lg-4'>
            <h2 className='marBot'>project details</h2>
            <ul>
              <li className='projectListItem'>
                FIELDS&nbsp;&nbsp;
                <span className='textWhite text700'>
                  UX<span className='textLightGrey text700'> / </span>WEB
                  <span className='textLightGrey text700'> / </span>DATA
                </span>
              </li>
              <li className='projectListItem'>
                CLIENT&nbsp;&nbsp;<span className='textWhite text700'>Wagamama</span>
              </li>
              <li className='projectListItem'>
                TIMELINE&nbsp;&nbsp;<span className='textWhite text700'>Apr - Nov 2018</span>
              </li>
              <li className='projectListItem'>
                LIVE SITE&nbsp;&nbsp;<span className='textWhite text700'>site.mparker.co.nz</span>
              </li>
            </ul>
            <div className='prevNextIconWrap'>
              <FontAwesomeIcon icon={['fas', 'chevron-left']} className='prevIcon' />
              <FontAwesomeIcon icon={['fas', 'chevron-right']} className='nextIcon' />
            </div>
          </div>
          {/* TOOLS */}
          <div className='colWrap center col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <div className='lineThin mar' />
            <FontAwesomeIcon icon={['fab', 'adobe']} className='projectIcon' />
            <FontAwesomeIcon icon={['fab', 'less']} className='projectIcon' />
            <FontAwesomeIcon icon={['fab', 'sass']} className='projectIcon' />
            <FontAwesomeIcon icon={['fab', 'grunt']} className='projectIcon' />
            <FontAwesomeIcon icon={['fab', 'git']} className='projectIcon' />
            <div className='lineThin mar' />
          </div>
        </div>
        {/* IMAGES */}
        <div className='row'>
          <div className='projectWrap col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <img src={require('./../img/project/wag/01.jpg')} alt='Gallery' />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Project;
