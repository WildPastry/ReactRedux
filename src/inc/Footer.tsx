// IMPORTS
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faLinkedin,
	faFacebookSquare,
	faFacebookMessenger,
	faPinterest,
	faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

// MATH FUNCTION
Math.trunc =
	Math.trunc ||
	function (x) {
		if (isNaN(x)) {
			return NaN;
		}
		if (x > 0) {
			return Math.floor(x);
		}
		return Math.ceil(x);
	};

// CLASS FOOTER
class Footer extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			weather: [],
			currentWeather: '',
			currentLat: -41.2865,
			currentLng: 174.7762,
			geo: false,
			currentYear: '',
			isLoaded: false
		};
		this.getDate = this.getDate.bind(this);
	}

	// DATE FUNCTION
	getDate() {
		this.setState({
			currentYear: new Date().getFullYear(),
			isLoaded: true
		});
	}

	// GET DATE ON LOAD
	componentDidMount() {
		this.getDate();
	}

	render() {
		var { isLoaded } = this.state;
		if (!isLoaded) {
			// RENDER LOADING ICON
			return (
				<React.Fragment>
					<div id='loader'>
						<div className='loader' />
					</div>
				</React.Fragment>
			);
		} else {
			return (
				<React.Fragment>
					{/* FOOTER */}
					<div className='footer'>
						<div className='line' />
						<div className='row'>
							{/* FA ICONS */}
							<div className='colWrap responsiveWrap miniWrap col-sm-12 col-md-6'>
								{/* GITHUB */}
								<a
									href='https://github.com/WildPastry'
									target='_blank'
									rel='noopener noreferrer'>
									<FontAwesomeIcon icon={faGithub} className={this.props.faIcon} />
								</a>
								{/* LINKEDIN */}
								<a
									href='https://www.linkedin.com/in/mike-parker-aa084310a'
									target='_blank'
									rel='noopener noreferrer'>
									<FontAwesomeIcon icon={faLinkedin} className={this.props.faIcon} />
								</a>
								{/* FACEBOOK */}
								<a
									href='https://www.facebook.com/michael.parker.3532507'
									target='_blank'
									rel='noopener noreferrer'>
									<FontAwesomeIcon
										icon={faFacebookSquare}
										className={this.props.faIcon}
									/>
								</a>
								{/* MESSENGER */}
								<a
									href='https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F598356603%2F'
									target='_blank'
									rel='noopener noreferrer'>
									<FontAwesomeIcon
										icon={faFacebookMessenger}
										className={this.props.faIcon}
									/>
								</a>
								{/* PINTEREST */}
								<a
									href='https://www.pinterest.co.uk/WildPastry/'
									target='_blank'
									rel='noopener noreferrer'>
									<FontAwesomeIcon icon={faPinterest} className={this.props.faIcon} />
								</a>
								{/* INSTAGRAM */}
								<a
									href='https://www.instagram.com/mikeparkernz/'
									target='_blank'
									rel='noopener noreferrer'>
									<FontAwesomeIcon icon={faInstagram} className={this.props.faIcon} />
								</a>
							</div>
							{/* ARCHIVES */}
							<div className='colWrap right responsiveText col-sm-6 col-md-3'>
								{/* ARCHIVES HEADING */}
								<h4 className={this.props.footerHeading}>ARCHIVES</h4>
								{/* ARCHIVES LIST */}
								<ul className={this.props.list}>
									{/* WEBSITES */}
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
							</div>
							{/* CONTACT DETAILS */}
							<div className='colWrap right col-sm-6 col-md-3'>
								{/* CONTACT HEADING */}
								<h4 className={this.props.footerHeading}>CONTACT</h4>
								{/* CONTACT LIST */}
								<ul className={this.props.list}>
									{/* PHONE NUMBER */}
									<li x-ms-format-detection='none'>
										<FontAwesomeIcon icon={faMobileAlt} className={this.props.faIconSm} />
										<span className='ml-2'>022 5025 485</span>
									</li>
									{/* EMAIL ADDRESS */}
									<li>
										<a href='mailto:mike@mikeparker.co.nz'>
											<FontAwesomeIcon
												icon={faEnvelope}
												className={this.props.faIconSm}
											/>
											<span className='ml-2'>mike@mikeparker.co.nz</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
						{/* COPYRIGHT AND WEATHER */}
						<div className='row'>
							<div className='footerWrap'>
								<div className='lineThinFooter' />
								<div className='flex wrap responsiveFooterWrap'>
									{/* COPYRIGHT */}
									<p className={this.props.footerCopyright}>
										&copy; mike parker{' '}
										<span className='text300'>{this.state.currentYear}</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</React.Fragment>
			);
		}
	}
}

// EXPORT
export default Footer;
