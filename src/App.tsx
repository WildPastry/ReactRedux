// imports
import React from 'react';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from './redux/reducers/rootReducer';
import Nav from './sections/Nav';
import Type from './sections/Type';
import Gallery from './sections/Gallery';
import Project from './sections/Project';
import About from './sections/About';
import Footer from './sections/Footer';
import Error from './components/Error';
import AppLoading from './components/AppLoading';
import ScrollUpButton from 'react-scroll-up-button';
import { MDBAnimation } from 'mdbreact';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
	faEnvelope,
	faChevronLeft,
	faChevronRight,
	faTh,
	faMapMarkerAlt,
	faImage
} from '@fortawesome/free-solid-svg-icons';
import './scss/main.scss';
library.add(
	fab,
	faImage,
	faEnvelope,
	faChevronLeft,
	faChevronRight,
	faTh,
	faMapMarkerAlt
);

// App
const App: React.FC = () => {
	// scroll to top on page load
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// useSelectors for page data / app theme / navigation
	const pageData = useSelector((state: RootState) => {
		return state.loadPage;
	});

	const appTheme = useSelector((state: RootState) => {
		return state.setTheme.appTheme;
	});

	const currentSection = useSelector((state: RootState) => {
		return state.setNav.currentSection;
	});

	// add background to body
	document.getElementById('bg').className = 'bg' + appTheme;

	// showLoader
	const showLoader = () => {
		return <AppLoading />;
	};

	// errorContainer
	const errorContainer = () => {
		return <Error />;
	};

	// logic for rendering sections
	let renderSection: JSX.Element;

	if (currentSection === 'GALLERY') {
		renderSection = <Gallery />;
	} else if (currentSection === 'PROJECT') {
		renderSection = <Project />;
	} else if (currentSection === 'ABOUT') {
		renderSection = <About />;
	}

	// renderApp
	const renderApp = (pageData: any) => {
		// show error container if there is one
		// otherwise display the app
		return pageData.isError ? (
			errorContainer()
		) : (
			<React.Fragment>
				<Container fluid>
					<Nav />
					{/* <Type /> */}
					<MDBAnimation type='fadeIn'>{renderSection}</MDBAnimation>
				</Container>
				<Footer />
				<ScrollUpButton
					StopPosition={0}
					ShowAtPosition={200}
					EasingType='easeOutCubic'
					AnimationDuration={300}
					ContainerClassName='scrollUpIcon'
				/>
			</React.Fragment>
		);
	};
	// wait for page to load before displaying
	return pageData.isLoading ? showLoader() : renderApp(pageData);
};

// EXPORT App
App.displayName = 'App';
export default App;

// class App extends Component<any, any> {
// 	constructor(props: any) {
// 		super(props);
// 		this.state = {
// 			theme: false,
// 			light: false,
// 			randomNumber: [],
// 			projects: projectData,
// 			currentPage: 'gallery',
// 			imgTheme: 'imgWrapDark col-xs-12 col-sm-6 col-md-4 col-lg-4',
// 			navGallery: 'navItemDark navItemActiveDark',
// 			navAbout: 'navItemDark',
// 			navProject: 'fakeNavItemDark',
// 			navGalleryActive: 'navItemDarkCollapse navItemActiveDarkCollapse menuActiveItem',
// 			navAboutActive: 'navItemDarkCollapse menuActiveItem',
// 			navProjectActive: 'fakeNavItemDarkCollapse menuActiveItem',
// 			type: 'textWhite',
// 			thisType: 'textWhite textHide',
// 			space: 'space textGreyBg',
// 			brand: 'brandDark',
// 			galleryFillIcon: 'galleryFillIconDark',
// 			singleProjectName: 'textWhite text700',
// 			singleProjectDesc: 'textSpotGrey text400',
// 			faIcon: 'faIconDark',
// 			list: 'listDark',
// 			aboutList: 'aboutListDark aboutListWrap',
// 			footerHeading: 'marBot textWhite',
// 			footerPara: 'pad marBotFooter textSpotGrey',
// 			footerTemp: 'footerTemp textWhite',
// 			footerIcon: 'footerIcon textWhite',
// 			footerCopyright: 'footerCopyright textYellow text400 responsiveCopyRight',
// 			loadMore: 'loadMoreDark',
// 			filter: 'everything',
// 			everything: 'filterItemDark filterItemActiveDark text700',
// 			branding: 'filterItemDark',
// 			graphic: 'filterItemDark',
// 			ux: 'filterItemDark',
// 			web: 'filterItemDark',
// 			aboutHeading: 'marBot textWhite',
// 			aboutPara: 'textWhite',
// 			aboutPhone: 'textSpotGrey',
// 			projectHeading: 'marBot textWhite',
// 			projectIntro: 'textSpotGrey text300',
// 			projectDesc: 'textWhite',
// 			projectDetails: 'textWhite text700',
// 			projectRow: 'projectRowDark',
// 			barColor: 'textWhite',
// 			link: 'textPeach projectsLink',
// 			currentProject: '',
// 			currentProjectName: '',
// 			currentProjectFields: [],
// 			currentProjectClient: '',
// 			currentProjectTimeline: '',
// 			currentProjectWebsite: '',
// 			currentProjectThumb: '',
// 			currentProjectImages: [],
// 			currentProjectIcons: [],
// 			currentProjectIntro: '',
// 			currentProjectDesc: '',
// 			currentProjectUrl: '',
// 			currentProjectGit: '',
// 			currentProjectGitUrl: ''
// 		};
// 		this.filter = this.filter.bind(this);
// 		this.filterReset = this.filterReset.bind(this);
// 		this.changePage = this.changePage.bind(this);
// 		this.changeTheme = this.changeTheme.bind(this);
// 		this.changeImageTheme = this.changeImageTheme.bind(this);
// 		this.changePageAndProject = this.changePageAndProject.bind(this);
// 		this.changeProjectName = this.changeProjectName.bind(this);
// 		this.randomProject = this.randomProject.bind(this);
// 	}

// 	randomProject() {
// 		randomNumber = [];
// 		while (randomNumber.length < 3) {
// 			var r = Math.floor(Math.random() * 12);
// 			if (randomNumber.indexOf(r) === -1) {
// 				randomNumber.push(r);
// 			}
// 		}
// 		this.setState({
// 			randomNumber: randomNumber
// 		});
// 	}

// 	changeTheme() {
// 		var currentFilter = this.state.filter;
// 		var currentPage = this.state.currentPage;
// 		var currentNavGallery,
// 			currentNavAbout,
// 			currentNavProject,
// 			currentNavGalleryActive,
// 			currentNavAboutActive,
// 			currentNavProjectActive;

// 		if (this.state.light === false) {
// 			currentEverything = 'filterItemLight text700';
// 			currentBranding = 'filterItemLight';
// 			currentGraphic = 'filterItemLight';
// 			currentUx = 'filterItemLight';
// 			currentWeb = 'filterItemLight';
// 			if (currentFilter === 'everything') {
// 				currentEverything = 'filterItemLight filterItemActiveLight text700';
// 			} else if (currentFilter === 'branding') {
// 				currentBranding = 'filterItemLight filterItemActiveLight';
// 			} else if (currentFilter === 'graphic') {
// 				currentGraphic = 'filterItemLight filterItemActiveLight';
// 			} else if (currentFilter === 'ux') {
// 				currentUx = 'filterItemLight filterItemActiveLight';
// 			} else if (currentFilter === 'web') {
// 				currentWeb = 'filterItemLight filterItemActiveLight';
// 			}
// 			if (currentPage === 'gallery') {
// 				currentNavGallery = 'navItemLight navItemActiveLight';
// 				currentNavAbout = 'navItemLight';
// 				currentNavProject = 'fakeNavItemLight';
// 				currentNavGalleryActive =
// 					'navItemLightCollapse navItemActiveLightCollapse menuActiveItem';
// 				currentNavAboutActive = 'navItemLightCollapse menuActiveItem';
// 				currentNavProjectActive = 'fakeNavItemLightCollapse menuActiveItem';
// 			} else if (currentPage === 'about') {
// 				currentNavGallery = 'navItemLight';
// 				currentNavAbout = 'navItemLight navItemActiveLight';
// 				currentNavProject = 'fakeNavItemLight';
// 				currentNavGalleryActive = 'navItemLightCollapse menuActiveItem';
// 				currentNavAboutActive =
// 					'navItemLightCollapse menuActiveItem navItemActiveLightCollapse';
// 				currentNavProjectActive = 'fakeNavItemLightCollapse menuActiveItem';
// 			} else if (currentPage === 'project') {
// 				currentNavGallery = 'navItemLight';
// 				currentNavAbout = 'navItemLight';
// 				currentNavProject = 'fakeNavItemLight navItemActiveLight';
// 				currentNavGalleryActive = 'navItemLightCollapse menuActiveItem';
// 				currentNavAboutActive = 'navItemLightCollapse menuActiveItem';
// 				currentNavProjectActive =
// 					'fakeNavItemLightCollapse menuActiveItem fakeNavItemActiveLightCollapse';
// 			}
// 			htmlBody.className = 'bgLight';
// 			this.setState({
// 				light: true,
// 				navGallery: currentNavGallery,
// 				navAbout: currentNavAbout,
// 				navProject: currentNavProject,
// 				navGalleryActive: currentNavGalleryActive,
// 				navAboutActive: currentNavAboutActive,
// 				navProjectActive: currentNavProjectActive,
// 				type: 'textGrey',
// 				thisType: 'textGrey textHide',
// 				space: 'space textWhiteBg',
// 				brand: 'brandLight',
// 				galleryFillIcon: 'galleryFillIconLight',
// 				singleProjectName: 'textLightGrey text700',
// 				singleProjectDesc: 'textGrey text400',
// 				faIcon: 'faIconLight',
// 				faIconSm: 'faIconSmLight',
// 				list: 'listLight',
// 				aboutList: 'aboutListLight aboutListWrap',
// 				footerHeading: 'marBot textGrey',
// 				footerPara: 'pad marBotFooter textLightGrey',
// 				footerTemp: 'footerTemp textGrey',
// 				footerIcon: 'footerIcon textLightGrey',
// 				footerCopyright: 'footerCopyright textBlue text400 responsiveCopyRight',
// 				loadMore: 'loadMoreLight',
// 				everything: currentEverything,
// 				branding: currentBranding,
// 				graphic: currentGraphic,
// 				ux: currentUx,
// 				web: currentWeb,
// 				aboutHeading: 'marBot textGrey',
// 				aboutPara: 'textGrey',
// 				aboutPhone: 'textLightGrey',
// 				projectHeading: 'marBot textGrey',
// 				projectIntro: 'textLightGrey text300',
// 				projectDesc: 'textGrey',
// 				projectDetails: 'textGrey text700',
// 				projectRow: 'projectRowLight',
// 				barColor: 'textGrey'
// 			});
// 		} else {
// 			currentEverything = 'filterItemDark text700';
// 			currentBranding = 'filterItemDark';
// 			currentGraphic = 'filterItemDark';
// 			currentUx = 'filterItemDark';
// 			currentWeb = 'filterItemDark';
// 			if (currentFilter === 'everything') {
// 				currentEverything = 'filterItemDark filterItemActiveDark text700';
// 			} else if (currentFilter === 'branding') {
// 				currentBranding = 'filterItemDark filterItemActiveDark';
// 			} else if (currentFilter === 'graphic') {
// 				currentGraphic = 'filterItemDark filterItemActiveDark';
// 			} else if (currentFilter === 'ux') {
// 				currentUx = 'filterItemDark filterItemActiveDark';
// 			} else if (currentFilter === 'web') {
// 				currentWeb = 'filterItemDark filterItemActiveDark';
// 			}
// 			if (currentPage === 'gallery') {
// 				currentNavGallery = 'navItemDark navItemActiveDark';
// 				currentNavAbout = 'navItemDark';
// 				currentNavProject = 'fakeNavItemDark';
// 				currentNavGalleryActive =
// 					'navItemDarkCollapse navItemActiveDarkCollapse menuActiveItem';
// 				currentNavAboutActive = 'navItemDarkCollapse menuActiveItem';
// 				currentNavProjectActive = 'fakeNavItemDarkCollapse menuActiveItem';
// 			} else if (currentPage === 'about') {
// 				currentNavGallery = 'navItemDark';
// 				currentNavAbout = 'navItemDark navItemActiveDark';
// 				currentNavProject = 'fakeNavItemDark';
// 				currentNavGalleryActive = 'navItemDarkCollapse menuActiveItem';
// 				currentNavAboutActive =
// 					'navItemDarkCollapse menuActiveItem navItemActiveDarkCollapse';
// 				currentNavProjectActive = 'fakeNavItemDarkCollapse menuActiveItem';
// 			} else if (currentPage === 'project') {
// 				currentNavGallery = 'navItemDark';
// 				currentNavAbout = 'navItemDark';
// 				currentNavProject = 'fakeNavItemDark fakeNavItemActiveDark';
// 				currentNavGalleryActive = 'navItemDarkCollapse menuActiveItem';
// 				currentNavAboutActive = 'navItemDarkCollapse menuActiveItem';
// 				currentNavProjectActive =
// 					'fakeNavItemDarkCollapse menuActiveItem fakeNavItemActiveDarkCollapse';
// 			}
// 			htmlBody.className = 'bgDark';
// 			this.setState({
// 				light: false,
// 				navGallery: currentNavGallery,
// 				navAbout: currentNavAbout,
// 				navProject: currentNavProject,
// 				navGalleryActive: currentNavGalleryActive,
// 				navAboutActive: currentNavAboutActive,
// 				navProjectActive: currentNavProjectActive,
// 				type: 'textWhite',
// 				thisType: 'textWhite textHide',
// 				space: 'space textGreyBg',
// 				brand: 'brandDark',
// 				galleryFillIcon: 'galleryFillIconDark',
// 				singleProjectName: 'textWhite text700',
// 				singleProjectDesc: 'textSpotGrey text400',
// 				faIcon: 'faIconDark',
// 				faIconSm: 'faIconSmDark',
// 				list: 'listDark',
// 				aboutList: 'aboutListDark aboutListWrap',
// 				footerHeading: 'marBot textWhite',
// 				footerPara: 'pad marBotFooter textSpotGrey',
// 				footerTemp: 'footerTemp textWhite',
// 				footerIcon: 'footerIcon textWhite',
// 				footerCopyright: 'footerCopyright textYellow text400 responsiveCopyRight',
// 				loadMore: 'loadMoreDark',
// 				everything: currentEverything,
// 				branding: currentBranding,
// 				graphic: currentGraphic,
// 				ux: currentUx,
// 				web: currentWeb,
// 				aboutHeading: 'marBot textWhite',
// 				aboutPara: 'textWhite',
// 				aboutPhone: 'textSpotGrey',
// 				projectHeading: 'marBot textWhite',
// 				projectIntro: 'textSpotGrey text300',
// 				projectDesc: 'textWhite',
// 				projectDetails: 'textWhite text700',
// 				projectRow: 'projectRowDark',
// 				barColor: 'textWhite'
// 			});
// 		}
// 	}

// 	sortData(data: any[]) {
// 		data = [].concat(data).sort((a, b) => (a.id > b.id ? 1 : -1));
// 		this.setState({
// 			projects: data
// 		});
// 	}

// 	filter(value: string) {
// 		var projects = projectData;
// 		var filter = value;
// 		var projectsFiltered = projects.filter(
// 			(project: { fields: { indexOf: (arg0: string) => number } }) => {
// 				return project.fields.indexOf(filter) >= 0;
// 			}
// 		);
// 		if (this.state.light === false) {
// 			if (value === 'Branding') {
// 				this.setState({
// 					everything: 'filterItemDark text700',
// 					branding: 'filterItemDark filterItemActiveDark',
// 					graphic: 'filterItemDark',
// 					ux: 'filterItemDark',
// 					web: 'filterItemDark',
// 					filter: 'branding'
// 				});
// 			} else if (value === 'Graphic') {
// 				this.setState({
// 					everything: 'filterItemDark text700',
// 					branding: 'filterItemDark',
// 					graphic: 'filterItemDark filterItemActiveDark',
// 					ux: 'filterItemDark',
// 					web: 'filterItemDark',
// 					filter: 'graphic'
// 				});
// 			} else if (value === 'UX') {
// 				this.setState({
// 					everything: 'filterItemDark text700',
// 					branding: 'filterItemDark',
// 					graphic: 'filterItemDark',
// 					ux: 'filterItemDark filterItemActiveDark',
// 					web: 'filterItemDark',
// 					filter: 'ux'
// 				});
// 			} else if (value === 'Web') {
// 				this.setState({
// 					everything: 'filterItemDark text700',
// 					branding: 'filterItemDark',
// 					graphic: 'filterItemDark',
// 					ux: 'filterItemDark',
// 					web: 'filterItemDark filterItemActiveDark',
// 					filter: 'web'
// 				});
// 			}
// 		} else if (this.state.light === true) {
// 			if (value === 'Branding') {
// 				this.setState({
// 					everything: 'filterItemLight text700',
// 					branding: 'filterItemLight filterItemActiveLight',
// 					graphic: 'filterItemLight',
// 					ux: 'filterItemLight',
// 					web: 'filterItemLight',
// 					filter: 'branding'
// 				});
// 			} else if (value === 'Graphic') {
// 				this.setState({
// 					everything: 'filterItemLight text700',
// 					branding: 'filterItemLight',
// 					graphic: 'filterItemLight filterItemActiveLight',
// 					ux: 'filterItemLight',
// 					web: 'filterItemLight',
// 					filter: 'graphic'
// 				});
// 			} else if (value === 'UX') {
// 				this.setState({
// 					everything: 'filterItemLight text700',
// 					branding: 'filterItemLight',
// 					graphic: 'filterItemLight',
// 					ux: 'filterItemLight filterItemActiveLight',
// 					web: 'filterItemLight',
// 					filter: 'ux'
// 				});
// 			} else if (value === 'Web') {
// 				this.setState({
// 					everything: 'filterItemLight text700',
// 					branding: 'filterItemLight',
// 					graphic: 'filterItemLight',
// 					ux: 'filterItemLight',
// 					web: 'filterItemLight filterItemActiveLight',
// 					filter: 'web'
// 				});
// 			}
// 		}
// 		this.sortData(projectsFiltered)
// 	}

// 	filterReset() {
// 		if (this.state.light === false) {
// 			this.setState({
// 				everything: 'filterItemDark filterItemActiveDark text700',
// 				branding: 'filterItemDark',
// 				graphic: 'filterItemDark',
// 				ux: 'filterItemDark',
// 				web: 'filterItemDark',
// 				filter: 'everything'
// 			});
// 		} else if (this.state.light === true) {
// 			this.setState({
// 				everything: 'filterItemLight filterItemActiveLight text700',
// 				branding: 'filterItemLight',
// 				graphic: 'filterItemLight',
// 				ux: 'filterItemLight',
// 				web: 'filterItemLight',
// 				filter: 'everything'
// 			});
// 		}
// 		this.sortData(projectData)
// 	}

// 	changePage(value: string) {
// 		if (this.state.light === false) {
// 			if (value === 'gallery') {
// 				this.setState({
// 					currentProjectName: '',
// 					navGallery: 'navItemDark navItemActiveDark',
// 					navAbout: 'navItemDark',
// 					navProject: 'fakeNavItemDark',
// 					navGalleryActive:
// 						'navItemDarkCollapse menuActiveItem navItemActiveDarkCollapse',
// 					navAboutActive: 'navItemDarkCollapse menuActiveItem',
// 					navProjectActive: 'fakeNavItemDarkCollapse menuActiveItem'
// 				});
// 			} else if (value === 'about') {
// 				this.setState({
// 					currentProjectName: '',
// 					navGallery: 'navItemDark',
// 					navAbout: 'navItemDark navItemActiveDark',
// 					navProject: 'fakeNavItemDark',
// 					navGalleryActive: 'navItemDarkCollapse menuActiveItem',
// 					navAboutActive: 'navItemDarkCollapse menuActiveItem navItemActiveDarkCollapse',
// 					navProjectActive: 'fakeNavItemDarkCollapse menuActiveItem'
// 				});
// 			} else if (value === 'project') {
// 				this.setState({
// 					navGallery: 'navItemDark',
// 					navAbout: 'navItemDark',
// 					navProject: 'fakeNavItemDark fakeNavItemActiveDark',
// 					navGalleryActive: 'navItemDarkCollapse menuActiveItem',
// 					navAboutActive: 'navItemDarkCollapse menuActiveItem',
// 					navProjectActive:
// 						'fakeNavItemDarkCollapse fakeNavItemActiveDarkCollapse menuActiveItem'
// 				});
// 			}
// 		} else if (this.state.light === true) {
// 			if (value === 'gallery') {
// 				this.setState({
// 					currentProjectName: '',
// 					navGallery: 'navItemLight navItemActiveLight',
// 					navAbout: 'navItemLight',
// 					navProject: 'fakeNavItemLight',
// 					navGalleryActive:
// 						'navItemLightCollapse menuActiveItem navItemActiveLightCollapse',
// 					navAboutActive: 'navItemLightCollapse menuActiveItem',
// 					navProjectActive: 'fakeNavItemLightCollapse menuActiveItem'
// 				});
// 			} else if (value === 'about') {
// 				this.setState({
// 					currentProjectName: '',
// 					navGallery: 'navItemLight',
// 					navAbout: 'navItemLight navItemActiveLight',
// 					navProject: 'fakeNavItemLight',
// 					navGalleryActive: 'navItemLightCollapse menuActiveItem',
// 					navAboutActive:
// 						'navItemLightCollapse menuActiveItem navItemActiveLightCollapse',
// 					navProjectActive: 'fakeNavItemLightCollapse menuActiveItem'
// 				});
// 			} else if (value === 'project') {
// 				this.setState({
// 					navGallery: 'navItemLight',
// 					navAbout: 'navItemLight',
// 					navProject: 'fakeNavItemLight fakeNavItemActiveLight',
// 					navGalleryActive: 'navItemLightCollapse menuActiveItem',
// 					navAboutActive: 'navItemLightCollapse menuActiveItem',
// 					navProjectActive:
// 						'fakeNavItemLightCollapse fakeNavItemActiveLightCollapse menuActiveItem'
// 				});
// 			}
// 		}
// 		this.setState({
// 			currentPage: value
// 		});
// 	}

// 	changeProjectName(value: string) {
// 		this.setState({
// 			currentProjectName: value
// 		});
// 	}

// 	changeImageTheme() {
// 		if (this.state.theme === false) {
// 			this.setState({
// 				theme: true,
// 				imgTheme: 'imgWrapLight col-xs-12 col-sm-6 col-md-4 col-lg-4'
// 			});
// 		} else {
// 			this.setState({
// 				theme: false,
// 				imgTheme: 'imgWrapDark col-xs-12 col-sm-6 col-md-4 col-lg-4'
// 			});
// 		}
// 	}

// 	changePageAndProject(value: any[]) {
// 		this.setState({
// 			currentPage: value['page'],
// 			currentProject: value['project'],
// 			currentProjectName: value['projectName'],
// 			currentProjectFields: value['projectFields'],
// 			currentProjectClient: value['projectClient'],
// 			currentProjectTimeline: value['projectTimeline'],
// 			currentProjectWebsite: value['projectWebsite'],
// 			currentProjectThumb: value['projectThumb'],
// 			currentProjectImages: value['projectImages'],
// 			currentProjectIcons: value['projectIcons'],
// 			currentProjectIntro: value['projectIntro'],
// 			currentProjectDesc: value['projectDesc'],
// 			currentProjectUrl: value['projectUrl'],
// 			currentProjectGit: value['projectGit'],
// 			currentProjectGitUrl: value['projectGitUrl']
// 		});
// 		this.changePage(value['page']);
// 	}

// 	componentDidMount() {
// 		this.sortData(projectData);
// 		this.randomProject();
// 		window.scrollTo(0, 0);
// 	}

// 	render() {

// 		var currentPage = this.state.currentPage;
// 		let projectDisplay;
// 		let display;

// 		if (currentPage === 'gallery') {
// 			display = (
// 				<Gallery
// 					sortData={this.sortData}
// 					projects={this.state.projects}
// 					changePageFromGallery={this.changePageAndProject}
// 					changeImageTheme={this.changeImageTheme}
// 					changeTheme={this.changeTheme}
// 					imgTheme={this.state.imgTheme}
// 					galleryFillIcon={this.state.galleryFillIcon}
// 					singleProjectName={this.state.singleProjectName}
// 					singleProjectDesc={this.state.singleProjectDesc}
// 					everything={this.state.everything}
// 					branding={this.state.branding}
// 					graphic={this.state.graphic}
// 					ux={this.state.ux}
// 					web={this.state.web}
// 					filter={this.filter}
// 					filterReset={this.filterReset}
// 					randomProject={this.randomProject}
// 					loadMore={this.state.loadMore}
// 				/>
// 			);
// 		} else if (currentPage === 'project') {
// 			display = '';
// 			// PROJECT PAGE
// 			projectDisplay = (
// 				<Project
// 					projects={this.state.projects}
// 					currentProject={this.state.currentProject}
// 					currentProjectName={this.state.currentProjectName}
// 					currentProjectFields={this.state.currentProjectFields}
// 					currentProjectClient={this.state.currentProjectClient}
// 					currentProjectTimeline={this.state.currentProjectTimeline}
// 					currentProjectWebsite={this.state.currentProjectWebsite}
// 					currentProjectThumb={this.state.currentProjectThumb}
// 					currentProjectImages={this.state.currentProjectImages}
// 					currentProjectIcons={this.state.currentProjectIcons}
// 					currentProjectIntro={this.state.currentProjectIntro}
// 					currentProjectDesc={this.state.currentProjectDesc}
// 					currentProjectUrl={this.state.currentProjectUrl}
// 					currentProjectGit={this.state.currentProjectGit}
// 					currentProjectGitUrl={this.state.currentProjectGitUrl}
// 					changePageFromProject={this.changePage}
// 					projectHeading={this.state.projectHeading}
// 					projectIntro={this.state.projectIntro}
// 					projectDesc={this.state.projectDesc}
// 					projectDetails={this.state.projectDetails}
// 					projectRow={this.state.projectRow}
// 					link={this.state.link}
// 					randomNumber={this.state.randomNumber}
// 					randomProject={this.randomProject}
// 					changeProjectName={this.changeProjectName}
// 				/>
// 			);
// 		} else if (currentPage === 'about') {
// 			display = (
// 				<About
// 					space={this.state.space}
// 					aboutList={this.state.aboutList}
// 					aboutHeading={this.state.aboutHeading}
// 					aboutPara={this.state.aboutPara}
// 					aboutPhone={this.state.aboutPhone}
// 					changeImageTheme={this.changeImageTheme}
// 					changeTheme={this.changeTheme}
// 					galleryFillIcon={this.state.galleryFillIcon}
// 					singleProjectDesc={this.state.singleProjectDesc}
// 				/>
// 			);
// 		}
// 		return (
// 			<React.Fragment>
// 				<div className='container-fluid'>
// 					<MDBAnimation type='fadeIn'>
// 						<Nav
// 							singleProjectName={this.state.singleProjectName}
// 							singleProjectDesc={this.state.singleProjectDesc}
// 							changePageFromNav={this.changePage}
// 							currentPage={this.state.currentPage}
// 							currentProjectName={this.state.currentProjectName}
// 							navGallery={this.state.navGallery}
// 							navAbout={this.state.navAbout}
// 							navProject={this.state.navProject}
// 							navGalleryActive={this.state.navGalleryActive}
// 							navAboutActive={this.state.navAboutActive}
// 							navProjectActive={this.state.navProjectActive}
// 							barColor={this.state.barColor}
// 							brand={this.state.brand}
// 							light={this.state.light}
// 						/>
// 					</MDBAnimation>
// 					<Type type={this.state.type} thisType={this.state.thisType} />
// 					<React.Fragment>
// 						<MDBAnimation type='fadeIn'>{display}</MDBAnimation>
// 					</React.Fragment>
// 				</div>
// 				<React.Fragment>
// 					<MDBAnimation type='fadeIn'>{projectDisplay}</MDBAnimation>
// 				</React.Fragment>
// 				<Footerw
// 					faIcon={this.state.faIcon}
// 					faIconSm={this.state.faIconSm}
// 					list={this.state.list}
// 					footerHeading={this.state.footerHeading}
// 					footerPara={this.state.footerPara}
// 					footerTemp={this.state.footerTemp}
// 					footerIcon={this.state.footerIcon}
// 					footerCopyright={this.state.footerCopyright}
// 				/>
// 				<ScrollUpButton
// 					StopPosition={0}
// 					ShowAtPosition={200}
// 					EasingType='easeOutCubic'
// 					AnimationDuration={300}
// 					ContainerClassName='scrollUpIcon'
// 				/>
// 			</React.Fragment>
// 		);
// 	}
// }

// export default App;
