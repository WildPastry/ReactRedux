// IMPORTS
import React, { Component } from 'react';
import { HamburgerSqueeze } from 'react-animated-burgers';
import { MDBAnimation } from 'mdbreact';

// CLASS NAV
class Nav extends Component<any, any> {
	// NAV STATE
	constructor(props: any) {
		super(props);
		this.state = {
			isActive: false,
			collapseMenu: false,
			collapseMenuFalse: 'hidden menuActive',
			collapseMenuTrue: 'visible menuActive',
		};
		this.changePageFromNav = this.changePageFromNav.bind(this);
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	// CHANGE PAGE FUNCTION
	changePageFromNav(value: any) {
		this.props.changePageFromNav(value);
	}

	// TOGGLE MENU FUNCTION
	toggleMenu = () => {
		if (this.state.collapseMenu === false) {
			this.setState({
				collapseMenu: true,
			});
		} else if (this.state.collapseMenu === true) {
			this.setState({
				collapseMenu: false,
			});
		}
		this.setState({
			isActive: !this.state.isActive,
		});
	};

	// RENDER COMPONENTS
	render() {
		// NAVIGATION MENU
		let collapseMenu;
		let burgerMenu;
		// DARK THEME
		if (this.props.light === false) {
			burgerMenu = (
				<div className='menuCollapse'>
					<HamburgerSqueeze
						className='menuBurger'
						isActive={this.state.isActive}
						toggleButton={this.toggleMenu}
						buttonWidth={30}
						barColor={'#fff'}
					/>
				</div>
			);
			// LIGHT THEME
		} else if (this.props.light === true) {
			burgerMenu = (
				<div className='menuCollapse'>
					<HamburgerSqueeze
						className='menuBurger'
						isActive={this.state.isActive}
						toggleButton={this.toggleMenu}
						buttonWidth={30}
						barColor={'#292929'}
					/>
				</div>
			);
		}
		// MOBILE MENU
		if (this.state.collapseMenu === true) {
			collapseMenu = (
				<div className={this.state.collapseMenuTrue}>
					{/* GALLERY */}
					<h4
						id='navGallery'
						className={this.props.navGalleryActive}
						onClick={this.changePageFromNav.bind(this, 'gallery')}>
						GALLERY
					</h4>
					{/* PROJECT */}
					<h4
						id='navProject'
						className={this.props.navProjectActive}>
						PROJECT<span className='textLightGrey text400'>[ ... ]</span>
					</h4>
					{/* ABOUT */}
					<h4
						id='navAbout'
						className={this.props.navAboutActive}
						onClick={this.changePageFromNav.bind(this, 'about')}>
						ABOUT
					</h4>
				</div>
			);
			// DESKTOP MENU
		} else if (this.state.collapseMenu === false) {
			collapseMenu = (
				<div className={this.state.collapseMenuFalse}>
					{/* GALLERY */}
					<h4
						id='navGallery'
						className={this.props.navGallery}
						onClick={this.changePageFromNav.bind(this, 'gallery')}>
						GALLERY
					</h4>
					{/* PROJECT */}
					<h4
						id='navProject'
						className={this.props.navProject}>
						PROJECT []
					</h4>					
					{/* ABOUT */}
					<h4
						id='navAbout'
						className={this.props.navAbout}
						onClick={this.changePageFromNav.bind(this, 'about')}>
						ABOUT
					</h4>
				</div>
			);
		}
		// RETURN
		return (
			// FRAGMENTS AND ANIMATION
			<React.Fragment>
				<MDBAnimation type='fadeIn'>
					{/* BRAND */}
					<div className='flex wrap pad navWrap'>
						<p className={this.props.brand} onClick={this.changePageFromNav.bind(this, 'gallery')}>
							{/* LINK TO HOME */}
							mike parker <span className='text300'> portfolio </span>
						</p>
						{/* NAV */}
						{burgerMenu}
						<div className='menu flex'>
							{/* GALLERY */}
							<h4
								id='navGallery'
								className={this.props.navGallery}
								onClick={this.changePageFromNav.bind(this, 'gallery')}>
								GALLERY
							</h4>
							{/* PROJECT */}
							<h4
								id='navProject'
								className={this.props.navProject}>
								PROJECT []
							</h4>							
							{/* ABOUT */}
							<h4
								id='navAbout'
								className={this.props.navAbout}
								onClick={this.changePageFromNav.bind(this, 'about')}>
								ABOUT
							</h4>
						</div>
					</div>
					{/* COLLAPSE MENU */}
					{collapseMenu}
				</MDBAnimation>
			</React.Fragment>
		);
	}
}

// EXPORT
export default Nav;
