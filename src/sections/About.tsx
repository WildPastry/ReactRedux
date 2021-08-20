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
					<div className='colWrap'>
						<h1 className={'marBot text' + appTheme}>about me</h1>
					</div>
				</Row>
				<Row>
					<Col sm={12} md={6} lg={4} className='colWrap'>
						<p className={'text' + appTheme}>
							JavaScript, TypeScript, and REACT front-end developer with a strong
							background in design.
							<br />
							<br />
							Currently developing software in Wellington for international government
							agencies. Love the gym, tramping, swimming, DNB, animals and craft beer.
							Constantly learning new techniques and skills.
							<br />
							<br />
						</p>
						<h3 className={'textSpotGrey'} x-ms-format-detection='none'>
							Call/Text <span className='textPeach ml-1'>022 5025 485</span>
						</h3>
						<div className='lineThinAbout' />
						<h2 className={'marBot text' + appTheme}>clients</h2>
						<ul className={'aboutListWrap aboutList' + appTheme}>
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
						<div
							id='space'
							className={'space textBg' + appTheme}
							ref={spaceRef as React.RefObject<HTMLDivElement>}
						/>
					</Col>
				</Row>
			</MDBAnimation>
		</React.Fragment>
	);
};

// EXPORT About
About.displayName = 'About';
export default About;
