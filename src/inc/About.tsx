/** @format */

// IMPORTS
import React, {Component} from 'react';
import {initSpace} from '../data/space';
import {MDBAnimation} from 'mdbreact';

class About extends Component<any, any> {
  private space: React.RefObject<HTMLDivElement>;
  // ABOUT STATE
  constructor(props: any) {
    super(props);
    this.space = React.createRef();
  }

  // INITIATE FUNCTION ON LOAD
  componentDidMount() {
    initSpace();
  }

  // RENDER COMPONENT
  render() {
    // RETURN
    return (
      // FRAGMENTS AND ANIMATION
      <React.Fragment>
        <MDBAnimation type='fadeIn'>
          <div className='row'>
            {/* DESCRIPTION */}
            <div className='colWrap col-12'>
              {/* TITLE */}
              <h1 className={this.props.aboutHeading}>about me</h1>
            </div>
            <div className='colWrap col-sm-12 col-md-6 col-lg-4'>
              {/* BODY */}
              <p className={this.props.aboutPara}>
                JavaScript, TypeScript, and REACT front-end developer with a strong background in
                design.
                <br />
                <br />Currently developing software in Wellington for international government agencies. Love the gym, tramping, swimming, DNB, animals and craft beer. Constantly learning new techniques and improving my code.
                <br />
                <br />
              </p>
              {/* CONTACT NUMBER */}
              <h3 className={this.props.aboutPhone} x-ms-format-detection='none'>
                Call/Text <span className='textPeach ml-1'>022 5025 485</span>
              </h3>
              <div className='lineThinAbout' />
              {/* CLIENTS HEADING */}
              <h2 className={this.props.aboutHeading}>clients</h2>
              {/* CLIENTS LIST */}
              <ul className={this.props.aboutList}>
                <li>Wagamana</li>
                <li>Tourism NZ</li>
                <li>Wellington Botanic Garden</li>
                <li>Kuoni Travel</li>
                <li>England and Wales Cricket Board</li>
                <li>Hanover Communications</li>
                <li>Queensland Police</li>
                <li>Bushfires Northern Territory</li>
                <li>Main Roads Western Australia</li>
                <li>Victoria Police</li>
                <li>Water Corporation Western Australia</li>
                <li>Tasmania Police</li>
              </ul>
            </div>
            {/* SPACE */}
            <div className='colWrap col-sm-12 col-md-6 col-lg-8'>
              <div id='space' className={this.props.space} ref={this.space} />
            </div>
          </div>
        </MDBAnimation>
      </React.Fragment>
    );
  }
}

export default About;
