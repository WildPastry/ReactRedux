// imports
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
							<FontAwesomeIcon icon={faLinkedinIn} className={'faIconDark'} />
						</a>
						<a
							href='https://github.com/WildPastry'
							target='_blank'
							rel='noopener noreferrer'>
							<FontAwesomeIcon icon={faGithub} className={'faIconDark'} />
						</a>
						<a
							href='https://www.facebook.com/michael.parker.3532507'
							target='_blank'
							rel='noopener noreferrer'>
							<FontAwesomeIcon icon={faFacebook} className={'faIconDark'} />
						</a>
						<a
							href='https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F598356603%2F'
							target='_blank'
							rel='noopener noreferrer'>
							<FontAwesomeIcon icon={faFacebookMessenger} className={'faIconDark'} />
						</a>
						<a
							href='https://www.pinterest.co.uk/WildPastry/'
							target='_blank'
							rel='noopener noreferrer'>
							<FontAwesomeIcon icon={faPinterest} className={'faIconDark'} />
						</a>
						<a
							href='https://www.instagram.com/mikeparkernz/'
							target='_blank'
							rel='noopener noreferrer'>
							<FontAwesomeIcon icon={faInstagram} className={'faIconDark'} />
						</a>
					</Col>
					<Col sm={12} md={3} className='colWrap right responsiveText'>
						<h4 className={'marBot textWhite'}>ARCHIVES</h4>
						<ul className={'listDark'}>
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
						<h4 className={'marBot textWhite'}>CONTACT</h4>
						<ul className={'listDark'}>
							<li x-ms-format-detection='none'>
								<span className='ms-2'>022 5025 485</span>
							</li>
							<li>
								<a href='mailto:mike@mikeparker.co.nz'>
									<span className='ms-2'>mike@mikeparker.co.nz</span>
								</a>
							</li>
						</ul>
					</Col>
				</Row>
				<Row>
					<div className='footerWrap'>
						<div className='lineThinFooter' />
						<div className='flex wrap responsiveFooterWrap'>
							<p className={'footerCopyright textYellow text400 responsiveCopyRight'}>
								&copy; mike parker{' '}
								<span className='text300'>{new Date().getFullYear()}</span>
							</p>
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
