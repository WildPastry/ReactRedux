// IMPORTS
import React, { Component } from 'react';
import { initSpace } from '../data/space';
import { MDBAnimation } from 'mdbreact';

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
						<div className='colWrap col-xs-12 col-sm-12 col-md-12 col-lg-12'>
							{/* TITLE */}
							<h1 className={this.props.aboutHeading}>about me</h1>
						</div>
						<div className='colWrap col-xs-12 col-sm-12 col-md-6 col-lg-4'>
							{/* BODY */}
							<p className={this.props.aboutPara}>
								JavaScript, PHP, and REACT Web Developer with a strong background in design.
								<br />
								<br /> If you have any questions, would like to know more information about me or
								any of my projects, or would like to work together on a future project, give me a
								shout and I'll be happy to respond.
								<br />
								<br />
							</p>
							{/* CONTACT NUMBER */}
							<h3 className={this.props.aboutPhone} x-ms-format-detection='none'>
								Call / Text <span className='textPeach'>022 5025 485</span>
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
								<li>Tight 5 Hospitality</li>
							</ul>
						</div>
						{/* SPACE */}
						<div className='colWrap col-xs-12 col-sm-12 col-md-6 col-lg-8'>
							<div id='space' className={this.props.space} ref={this.space} />
						</div>
					</div>
				</MDBAnimation>
			</React.Fragment>
		);
	}
}

export default About;
