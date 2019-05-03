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
  faFillDrip,
  faEnvelope,
  faChevronLeft,
  faChevronRight,
  faTh,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import './scss/main.scss';
library.add(fab, faFillDrip, faEnvelope, faChevronLeft, faChevronRight, faTh, faMapMarkerAlt);

var htmlBody = document.getElementById('bg');

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      theme: false,
      light: false,
      projects: projectData,
      currentPage: 'gallery',
      imgTheme: 'imgWrapDark col-xs-12 col-sm-6 col-md-4 col-lg-4',
      navGallery: 'navItemDark navItemActiveDark',
      navAbout: 'navItemDark',
      type: 'textWhite',
      space: 'space textGreyBg',
      brand: 'brandDark textSpotGrey',
      galleryFillIcon: 'galleryFillIconDark',
      singleProjectName: 'textWhite',
      faIcon: 'faIconDark',
      list: 'listDark footerListWrap',
      footerHeading: 'marBot textWhite',
      footerPara: 'pad marBotFooter textSpotGrey',
      footerTemp: 'footerTemp textWhite',
      footerIcon: 'footerIcon textWhite',
      footerCopyright: 'footerCopyright textWhite',
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
      currentProjectDesc: ''
    };
    this.changePage = this.changePage.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
    this.changeImageTheme = this.changeImageTheme.bind(this);
    this.changePageAndProject = this.changePageAndProject.bind(this);
  }

  changeTheme() {
    // LIGHT THEME
    if (this.state.light === false) {
      htmlBody.className = 'bgLight';
      this.changeImageTheme();
      this.setState({
        light: true,
        type: 'textGrey',
        space: 'space textWhiteBg',
        brand: 'brandLight textLightGrey',
        navGallery: 'navItemLight navItemActiveLight',
        navAbout: 'navItemLight',
        galleryFillIcon: 'galleryFillIconLight',
        singleProjectName: 'textLightGrey',
        faIcon: 'faIconLight',
        list: 'listLight',
        footerHeading: 'marBot textGrey',
        footerPara: 'pad marBotFooter textLightGrey',
        footerTemp: 'footerTemp textGrey',
        footerIcon: 'footerIcon textGrey',
        footerCopyright: 'footerCopyright textGrey'
      });
      // DARK THEME
    } else {
      htmlBody.className = 'bgDark';
      this.setState({
        light: false,
        type: 'textWhite',
        space: 'space textGreyBg',
        brand: 'brandDark textSpotGrey',
        navGallery: 'navItemDark navItemActiveDark',
        navAbout: 'navItemDark',
        galleryFillIcon: 'galleryFillIconDark',
        singleProjectName: 'textWhite',
        faIcon: 'faIconDark',
        list: 'listDark',
        footerHeading: 'marBot textWhite',
        footerPara: 'pad marBotFooter textSpotGrey',
        footerTemp: 'footerTemp textWhite',
        footerIcon: 'footerIcon textWhite',
        footerCopyright: 'footerCopyright textWhite'
      });
    }
  }

  changePage(value: any) {
    if (this.state.currentPage === 'gallery') {
      this.setState({
        navGallery: 'navItem',
        navAbout: 'navItem navItemActive'
      });
    } else if (this.state.currentPage === 'about') {
      this.setState({
        navGallery: 'navItem navItemActive',
        navAbout: 'navItem'
      });
    }
    this.setState({
      currentPage: value
    });
  }

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
    window.scrollTo(0, 0);
    console.log('App loaded...');
  }

  render() {
    var allProjects = this.state['projects'];
    var currentPage = this.state.currentPage;
    let display;

    if (currentPage === 'gallery') {
      display = (
        <Gallery
          projectsFromApp={allProjects}
          changePageFromGallery={this.changePageAndProject}
          changeImageTheme={this.changeImageTheme}
          changeTheme={this.changeTheme}
          imgTheme={this.state.imgTheme}
          galleryFillIcon={this.state.galleryFillIcon}
          singleProjectName={this.state.singleProjectName}
        />
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
      display = <About space={this.state.space} />;
    }
    return (
      <React.Fragment>
        <div className='container-fluid'>
          <Nav
            changePageFromNav={this.changePage}
            navGallery={this.state.navGallery}
            navAbout={this.state.navAbout}
            brand={this.state.brand}
          />
          <Type type={this.state.type} />
          <React.Fragment>{display}</React.Fragment>
        </div>
        <Footer
          faIcon={this.state.faIcon}
          list={this.state.list}
          footerHeading={this.state.footerHeading}
          footerPara={this.state.footerPara}
          footerTemp={this.state.footerTemp}
          footerIcon={this.state.footerIcon}
          footerCopyright={this.state.footerCopyright}
        />
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

export default App;
