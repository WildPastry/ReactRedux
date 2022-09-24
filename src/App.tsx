import React, { useEffect } from 'react';
import {
  faChevronLeft,
  faChevronRight,
  faEnvelope,
  faImage,
  faMapMarkerAlt,
  faTh
} from '@fortawesome/free-solid-svg-icons';
import About from './sections/About';
import AppLoading from './components/AppLoading';
import { Container } from 'react-bootstrap';
import Error from './components/Error';
import Footer from './sections/Footer';
import Gallery from './sections/Gallery';
import { Loading } from './types';
import { MDBAnimation } from 'mdbreact';
import Nav from './sections/Nav';
import Project from './sections/Project';
import { RootState } from './redux/reducers/rootReducer';
import ScrollUpButton from 'react-scroll-up-button';
import Type from './sections/Type';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useSelector } from 'react-redux';
library.add(
  fab,
  faImage,
  faEnvelope,
  faChevronLeft,
  faChevronRight,
  faTh,
  faMapMarkerAlt
);

const App: React.FC = () => {
  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // UseSelectors for page data / app theme / navigation
  const pageData = useSelector((state: RootState) => {
    return state.loadPage;
  });

  const appTheme = useSelector((state: RootState) => {
    return state.setTheme.appTheme;
  });

  const currentSection = useSelector((state: RootState) => {
    return state.setNav.currentSection;
  });

  // Add background to body
  document.getElementById('bg').className = `bg${appTheme}`;

  // Error container
  const errorContainer = () => {
    return <Error/>;
  };

  // Logic for rendering sections
  let renderSection: JSX.Element;
  let renderProject: JSX.Element;

  if (currentSection === 'GALLERY') {
    renderSection = <Gallery/>;
  } else if (currentSection === 'PROJECT') {
    renderProject = <Project/>;
  } else if (currentSection === 'ABOUT') {
    renderSection = <About/>;
  }

  const renderApp = (pageData: Loading) => {
    return (
      <main aria-label="Main Section">
        {pageData.isLoading ? <AppLoading /> : null}
        <Nav/>
        <Container fluid className="sectionWrap">
          <Type/>
          <MDBAnimation type="fadeIn">{renderSection}</MDBAnimation>
        </Container>
        <MDBAnimation type="fadeIn">{renderProject}</MDBAnimation>
        <Footer/>
        <ScrollUpButton
          aria-label="Scroll Up Button"
          StopPosition={0}
          ShowAtPosition={200}
          EasingType="easeOutCubic"
          AnimationDuration={300}
          ContainerClassName={`scrollUpIcon${appTheme}`}
        />
      </main>
    );
  };

  // Logic for showing error container
  return pageData.isError ? errorContainer() : renderApp(pageData);
};

App.displayName = 'App';
export default App;
