import React, { Component } from 'react';

class About extends Component {
  componentDidMount() {
    console.log('About component loaded...');
  }
  render() {
    return (
      <React.Fragment>
        <div className='row'>
          <div className='colWrap col-xs-12 col-sm-6 col-md-6 col-lg-6'>
            <h2 className='marBot'>about me</h2>
            <p>
              Experienced Web and Graphic Designer from Christchurch, New Zealand. Currently
              upskilling further in Web and UX development at Yoobee School of Design and have
              included a recent selection of work on my site.
              <br />
              <br /> If you have any questions, would like to know more information about me or any
              of my projects, or would like to work together on a future project, give me a shout
              and I'll be happy to respond.
              <br />
              <br />
            </p>
            <h3 x-ms-format-detection='none'>Call / Text (+64) 022 5025 485</h3>
          </div>
          <div className='aboutWrap col-xs-12 col-sm-6 col-md-6 col-lg-6'>
            <h2 className='marBot'>contact</h2>
            <p>form here?</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
