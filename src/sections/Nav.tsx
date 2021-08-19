// IMPORTS
import React from 'react';
import { HamburgerSqueeze } from 'react-animated-burgers';
import { MDBAnimation } from 'mdbreact';
import { SetSection } from '../features/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';

// Nav
// export default function Nav({
// 	navigateSections,
// 	text
// }: NavButtonProps): JSX.Element {
// 	const dispatch = useDispatch();

// 	const currentvisibilityFilter = useSelector((state: RootState) => state.filterProjects);

// 	return (
// 		<button
// 			onClick={() => dispatch(setNavigation(navigateSections))}>
// 			{text}
// 		</button>
// 	);
// }
// interface SetSection {
// 	handleSection: (section: string) => void
// }
// }
// const Child: React.FC<ChildProps> = (props) => {
// 	 return (
// 			 <p onClick={props.fire}>Click Me</p>
// 	 )
// }
// interface SetSection {
// 	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
// }
// export interface SetSection {
// 	handleSection(): any;
// }

const Nav: React.FC<SetSection> = (props) => {
	// const dispatch = useDispatch();
	return (
		<React.Fragment>
			<div className='flex wrap pad navWrap'>
				<p className={'brandDark'} onClick={() => props.handleSection('GALLERY')}>
					mike parker <span className='text300'> portfolio </span>
				</p>
				{/* {burgerMenu} */}
				<div className='menu flex'>
					<h4
						id='navGallery'
						onClick={() => props.handleSection('GALLERY')}
						className={'navItemDark navItemActiveDark'}>
						GALLERY
					</h4>
					<h4
						onClick={() => props.handleSection('PROJECT')}
						id='navProject'
						className={'navItemDark'}>
						PROJECT
						{/* <span className='textLightGrey text400 marLeft'>[ {projectName} ]</span> */}
					</h4>
					<h4
						id='navAbout'
						onClick={() => props.handleSection('ABOUT')}
						className={'navItemDark'}>
						ABOUT
					</h4>
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
