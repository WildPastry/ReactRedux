// IMPORTS
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { initSpace } from '../data/space';
import { MDBAnimation } from 'mdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// About
const About: React.FC = () => {
	return (
<React.Fragment>
				<MDBAnimation type='fadeIn'>
					<Row className='wrap'>
						<div className='colWrap'>
							<h1 className={'marBot textWhite'}>about me</h1>
						</div>
						<div className='galleryWrap pad flex'>
							<h4 className={'textWhite text400'}>THEME</h4>
							{/* <div onClick={this.props.changeTheme}> */}
							<div>
								<FontAwesomeIcon
									icon={['fas', 'fill-drip']}
									className={'galleryFillIconDark'}
								/>
							</div>
						</div>
					</Row>
					<Row>
						<Col sm={12} md={6} lg={4} className='colWrap'>
							<p className={'textWhite'}>
								JavaScript, TypeScript, and REACT front-end developer with a strong
								background in design.
								<br />
								<br />
								Currently developing software in Wellington for international government
								agencies. Love the gym, tramping, swimming, DNB, animals and craft beer.
								Constantly learning new techniques and improving my code.
								<br />
								<br />
							</p>
							<h3 className={'textSpotGrey'} x-ms-format-detection='none'>
								Call/Text <span className='textPeach ml-1'>022 5025 485</span>
							</h3>
							<div className='lineThinAbout' />
							<h2 className={'marBot textWhite'}>clients</h2>
							<ul className={'aboutListDark aboutListWrap'}>
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
						</Col>
						<Col sm={12} md={6} lg={8} className='colWrap'>
						<div id='space' className={'space textWhiteBg'} />
							{/* <div id='space' className={'space textWhiteBg'} ref={this.space} /> */}
						</Col>
					</Row>
				</MDBAnimation>
			</React.Fragment>
	);
};

// EXPORT About
About.displayName = 'About';
export default About;

// class About extends Component<any, any> {
// 	private space: React.RefObject<HTMLDivElement>;
// 	constructor(props: any) {
// 		super(props);
// 		this.space = React.createRef();
// 	}

// 	componentDidMount() {
// 		console.log('componentDidMount');
// 		initSpace();
// 	}

// 	componentDidUpdate() {
// 		console.log('componentDidUpdate');
// 		initSpace();
// 	}

// 	render() {
// 		return (
// 			<React.Fragment>
// 				<MDBAnimation type='fadeIn'>
// 					<Row className='wrap'>
// 						<div className='colWrap'>
// 							<h1 className={this.props.aboutHeading}>about me</h1>
// 						</div>
// 						<div className='galleryWrap pad flex'>
// 							<h4 className={this.props.singleProjectDesc}>THEME</h4>
// 							<div onClick={this.props.changeTheme}>
// 								<FontAwesomeIcon
// 									icon={['fas', 'fill-drip']}
// 									className={this.props.galleryFillIcon}
// 								/>
// 							</div>
// 						</div>
// 					</Row>
// 					<Row>
// 						<Col sm={12} md={6} lg={4} className='colWrap'>
// 							<p className={this.props.aboutPara}>
// 								JavaScript, TypeScript, and REACT front-end developer with a strong
// 								background in design.
// 								<br />
// 								<br />
// 								Currently developing software in Wellington for international government
// 								agencies. Love the gym, tramping, swimming, DNB, animals and craft beer.
// 								Constantly learning new techniques and improving my code.
// 								<br />
// 								<br />
// 							</p>
// 							<h3 className={this.props.aboutPhone} x-ms-format-detection='none'>
// 								Call/Text <span className='textPeach ml-1'>022 5025 485</span>
// 							</h3>
// 							<div className='lineThinAbout' />
// 							<h2 className={this.props.aboutHeading}>clients</h2>
// 							<ul className={this.props.aboutList}>
// 								<li>Wagamana</li>
// 								<li>Tourism NZ</li>
// 								<li>Wellington Botanic Garden</li>
// 								<li>Kuoni Travel</li>
// 								<li>England and Wales Cricket Board</li>
// 								<li>Hanover Communications</li>
// 								<li>Queensland Police</li>
// 								<li>Bushfires Northern Territory</li>
// 								<li>Main Roads Western Australia</li>
// 								<li>Victoria Police</li>
// 								<li>Water Corporation Western Australia</li>
// 								<li>Tasmania Police</li>
// 							</ul>
// 						</Col>
// 						<Col sm={12} md={6} lg={8} className='colWrap'>
// 							<div id='space' className={this.props.space} ref={this.space} />
// 						</Col>
// 					</Row>
// 				</MDBAnimation>
// 			</React.Fragment>
// 		);
// 	}
// }

// export default About;
