// imports
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
import { setNav } from '../redux/slices/navSlice';
import AppTheme from '../components/AppTheme';

// Nav
const Nav: React.FC = () => {
	// useSelectors for app theme and navigation
	const appTheme = useSelector((state: RootState) => {
		return state.setTheme.appTheme;
	});

	const currentSection = useSelector((state: RootState) => {
		return state.setNav.currentSection;
	});

	// dispatch
	const dispatch = useDispatch();

	// handle function for navigation and active menu item
	const [showActive, setShowActive] = useState('GALLERY');

	const handleNav = (section: string) => {
		setShowActive(section);
		dispatch(setNav(section));
	};

	return (
		<React.Fragment>
			<div className='flex wrap pad navWrap'>
				<p className={'brand' + appTheme} onClick={() => handleNav('GALLERY')}>
					mike parker <span className='text300'> portfolio </span>
				</p>
				{/* {burgerMenu} */}
				<div className='menu flex navWrap'>
					<h4
						onClick={() => handleNav('GALLERY')}
						className={`${
							showActive === 'GALLERY'
								? 'navItem' + appTheme + ' navItemActive' + appTheme
								: 'navItem' + appTheme
						}`}>
						GALLERY
					</h4>
					<h4
						onClick={() => handleNav('ABOUT')}
						className={`${
							showActive === 'ABOUT'
								? 'navItem' + appTheme + ' navItemActive' + appTheme
								: 'navItem' + appTheme
						}`}>
						ABOUT
					</h4>
					<AppTheme />
				</div>
			</div>
			{/* {collapseMenu} */}
		</React.Fragment>
	);
};

// EXPORT Nav
Nav.displayName = 'Nav';
export default Nav;

// class Nav extends Component<any, any> {
// 	constructor(props: any) {
// 		super(props);
// 		this.state = {
// 			isActive: false,
// 			collapseMenu: false,
// 			collapseMenuFalse: 'hidden menuActive',
// 			collapseMenuTrue: 'visible menuActive'
// 		};
// 		this.changePageFromNav = this.changePageFromNav.bind(this);
// 		this.toggleMenu = this.toggleMenu.bind(this);
// 	}

// 	changePageFromNav(value: any) {
// 		this.props.changePageFromNav(value);
// 	}

// 	toggleMenu = () => {
// 		if (this.state.collapseMenu === false) {
// 			this.setState({
// 				collapseMenu: true
// 			});
// 		} else if (this.state.collapseMenu === true) {
// 			this.setState({
// 				collapseMenu: false
// 			});
// 		}
// 		this.setState({
// 			isActive: !this.state.isActive
// 		});
// 	};

// 	render() {
// 		let projectName;
// 		this.props.currentProjectName !== ''
// 			? (projectName = this.props.currentProjectName)
// 			: (projectName = ' ... ');

// 		let collapseMenu;
// 		let burgerMenu;
// 		if (this.props.light === false) {
// 			burgerMenu = (
// 				<div className='menuCollapse'>
// 					<HamburgerSqueeze
// 						className='menuBurger'
// 						isActive={this.state.isActive}
// 						toggleButton={this.toggleMenu}
// 						buttonWidth={30}
// 						barColor={'#fff'}
// 					/>
// 				</div>
// 			);
// 		} else if (this.props.light === true) {
// 			burgerMenu = (
// 				<div className='menuCollapse'>
// 					<HamburgerSqueeze
// 						className='menuBurger'
// 						isActive={this.state.isActive}
// 						toggleButton={this.toggleMenu}
// 						buttonWidth={30}
// 						barColor={'#292929'}
// 					/>
// 				</div>
// 			);
// 		}
// 		if (this.state.collapseMenu === true) {
// 			collapseMenu = (
// 				<div className={this.state.collapseMenuTrue}>
// 					<h4
// 						id='navGallery'
// 						className={this.props.navGalleryActive}
// 						onClick={this.changePageFromNav.bind(this, 'gallery')}>
// 						GALLERY
// 					</h4>
// 					<h4 id='navProject' className={this.props.navProjectActive}>
// 						PROJECT
// 						<span className='textLightGrey text400 marLeft'> [ {projectName} ]</span>
// 					</h4>
// 					<h4
// 						id='navAbout'
// 						className={this.props.navAboutActive}
// 						onClick={this.changePageFromNav.bind(this, 'about')}>
// 						ABOUT
// 					</h4>
// 				</div>
// 			);
// 		} else if (this.state.collapseMenu === false) {
// 			collapseMenu = (
// 				<div className={this.state.collapseMenuFalse}>
// 					<h4
// 						id='navGallery'
// 						className={this.props.navGallery}
// 						onClick={this.changePageFromNav.bind(this, 'gallery')}>
// 						GALLERY
// 					</h4>
// 					<h4 id='navProject' className={this.props.navProject}>
// 						PROJECT
// 						<span className='textLightGrey text400 marLeft'> [ {projectName} ]</span>
// 					</h4>
// 					<h4
// 						id='navAbout'
// 						className={this.props.navAbout}
// 						onClick={this.changePageFromNav.bind(this, 'about')}>
// 						ABOUT
// 					</h4>
// 				</div>
// 			);
// 		}
// 		return (
// 			<React.Fragment>
// 				<MDBAnimation type='fadeIn'>
// 					<div className='flex wrap pad navWrap'>
// 						<p
// 							className={this.props.brand}
// 							onClick={this.changePageFromNav.bind(this, 'gallery')}>
// 							mike parker <span className='text300'> portfolio </span>
// 						</p>
// 						{burgerMenu}
// 						<div className='menu flex'>
// 							<h4
// 								id='navGallery'
// 								className={this.props.navGallery}
// 								onClick={this.changePageFromNav.bind(this, 'gallery')}>
// 								GALLERY
// 							</h4>
// 							<h4 id='navProject' className={this.props.navProject}>
// 								PROJECT
// 								<span className='textLightGrey text400 marLeft'>[ {projectName} ]</span>
// 							</h4>
// 							<h4
// 								id='navAbout'
// 								className={this.props.navAbout}
// 								onClick={this.changePageFromNav.bind(this, 'about')}>
// 								ABOUT
// 							</h4>
// 						</div>
// 					</div>
// 					{collapseMenu}
// 				</MDBAnimation>
// 			</React.Fragment>
// 		);
// 	}
// }
// export default Nav;
