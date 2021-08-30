// imports
import React from 'react';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
import { Col, Row } from 'react-bootstrap';
import { initSpace } from '../utilities/space';
import { MDBAnimation } from 'mdbreact';

// About
const About: React.FC = () => {
	// useSelector for app theme
	const appTheme = useSelector((state: RootState) => {
		return state.setTheme.appTheme;
	});

	// handle reference to external JS fucntion
	function useHandleSpace<T extends HTMLElement>() {
		const currentRef = useRef<T>(null);
		return { ref: currentRef };
	}

	const { ref: spaceRef } = useHandleSpace<HTMLDivElement>();

	// load external JS function
	useEffect(() => initSpace(appTheme), [appTheme]);

	return (
		<React.Fragment>
			<MDBAnimation type='fadeIn'>
				<Row className='wrap'>
					<Col sm={12}><h1 className={'colWrap marBot text' + appTheme}>About</h1></Col>
					<br />
					<Col sm={12} md={6} lg={4} className='colWrap'>						
						<p className={'text' + appTheme}>
							TypeScript, React and PHP front-end developer with a strong background in
							design.
							<br />
							<br />
							Currently developing software in Wellington for international government
							agencies. Love the gym, tramping, swimming, DNB, animals and craft beer.
							Constantly learning new techniques and skills.
							<br />
							<br />
						</p>
						<h3 className={'marBot textSpotGrey'} x-ms-format-detection='none'>
							Call/Text <span className='textPeach ml-1'>022 5025 485</span>
						</h3>
						<ul className={'aboutListWrap aboutList' + appTheme}>
							<p className={'marTop marBot text700 text' + appTheme}>CLIENTS</p>
							<li>Department of Fire and Emergency Services</li>
							<li>England and Wales Cricket Board</li>
							<li>Hanover Communications</li>
							{/* <li>Jules Verne</li> */}
							<li>Kuoni Travel</li>
							<li>Main Roads Western Australia</li>
							<li>Northern Territory Bushfires</li>						
							<li>Queensland Police</li>							
							{/* <li>Tasmania Police</li> */}
							{/* <li>Tight 5 Hospitality</li> */}
							{/* <li>Tourism NZ</li> */}
							<li>Victoria Police</li>
							{/* <li>Wagamana</li> */}
							{/* <li>Water Corporation Western Australia</li>
							<li>Waterford Press</li>
							<li>Wellington Botanic Garden</li> */}
						</ul>
					</Col>
					<Col sm={12} md={6} lg={8} className='colWrap'>
						<div
							id='space'
							className={'space bg' + appTheme}
							ref={spaceRef as React.RefObject<HTMLDivElement>}
						/>
					</Col>
					{/* <Col>
					<ul className={'aboutListWrap aboutList' + appTheme}>
							<p className={'marBot text700 text' + appTheme}>CLIENTS & PROJECTS</p>
							<li>Department of Fire and Emergency Services</li>
							<li>England and Wales Cricket Board</li>
							<li>Hanover Communications</li>
							<li>Jules Verne</li>
							<li>Kuoni Travel</li>
							<li>Main Roads Western Australia</li>
							<li>Northern Territory Bushfires</li>						
							<li>Queensland Police</li>							
							<li>Tasmania Police</li>
							<li>Tight 5 Hospitality</li>
							<li>Tourism NZ</li>
							<li>Victoria Police</li>
							<li>Wagamana</li>
							<li>Water Corporation Western Australia</li>
							<li>Waterford Press</li>
							<li>Wellington Botanic Garden</li>
						</ul>
					</Col> */}
				</Row>
				{/* <Row className='wrap'>
					<p className={'marBot text700 text' + appTheme}>CLIENTS & PROJECTS</p>
				</Row> */}
			</MDBAnimation>
		</React.Fragment>
	);
};

// EXPORT About
About.displayName = 'About';
export default About;
