import React, { Component } from 'react';
import Nav from './inc/Nav';
import Type from './inc/Type';
import Gallery from './inc/Gallery';
import Project from './inc/Project';
import About from './inc/About';
import Footer from './inc/Footer';
import projectData from './data/projects.json';
import ScrollUpButton from 'react-scroll-up-button';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faStarOfLife,
  faEnvelope,
  faUndoAlt,
  faChevronLeft,
  faChevronRight,
  faChevronCircleUp,
  faTh,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import './scss/main.scss';
library.add(
  fab,
  faStarOfLife,
  faEnvelope,
  faUndoAlt,
  faChevronLeft,
  faChevronRight,
  faChevronCircleUp,
  faTh,
  faMapMarkerAlt
);

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      projects: projectData,
      currentPage: 'gallery',
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
    };
    this.changePage = this.changePage.bind(this);
    this.changePageAndProject = this.changePageAndProject.bind(this);
  }

  changePage(value: any) {
    this.setState({
      currentPage: value
    });
  }

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
      currentProjectDesc: value['projectDesc']
    });
  }

  componentDidMount() {
    console.log('App loaded...');
  }

  render() {
    var allProjects = this.state['projects'];
    var currentPage = this.state.currentPage;
    let display;

    if (currentPage === 'gallery') {
      display = (
        <Gallery projectsFromApp={allProjects} changePageFromGallery={this.changePageAndProject} />
      );
    } else if (currentPage === 'project') {
      display = (
        <Project
          projectsFromApp={allProjects}
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
          changePageFromProject={this.changePage}
        />
      );
    } else if (currentPage === 'about') {
      display = <About />;
    }
    return (
      <React.Fragment>
        <div className='container-fluid'>
          <Nav changePageFromNav={this.changePage} />
          <Type />
          <React.Fragment>{display}</React.Fragment>
        </div>
        <Footer />
          <ScrollUpButton
            StopPosition={0}
            ShowAtPosition={200}
            EasingType='easeOutCubic'
            AnimationDuration={300}
            ContainerClassName="scrollUpIcon"
          />
      </React.Fragment>
    );
  }
}

export default App;
