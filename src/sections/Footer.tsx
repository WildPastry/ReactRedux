// imports
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
import {
	faGithub,
	faLinkedinIn,
	faFacebook,
	faFacebookMessenger,
	faPinterest,
	faInstagram
} from '@fortawesome/free-brands-svg-icons';

// Footer
const Footer: React.FC = () => {
	// useSelector for app theme
	const appTheme = useSelector((state: RootState) => {
		return state.setTheme.appTheme;
	});

	return (
		<React.Fragment>
			<div className='footer'>
				<div className='line' />
				<Row>
					<Col sm={12} md={6} className='colWrap responsiveWrap miniWrap'>
						<a
							href='https://www.linkedin.com/in/mike-parker-aa084310a'
							target='_blank'
							rel='noopener noreferrer'>
							<FontAwesomeIcon icon={faLinkedinIn} className={'faIcon' + appTheme} />
						</a>
						<a
							href='https://github.com/WildPastry'
							target='_blank'
							rel='noopener noreferrer'>
							<FontAwesomeIcon icon={faGithub} className={'faIcon' + appTheme} />
						</a>
						<a
							href='https://www.facebook.com/michael.parker.3532507'
							target='_blank'
							rel='noopener noreferrer'>
							<FontAwesomeIcon icon={faFacebook} className={'faIcon' + appTheme} />
						</a>
						<a
							href='https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F598356603%2F'
							target='_blank'
							rel='noopener noreferrer'>
							<FontAwesomeIcon
								icon={faFacebookMessenger}
								className={'faIcon' + appTheme}
							/>
						</a>
						<a
							href='https://www.pinterest.co.uk/WildPastry/'
							target='_blank'
							rel='noopener noreferrer'>
							<FontAwesomeIcon icon={faPinterest} className={'faIcon' + appTheme} />
						</a>
						<a
							href='https://www.instagram.com/mikeparkernz/'
							target='_blank'
							rel='noopener noreferrer'>
							<FontAwesomeIcon icon={faInstagram} className={'faIcon' + appTheme} />
						</a>
					</Col>
					<Col sm={12} md={3} className='colWrap right responsiveText'>
						<h4 className={'marBot text' + appTheme}>ARCHIVED SITES</h4>
						<ul className={'list' + appTheme}>
							<li>
								<a
									target='_blank'
									rel='noopener noreferrer'
									href='https://fear.mikeparker.co.nz/'>
									The Fear Board
								</a>
							</li>
							<li>
								<a
									target='_blank'
									rel='noopener noreferrer'
									href='https://sok.mikeparker.co.nz/'>
									School of Kennedy
								</a>
							</li>
							<li>
								<a
									target='_blank'
									rel='noopener noreferrer'
									href='https://nat.mikeparker.co.nz/'>
									Let Nature In
								</a>
							</li>
						</ul>
					</Col>
					<Col sm={12} md={3} className='colWrap right'>
						<h4 className={'marBot text' + appTheme}>CONTACT</h4>
						<ul className={'list' + appTheme}>
							<li x-ms-format-detection='none'>022 5025 485
							</li>
							<li>
								<a href='mailto:mike@mikeparker.co.nz'>mike@mikeparker.co.nz
								</a>
							</li>
						</ul>
					</Col>
				</Row>
				<Row>
					<div className='footerWrap'>
						<div className='flex wrap responsiveFooterWrap'>
							<div>
								<div className='lineThinFooter' />
								<p
									className={
										'footerCopyright text400 responsiveCopyRight footerCopyright' +
										appTheme
									}>
									&copy; mike parker{' '}
									<span className='text300'>{new Date().getFullYear()}</span>
								</p>
							</div>
						</div>
					</div>
				</Row>
			</div>
		</React.Fragment>
	);
};

// EXPORT Footer
Footer.displayName = 'Footer';
export default Footer;
