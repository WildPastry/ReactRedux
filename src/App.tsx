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
	let renderProject: JSX.Element;

	if (currentSection === 'GALLERY') {
		renderSection = <Gallery />;
	} else if (currentSection === 'PROJECT') {
		renderProject = <Project />;
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
					<MDBAnimation type='fadeIn'>
						{renderSection}
						</MDBAnimation>
				</Container>
				<MDBAnimation type='fadeIn'>
					{renderProject}
					</MDBAnimation>
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
