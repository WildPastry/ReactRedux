import React, { Component } from 'react';
import { initSpace } from '../data/space';

class About extends Component<any, any> {
  private space: React.RefObject<HTMLDivElement>;
  constructor(props: any) {
    super(props);
    this.space = React.createRef();
  }
  componentDidMount() {
    initSpace();
    console.log('About component loaded...');
  }
  render() {
    return (
      <React.Fragment>
        <div className='row'>
          <div className='colWrap col-xs-12 col-sm-6 col-md-4 col-lg-4'>
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
            <h3 className='textSpotGrey' x-ms-format-detection='none'>Call / Text (+64) 022 5025 485</h3>
          </div>
          <div className='colWrap col-xs-12 col-sm-6 col-md-8 col-lg-8'>
            <div id='space' ref={this.space} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
