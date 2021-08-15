// IMPORTS
import React, { Component } from 'react';
// COMPONENTS
import Nav from './inc/Nav';
import Type from './inc/Type';
import Gallery from './inc/Gallery';
import Project from './inc/Project';
import About from './inc/About';
import Footer from './inc/Footer';
// DATA
import projectData from './data/projects.json';
// SCROLL
import ScrollUpButton from 'react-scroll-up-button';
// ANIMATION
import { MDBAnimation } from 'mdbreact';
// FONT ICONS
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
	faFillDrip,
	faEnvelope,
	faChevronLeft,
	faChevronRight,
	faTh,
	faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
// SASS
import './scss/main.scss';
// ADD FONT ICONS TO LIBRARY
library.add(
	fab,
	faFillDrip,
	faEnvelope,
	faChevronLeft,
	faChevronRight,
	faTh,
	faMapMarkerAlt
);

// VARIABLES AND TYPES
var randomNumber: any[] | number[] | (string | number)[];
var htmlBody = document.getElementById('bg');
htmlBody.className = 'bgDark';
var currentEverything: string;
var currentBranding: string;
var currentGraphic: string;
var currentUx: string;
var currentWeb: string;

// CLASS APP
class App extends Component<any, any> {
	// APP STATE
	constructor(props: any) {
		super(props);
		this.state = {
			// THEME
			theme: false,
			light: false,
			// RANDOM NUMBER ARRAY
			randomNumber: [],
			// PROJECT DATA
			projects: projectData,
			// CURRENT PAGE
			currentPage: 'gallery',
			// IMAGE THEME
			imgTheme: 'imgWrapDark col-xs-12 col-sm-6 col-md-4 col-lg-4',
			// NAV COLOURS
			navGallery: 'navItemDark navItemActiveDark',
			navAbout: 'navItemDark',
			navProject: 'fakeNavItemDark',
			navGalleryActive: 'navItemDarkCollapse navItemActiveDarkCollapse menuActiveItem',
			navAboutActive: 'navItemDarkCollapse menuActiveItem',
			navProjectActive: 'fakeNavItemDarkCollapse menuActiveItem',
			// TEXT AND ICON COLOURS
			type: 'textWhite',
			thisType: 'textWhite textHide',
			space: 'space textGreyBg',
			brand: 'brandDark',
			galleryFillIcon: 'galleryFillIconDark',
			singleProjectName: 'textWhite text700',
			singleProjectDesc: 'textSpotGrey text400',
			faIcon: 'faIconDark',
			list: 'listDark',
			aboutList: 'aboutListDark aboutListWrap',
			footerHeading: 'marBot textWhite',
			footerPara: 'pad marBotFooter textSpotGrey',
			footerTemp: 'footerTemp textWhite',
			footerIcon: 'footerIcon textWhite',
			footerCopyright: 'footerCopyright textYellow text400 responsiveCopyRight',
			loadMore: 'loadMoreDark',
			// FILTER SETTING
			filter: 'everything',
			// FILTER COLOURS
			everything: 'filterItemDark filterItemActiveDark text700',
			branding: 'filterItemDark',
			graphic: 'filterItemDark',
			ux: 'filterItemDark',
			web: 'filterItemDark',
			// ABOUT PAGE COLOURS
			aboutHeading: 'marBot textWhite',
			aboutPara: 'textWhite',
			aboutPhone: 'textSpotGrey',
			// PROJECT PAGE COLOURS
			projectHeading: 'marBot textWhite',
			projectIntro: 'textSpotGrey text300',
			projectDesc: 'textWhite',
			projectDetails: 'textWhite text700',
			projectRow: 'projectRowDark',
			barColor: 'textWhite',
			// PROJECT PAGE LINK
			link: 'textPeach projectsLink',
			// CURRENT PROJECT INFORMATION
			currentProject: '',
			currentProjectName: '',
			currentProjectFields: [],
			currentProjectClient: '',
			currentProjectTimeline: '',
			currentProjectWebsite: '',
			currentProjectThumb: '',
			currentProjectImages: [],
			currentProjectIcons: [],
			currentProjectIntro: '',
			currentProjectDesc: '',
			currentProjectUrl: '',
			currentProjectGit: '',
			currentProjectGitUrl: ''
		};
		this.filter = this.filter.bind(this);
		this.filterReset = this.filterReset.bind(this);
		this.changePage = this.changePage.bind(this);
		this.changeTheme = this.changeTheme.bind(this);
		this.changeImageTheme = this.changeImageTheme.bind(this);
		this.changePageAndProject = this.changePageAndProject.bind(this);
		this.changeProjectName = this.changeProjectName.bind(this);
		this.randomProject = this.randomProject.bind(this);
	}

	// RANDOM PROJECT MATH FUNCTION
	randomProject() {
		randomNumber = [];
		while (randomNumber.length < 3) {
			var r = Math.floor(Math.random() * 12);
			if (randomNumber.indexOf(r) === -1) {
				randomNumber.push(r);
			}
		}
		this.setState({
			randomNumber: randomNumber
		});
	}

	changeTheme() {
		// CHECK FILTER & PAGE
		var currentFilter = this.state.filter;
		var currentPage = this.state.currentPage;
		var currentNavGallery,
			currentNavAbout,
			currentNavProject,
			currentNavGalleryActive,
			currentNavAboutActive,
			currentNavProjectActive;

		// LIGHT THEME
		if (this.state.light === false) {
			currentEverything = 'filterItemLight text700';
			currentBranding = 'filterItemLight';
			currentGraphic = 'filterItemLight';
			currentUx = 'filterItemLight';
			currentWeb = 'filterItemLight';
			if (currentFilter === 'everything') {
				currentEverything = 'filterItemLight filterItemActiveLight text700';
			} else if (currentFilter === 'branding') {
				currentBranding = 'filterItemLight filterItemActiveLight';
			} else if (currentFilter === 'graphic') {
				currentGraphic = 'filterItemLight filterItemActiveLight';
			} else if (currentFilter === 'ux') {
				currentUx = 'filterItemLight filterItemActiveLight';
			} else if (currentFilter === 'web') {
				currentWeb = 'filterItemLight filterItemActiveLight';
			}
			// PAGE CHECK
			if (currentPage === 'gallery') {
				currentNavGallery = 'navItemLight navItemActiveLight';
				currentNavAbout = 'navItemLight';
				currentNavProject = 'fakeNavItemLight';
				currentNavGalleryActive =
					'navItemLightCollapse navItemActiveLightCollapse menuActiveItem';
				currentNavAboutActive = 'navItemLightCollapse menuActiveItem';
				currentNavProjectActive = 'fakeNavItemLightCollapse menuActiveItem';
			} else if (currentPage === 'about') {
				currentNavGallery = 'navItemLight';
				currentNavAbout = 'navItemLight navItemActiveLight';
				currentNavProject = 'fakeNavItemLight';
				currentNavGalleryActive = 'navItemLightCollapse menuActiveItem';
				currentNavAboutActive =
					'navItemLightCollapse menuActiveItem navItemActiveLightCollapse';
				currentNavProjectActive = 'fakeNavItemLightCollapse menuActiveItem';
			} else if (currentPage === 'project') {
				currentNavGallery = 'navItemLight';
				currentNavAbout = 'navItemLight';
				currentNavProject = 'fakeNavItemLight navItemActiveLight';
				currentNavGalleryActive = 'navItemLightCollapse menuActiveItem';
				currentNavAboutActive = 'navItemLightCollapse menuActiveItem';
				currentNavProjectActive =
					'fakeNavItemLightCollapse menuActiveItem fakeNavItemActiveLightCollapse';
			}
			// LIGHT THEME
			htmlBody.className = 'bgLight';
			this.setState({
				// THEME
				light: true,
				// NAV COLOURS
				navGallery: currentNavGallery,
				navAbout: currentNavAbout,
				navProject: currentNavProject,
				navGalleryActive: currentNavGalleryActive,
				navAboutActive: currentNavAboutActive,
				navProjectActive: currentNavProjectActive,
				// TEXT AND ICON COLOURS
				type: 'textGrey',
				thisType: 'textGrey textHide',
				space: 'space textWhiteBg',
				brand: 'brandLight',
				galleryFillIcon: 'galleryFillIconLight',
				singleProjectName: 'textLightGrey text700',
				singleProjectDesc: 'textGrey text400',
				faIcon: 'faIconLight',
				faIconSm: 'faIconSmLight',
				list: 'listLight',
				aboutList: 'aboutListLight aboutListWrap',
				footerHeading: 'marBot textGrey',
				footerPara: 'pad marBotFooter textLightGrey',
				footerTemp: 'footerTemp textGrey',
				footerIcon: 'footerIcon textLightGrey',
				footerCopyright: 'footerCopyright textBlue text400 responsiveCopyRight',
				loadMore: 'loadMoreLight',
				// FILTER COLOURS
				everything: currentEverything,
				branding: currentBranding,
				graphic: currentGraphic,
				ux: currentUx,
				web: currentWeb,
				// ABOUT PAGE COLOURS
				aboutHeading: 'marBot textGrey',
				aboutPara: 'textGrey',
				aboutPhone: 'textLightGrey',
				// PROJECT PAGE COLOURS
				projectHeading: 'marBot textGrey',
				projectIntro: 'textLightGrey text300',
				projectDesc: 'textGrey',
				projectDetails: 'textGrey text700',
				projectRow: 'projectRowLight',
				barColor: 'textGrey'
			});
			// DARK THEME
		} else {
			currentEverything = 'filterItemDark text700';
			currentBranding = 'filterItemDark';
			currentGraphic = 'filterItemDark';
			currentUx = 'filterItemDark';
			currentWeb = 'filterItemDark';
			if (currentFilter === 'everything') {
				currentEverything = 'filterItemDark filterItemActiveDark text700';
			} else if (currentFilter === 'branding') {
				currentBranding = 'filterItemDark filterItemActiveDark';
			} else if (currentFilter === 'graphic') {
				currentGraphic = 'filterItemDark filterItemActiveDark';
			} else if (currentFilter === 'ux') {
				currentUx = 'filterItemDark filterItemActiveDark';
			} else if (currentFilter === 'web') {
				currentWeb = 'filterItemDark filterItemActiveDark';
			}
			// PAGE CHECK
			if (currentPage === 'gallery') {
				currentNavGallery = 'navItemDark navItemActiveDark';
				currentNavAbout = 'navItemDark';
				currentNavProject = 'fakeNavItemDark';
				currentNavGalleryActive =
					'navItemDarkCollapse navItemActiveDarkCollapse menuActiveItem';
				currentNavAboutActive = 'navItemDarkCollapse menuActiveItem';
				currentNavProjectActive = 'fakeNavItemDarkCollapse menuActiveItem';
			} else if (currentPage === 'about') {
				currentNavGallery = 'navItemDark';
				currentNavAbout = 'navItemDark navItemActiveDark';
				currentNavProject = 'fakeNavItemDark';
				currentNavGalleryActive = 'navItemDarkCollapse menuActiveItem';
				currentNavAboutActive =
					'navItemDarkCollapse menuActiveItem navItemActiveDarkCollapse';
				currentNavProjectActive = 'fakeNavItemDarkCollapse menuActiveItem';
			} else if (currentPage === 'project') {
				currentNavGallery = 'navItemDark';
				currentNavAbout = 'navItemDark';
				currentNavProject = 'fakeNavItemDark fakeNavItemActiveDark';
				currentNavGalleryActive = 'navItemDarkCollapse menuActiveItem';
				currentNavAboutActive = 'navItemDarkCollapse menuActiveItem';
				currentNavProjectActive =
					'fakeNavItemDarkCollapse menuActiveItem fakeNavItemActiveDarkCollapse';
			}
			// DARK THEME
			htmlBody.className = 'bgDark';
			this.setState({
				// THEME
				light: false,
				// NAV COLOURS
				navGallery: currentNavGallery,
				navAbout: currentNavAbout,
				navProject: currentNavProject,
				navGalleryActive: currentNavGalleryActive,
				navAboutActive: currentNavAboutActive,
				navProjectActive: currentNavProjectActive,
				// TEXT AND ICON COLOURS
				type: 'textWhite',
				thisType: 'textWhite textHide',
				space: 'space textGreyBg',
				brand: 'brandDark',
				galleryFillIcon: 'galleryFillIconDark',
				singleProjectName: 'textWhite text700',
				singleProjectDesc: 'textSpotGrey text400',
				faIcon: 'faIconDark',
				faIconSm: 'faIconSmDark',
				list: 'listDark',
				aboutList: 'aboutListDark aboutListWrap',
				footerHeading: 'marBot textWhite',
				footerPara: 'pad marBotFooter textSpotGrey',
				footerTemp: 'footerTemp textWhite',
				footerIcon: 'footerIcon textWhite',
				footerCopyright: 'footerCopyright textYellow text400 responsiveCopyRight',
				loadMore: 'loadMoreDark',
				// FILTER COLOURS
				everything: currentEverything,
				branding: currentBranding,
				graphic: currentGraphic,
				ux: currentUx,
				web: currentWeb,
				// ABOUT PAGE COLOURS
				aboutHeading: 'marBot textWhite',
				aboutPara: 'textWhite',
				aboutPhone: 'textSpotGrey',
				// PROJECT PAGE COLOURS
				projectHeading: 'marBot textWhite',
				projectIntro: 'textSpotGrey text300',
				projectDesc: 'textWhite',
				projectDetails: 'textWhite text700',
				projectRow: 'projectRowDark',
				barColor: 'textWhite'
			});
		}
	}

	// SORT FUNCTION
	sortData(data: any[]) {
		data = [].concat(data).sort((a, b) => (a.id > b.id ? 1 : -1));
		this.setState({
			projects: data
		});
	}

	// FILTER FUCNTION
	filter(value: any) {
		var projects = projectData;
		var filter = value;
		var projectsFiltered = projects.filter(
			(project: { fields: { indexOf: (arg0: string) => number } }) => {
				return project.fields.indexOf(filter) >= 0;
			}
		);
		// DARK THEME
		if (this.state.light === false) {
			// FILTER SYSTEM
			if (value === 'Branding') {
				this.setState({
					everything: 'filterItemDark text700',
					branding: 'filterItemDark filterItemActiveDark',
					graphic: 'filterItemDark',
					ux: 'filterItemDark',
					web: 'filterItemDark',
					filter: 'branding'
				});
			} else if (value === 'Graphic') {
				this.setState({
					everything: 'filterItemDark text700',
					branding: 'filterItemDark',
					graphic: 'filterItemDark filterItemActiveDark',
					ux: 'filterItemDark',
					web: 'filterItemDark',
					filter: 'graphic'
				});
			} else if (value === 'UX') {
				this.setState({
					everything: 'filterItemDark text700',
					branding: 'filterItemDark',
					graphic: 'filterItemDark',
					ux: 'filterItemDark filterItemActiveDark',
					web: 'filterItemDark',
					filter: 'ux'
				});
			} else if (value === 'Web') {
				this.setState({
					everything: 'filterItemDark text700',
					branding: 'filterItemDark',
					graphic: 'filterItemDark',
					ux: 'filterItemDark',
					web: 'filterItemDark filterItemActiveDark',
					filter: 'web'
				});
			}
			// LIGHT THEME
		} else if (this.state.light === true) {
			// FILTER SYSTEM
			if (value === 'Branding') {
				this.setState({
					everything: 'filterItemLight text700',
					branding: 'filterItemLight filterItemActiveLight',
					graphic: 'filterItemLight',
					ux: 'filterItemLight',
					web: 'filterItemLight',
					filter: 'branding'
				});
			} else if (value === 'Graphic') {
				this.setState({
					everything: 'filterItemLight text700',
					branding: 'filterItemLight',
					graphic: 'filterItemLight filterItemActiveLight',
					ux: 'filterItemLight',
					web: 'filterItemLight',
					filter: 'graphic'
				});
			} else if (value === 'UX') {
				this.setState({
					everything: 'filterItemLight text700',
					branding: 'filterItemLight',
					graphic: 'filterItemLight',
					ux: 'filterItemLight filterItemActiveLight',
					web: 'filterItemLight',
					filter: 'ux'
				});
			} else if (value === 'Web') {
				this.setState({
					everything: 'filterItemLight text700',
					branding: 'filterItemLight',
					graphic: 'filterItemLight',
					ux: 'filterItemLight',
					web: 'filterItemLight filterItemActiveLight',
					filter: 'web'
				});
			}
		}
		this.sortData(projectsFiltered)
	}

	// FILTER SYSTEM RESET
	filterReset() {
		// DARK THEME
		if (this.state.light === false) {
			// FILTER SYSTEM RESET
			this.setState({
				everything: 'filterItemDark filterItemActiveDark text700',
				branding: 'filterItemDark',
				graphic: 'filterItemDark',
				ux: 'filterItemDark',
				web: 'filterItemDark',
				filter: 'everything'
			});
			// lIGHT THEME
		} else if (this.state.light === true) {
			// FILTER SYSTEM RESET
			this.setState({
				everything: 'filterItemLight filterItemActiveLight text700',
				branding: 'filterItemLight',
				graphic: 'filterItemLight',
				ux: 'filterItemLight',
				web: 'filterItemLight',
				filter: 'everything'
			});
		}
		this.sortData(projectData)
	}

	// COLOURS BASED ON PAGE
	changePage(value: any) {
		// DARK THEME
		if (this.state.light === false) {
			if (value === 'gallery') {
				this.setState({
					currentProjectName: '',
					navGallery: 'navItemDark navItemActiveDark',
					navAbout: 'navItemDark',
					navProject: 'fakeNavItemDark',
					navGalleryActive:
						'navItemDarkCollapse menuActiveItem navItemActiveDarkCollapse',
					navAboutActive: 'navItemDarkCollapse menuActiveItem',
					navProjectActive: 'fakeNavItemDarkCollapse menuActiveItem'
				});
			} else if (value === 'about') {
				this.setState({
					currentProjectName: '',
					navGallery: 'navItemDark',
					navAbout: 'navItemDark navItemActiveDark',
					navProject: 'fakeNavItemDark',
					navGalleryActive: 'navItemDarkCollapse menuActiveItem',
					navAboutActive: 'navItemDarkCollapse menuActiveItem navItemActiveDarkCollapse',
					navProjectActive: 'fakeNavItemDarkCollapse menuActiveItem'
				});
			} else if (value === 'project') {
				this.setState({
					navGallery: 'navItemDark',
					navAbout: 'navItemDark',
					navProject: 'fakeNavItemDark fakeNavItemActiveDark',
					navGalleryActive: 'navItemDarkCollapse menuActiveItem',
					navAboutActive: 'navItemDarkCollapse menuActiveItem',
					navProjectActive:
						'fakeNavItemDarkCollapse fakeNavItemActiveDarkCollapse menuActiveItem'
				});
			}
			// LIGHT THEME
		} else if (this.state.light === true) {
			if (value === 'gallery') {
				this.setState({
					currentProjectName: '',
					navGallery: 'navItemLight navItemActiveLight',
					navAbout: 'navItemLight',
					navProject: 'fakeNavItemLight',
					navGalleryActive:
						'navItemLightCollapse menuActiveItem navItemActiveLightCollapse',
					navAboutActive: 'navItemLightCollapse menuActiveItem',
					navProjectActive: 'fakeNavItemLightCollapse menuActiveItem'
				});
			} else if (value === 'about') {
				this.setState({
					currentProjectName: '',
					navGallery: 'navItemLight',
					navAbout: 'navItemLight navItemActiveLight',
					navProject: 'fakeNavItemLight',
					navGalleryActive: 'navItemLightCollapse menuActiveItem',
					navAboutActive:
						'navItemLightCollapse menuActiveItem navItemActiveLightCollapse',
					navProjectActive: 'fakeNavItemLightCollapse menuActiveItem'
				});
			} else if (value === 'project') {
				this.setState({
					navGallery: 'navItemLight',
					navAbout: 'navItemLight',
					navProject: 'fakeNavItemLight fakeNavItemActiveLight',
					navGalleryActive: 'navItemLightCollapse menuActiveItem',
					navAboutActive: 'navItemLightCollapse menuActiveItem',
					navProjectActive:
						'fakeNavItemLightCollapse fakeNavItemActiveLightCollapse menuActiveItem'
				});
			}
		}
		this.setState({
			currentPage: value
		});
	}

	// CHANGE PROJECT NAME
	changeProjectName(value: any) {
		this.setState({
			currentProjectName: value
		});
	}

	// IMAGE THEME COLOURS
	changeImageTheme() {
		// LIGHT THEME
		if (this.state.theme === false) {
			this.setState({
				theme: true,
				imgTheme: 'imgWrapLight col-xs-12 col-sm-6 col-md-4 col-lg-4'
			});
			// DARK THEME
		} else {
			this.setState({
				theme: false,
				imgTheme: 'imgWrapDark col-xs-12 col-sm-6 col-md-4 col-lg-4'
			});
		}
	}

	// CHANGE PAGE AND PROJECT FUNCTION
	changePageAndProject(value: any) {
		this.setState({
			currentPage: value['page'],
			currentProject: value['project'],
			currentProjectName: value['projectName'],
			currentProjectFields: value['projectFields'],
			currentProjectClient: value['projectClient'],
			currentProjectTimeline: value['projectTimeline'],
			currentProjectWebsite: value['projectWebsite'],
			currentProjectThumb: value['projectThumb'],
			currentProjectImages: value['projectImages'],
			currentProjectIcons: value['projectIcons'],
			currentProjectIntro: value['projectIntro'],
			currentProjectDesc: value['projectDesc'],
			currentProjectUrl: value['projectUrl'],
			currentProjectGit: value['projectGit'],
			currentProjectGitUrl: value['projectGitUrl']
		});
		this.changePage(value['page']);
	}

	// COMPONENT SCROLL FUNCTION
	componentDidMount() {
		this.sortData(projectData);
		this.randomProject();
		window.scrollTo(0, 0);
	}

	// RENDER COMPONENTS
	render() {
		var currentPage = this.state.currentPage;
		let projectDisplay;
		let display;

		if (currentPage === 'gallery') {
			display = (
				// GALLERY PAGE
				<Gallery
					sortData={this.sortData}
					projects={this.state.projects}
					changePageFromGallery={this.changePageAndProject}
					changeImageTheme={this.changeImageTheme}
					changeTheme={this.changeTheme}
					imgTheme={this.state.imgTheme}
					galleryFillIcon={this.state.galleryFillIcon}
					singleProjectName={this.state.singleProjectName}
					singleProjectDesc={this.state.singleProjectDesc}
					everything={this.state.everything}
					branding={this.state.branding}
					graphic={this.state.graphic}
					ux={this.state.ux}
					web={this.state.web}
					filter={this.filter}
					filterReset={this.filterReset}
					randomProject={this.randomProject}
					loadMore={this.state.loadMore}
				/>
			);
		} else if (currentPage === 'project') {
			display = '';
			// PROJECT PAGE
			projectDisplay = (
				<Project
					projects={this.state.projects}
					currentProject={this.state.currentProject}
					currentProjectName={this.state.currentProjectName}
					currentProjectFields={this.state.currentProjectFields}
					currentProjectClient={this.state.currentProjectClient}
					currentProjectTimeline={this.state.currentProjectTimeline}
					currentProjectWebsite={this.state.currentProjectWebsite}
					currentProjectThumb={this.state.currentProjectThumb}
					currentProjectImages={this.state.currentProjectImages}
					currentProjectIcons={this.state.currentProjectIcons}
					currentProjectIntro={this.state.currentProjectIntro}
					currentProjectDesc={this.state.currentProjectDesc}
					currentProjectUrl={this.state.currentProjectUrl}
					currentProjectGit={this.state.currentProjectGit}
					currentProjectGitUrl={this.state.currentProjectGitUrl}
					changePageFromProject={this.changePage}
					projectHeading={this.state.projectHeading}
					projectIntro={this.state.projectIntro}
					projectDesc={this.state.projectDesc}
					projectDetails={this.state.projectDetails}
					projectRow={this.state.projectRow}
					link={this.state.link}
					randomNumber={this.state.randomNumber}
					randomProject={this.randomProject}
					changeProjectName={this.changeProjectName}
				/>
			);
		} else if (currentPage === 'about') {
			display = (
				// ABOUT PAGE
				<About
					space={this.state.space}
					aboutList={this.state.aboutList}
					aboutHeading={this.state.aboutHeading}
					aboutPara={this.state.aboutPara}
					aboutPhone={this.state.aboutPhone}
					changeImageTheme={this.changeImageTheme}
					changeTheme={this.changeTheme}
					galleryFillIcon={this.state.galleryFillIcon}
					singleProjectDesc={this.state.singleProjectDesc}
				/>
			);
		}
		// RETURN
		return (
			// FRAGMENTS AND ANIMATION
			<React.Fragment>
				<div className='container-fluid'>
					<MDBAnimation type='fadeIn'>
						{/* NAV */}
						<Nav
							singleProjectName={this.state.singleProjectName}
							singleProjectDesc={this.state.singleProjectDesc}
							changePageFromNav={this.changePage}
							currentPage={this.state.currentPage}
							currentProjectName={this.state.currentProjectName}
							navGallery={this.state.navGallery}
							navAbout={this.state.navAbout}
							navProject={this.state.navProject}
							navGalleryActive={this.state.navGalleryActive}
							navAboutActive={this.state.navAboutActive}
							navProjectActive={this.state.navProjectActive}
							barColor={this.state.barColor}
							brand={this.state.brand}
							light={this.state.light}
						/>
					</MDBAnimation>
					{/* ANIMATED TYPE */}
					<Type type={this.state.type} thisType={this.state.thisType} />
					{/* <div className='typeWrap pad'>...</div> */}
					<React.Fragment>
						<MDBAnimation type='fadeIn'>{display}</MDBAnimation>
					</React.Fragment>
				</div>
				<React.Fragment>
					<MDBAnimation type='fadeIn'>{projectDisplay}</MDBAnimation>
				</React.Fragment>
				{/* FOOTER */}
				<Footer
					faIcon={this.state.faIcon}
					faIconSm={this.state.faIconSm}
					list={this.state.list}
					footerHeading={this.state.footerHeading}
					footerPara={this.state.footerPara}
					footerTemp={this.state.footerTemp}
					footerIcon={this.state.footerIcon}
					footerCopyright={this.state.footerCopyright}
				/>
				{/* SCROLL BUTTON */}
				<ScrollUpButton
					StopPosition={0}
					ShowAtPosition={200}
					EasingType='easeOutCubic'
					AnimationDuration={300}
					ContainerClassName='scrollUpIcon'
				/>
			</React.Fragment>
		);
	}
}

// EXPORT
export default App;
