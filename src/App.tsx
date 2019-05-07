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
var currentEverything: string;
var currentBranding: string;
var currentGraphic: string;
var currentUx: string;
var currentWeb: string;

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
      navProject: 'navItemDark',
      type: 'textWhite',
      thisType: 'textWhite',
      space: 'space textGreyBg',
      brand: 'brandDark',
      galleryFillIcon: 'galleryFillIconDark',
      singleProjectName: 'textWhite text700',
      faIcon: 'faIconDark',
      list: 'listDark footerListWrap',
      footerHeading: 'marBot textWhite',
      footerPara: 'pad marBotFooter textSpotGrey',
      footerTemp: 'footerTemp textWhite',
      footerIcon: 'footerIcon textWhite',
      footerCopyright: 'footerCopyright textYellow text700',
      everything: 'filterItemDark filterItemActiveDark text700',
      branding: 'filterItemDark',
      graphic: 'filterItemDark',
      ux: 'filterItemDark',
      web: 'filterItemDark',
      filter: 'everything',
      aboutHeading: 'marBot textWhite',
      aboutPara: 'textWhite',
      aboutPhone: 'textSpotGrey',
      projectHeading: 'marBot textWhite',
      projectIntro: 'textSpotGrey text300',
      projectDesc: 'textWhite',
      projectDetails: 'textWhite text700',
      link: 'textWhite',
      projectRow: 'projectRowDark',
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
    this.filter = this.filter.bind(this);
    this.filterReset = this.filterReset.bind(this);
    this.changePage = this.changePage.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
    this.changeImageTheme = this.changeImageTheme.bind(this);
    this.changePageAndProject = this.changePageAndProject.bind(this);
  }

  changeTheme() {
    // CHECK FILTER
    var currentFilter = this.state.filter;

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
      // LIGHT THEME
      htmlBody.className = 'bgLight';
      this.setState({
        light: true,
        type: 'textGrey',
        thisType: 'textGrey',
        space: 'space textWhiteBg',
        brand: 'brandLight',
        navGallery: 'navItemLight navItemActiveLight',
        navAbout: 'navItemLight',
        navProject: 'navItemLight',
        galleryFillIcon: 'galleryFillIconLight',
        singleProjectName: 'textLightGrey text700',
        faIcon: 'faIconLight',
        list: 'listLight',
        footerHeading: 'marBot textGrey',
        footerPara: 'pad marBotFooter textLightGrey',
        footerTemp: 'footerTemp textGrey',
        footerIcon: 'footerIcon textLightGrey',
        footerCopyright: 'footerCopyright textGreen text700',
        everything: currentEverything,
        branding: currentBranding,
        graphic: currentGraphic,
        ux: currentUx,
        web: currentWeb,
        aboutHeading: 'marBot textGrey',
        aboutPara: 'textGrey',
        aboutPhone: 'textLightGrey',
        projectHeading: 'marBot textGrey',
        projectIntro: 'textLightGrey text300',
        projectDesc: 'textGrey',
        projectDetails: 'textGrey text700',
        link: 'textGrey',
        projectRow: 'projectRowLight'
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
      // DARK THEME
      htmlBody.className = 'bgDark';
      this.setState({
        light: false,
        type: 'textWhite',
        thisType: 'textWhite',
        space: 'space textGreyBg',
        brand: 'brandDark',
        navGallery: 'navItemDark navItemActiveDark',
        navAbout: 'navItemDark',
        navProject: 'navItemDark',
        galleryFillIcon: 'galleryFillIconDark',
        singleProjectName: 'textWhite text700',
        faIcon: 'faIconDark',
        list: 'listDark',
        footerHeading: 'marBot textWhite',
        footerPara: 'pad marBotFooter textSpotGrey',
        footerTemp: 'footerTemp textWhite',
        footerIcon: 'footerIcon textWhite',
        footerCopyright: 'footerCopyright textYellow text700',
        everything: currentEverything,
        branding: currentBranding,
        graphic: currentGraphic,
        ux: currentUx,
        web: currentWeb,
        aboutHeading: 'marBot textWhite',
        aboutPara: 'textWhite',
        aboutPhone: 'textSpotGrey',
        projectHeading: 'marBot textWhite',
        projectIntro: 'textSpotGrey text300',
        projectDesc: 'textWhite',
        projectDetails: 'textWhite text700',
        link: 'textWhite',
        projectRow: 'projectRowDark'
      });
    }
  }

  filter(value: any) {
    var projects = projectData;
    var filter = value;
    var projectsFiltered = projects.filter(
      (project: { fields: { indexOf: (arg0: string) => number } }) => {
        return project.fields.indexOf(filter) >= 0;
      }
    );
    console.log('Filtered by: ' + value);
    // DARK THEME
    if (this.state.light === false) {
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
    this.setState({
      projects: projectsFiltered
    });
  }

  filterReset() {
    // DARK THEME
    if (this.state.light === false) {
      this.setState(
        {
          projects: projectData,
          everything: 'filterItemDark filterItemActiveDark text700',
          branding: 'filterItemDark',
          graphic: 'filterItemDark',
          ux: 'filterItemDark',
          web: 'filterItemDark',
          filter: 'everything'
        },
        () => {
          console.log('Reset filter');
        }
      );
      // lIGHT THEME
    } else if (this.state.light === true) {
      this.setState(
        {
          projects: projectData,
          everything: 'filterItemLight filterItemActiveLight text700',
          branding: 'filterItemLight',
          graphic: 'filterItemLight',
          ux: 'filterItemLight',
          web: 'filterItemLight',
          filter: 'everything'
        },
        () => {
          console.log('Reset filter');
        }
      );
    }
  }

  changePage(value: any) {
    // DARK THEME
    if (this.state.light === false) {
      if (value === 'gallery') {
        this.setState({
          navGallery: 'navItemDark navItemActiveDark',
          navAbout: 'navItemDark',
          navProject: 'navItemDark'
        });
      } else if (value === 'about') {
        this.setState({
          navGallery: 'navItemDark',
          navAbout: 'navItemDark navItemActiveDark',
          navProject: 'navItemDark'
        });
      } else if (value === 'project') {
        this.setState({
          navGallery: 'navItemDark',
          navAbout: 'navItemDark',
          navProject: 'navItemDark navItemActiveDark'
        });
      }
      // LIGHT THEME
    } else if (this.state.light === true) {
      if (value === 'gallery') {
        this.setState({
          navGallery: 'navItemLight navItemActiveLight',
          navAbout: 'navItemLight',
          navProject: 'navItemLight'
        });
      } else if (value === 'about') {
        this.setState({
          navGallery: 'navItemLight',
          navAbout: 'navItemLight navItemActiveLight',
          navProject: 'navItemLight'
        });
      } else if (value === 'project') {
        this.setState({
          navGallery: 'navItemLight',
          navAbout: 'navItemLight',
          navProject: 'navItemLight navItemActiveLight'
        });
      }
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
    var currentPage = this.state.currentPage;
    let projectDisplay;
    let display;

    if (currentPage === 'gallery') {
      display = (
        <Gallery
          projects={this.state.projects}
          changePageFromGallery={this.changePageAndProject}
          changeImageTheme={this.changeImageTheme}
          changeTheme={this.changeTheme}
          imgTheme={this.state.imgTheme}
          galleryFillIcon={this.state.galleryFillIcon}
          singleProjectName={this.state.singleProjectName}
          everything={this.state.everything}
          branding={this.state.branding}
          graphic={this.state.graphic}
          ux={this.state.ux}
          web={this.state.web}
          filter={this.filter}
          filterReset={this.filterReset}
        />
      );
    } else if (currentPage === 'project') {
      display = '';
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
          changePageFromProject={this.changePage}
          projectHeading={this.state.projectHeading}
          projectIntro={this.state.projectIntro}
          projectDesc={this.state.projectDesc}
          projectDetails={this.state.projectDetails}
          projectRow={this.state.projectRow}
          link={this.state.link}
          
        />
      );
    } else if (currentPage === 'about') {
      display = (
        <About
          space={this.state.space}
          aboutHeading={this.state.aboutHeading}
          aboutPara={this.state.aboutPara}
          aboutPhone={this.state.aboutPhone}
        />
      );
    }
    return (
      <React.Fragment>
        <div className='container-fluid'>
          <Nav
            changePageFromNav={this.changePage}
            navGallery={this.state.navGallery}
            navAbout={this.state.navAbout}
            navProject={this.state.navProject}
            brand={this.state.brand}
          />
          <Type type={this.state.type} thisType={this.state.thisType} />
          <React.Fragment>{display}</React.Fragment>
        </div>
        <React.Fragment>{projectDisplay}</React.Fragment>
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
