import React, { Component } from 'react';
import Nav from './inc/Nav';
import Type from './inc/Type';
import Gallery from './inc/Gallery';
import Project from './inc/Project';
import About from './inc/About';
import Footer from './inc/Footer';
import projectData from './data/projects.json';
import ScrollUpButton from 'react-scroll-up-button';
import { MDBAnimation } from 'mdbreact';
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

var randomNumber: any[] | number[] | (string | number)[];

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
      randomNumber: [],
      projects: projectData,
      currentPage: 'gallery',
      imgTheme: 'imgWrapDark col-xs-12 col-sm-6 col-md-4 col-lg-4',
      navGallery: 'navItemDark navItemActiveDark',
      navAbout: 'navItemDark',
      navGalleryActive: 'navItemDarkCollapse navItemActiveDarkCollapse menuActiveItem',
      navAboutActive: 'navItemDarkCollapse menuActiveItem',
      type: 'textWhite',
      thisType: 'textWhite textHide',
      space: 'space textGreyBg',
      brand: 'brandDark',
      galleryFillIcon: 'galleryFillIconDark',
      singleProjectName: 'textWhite text700',
      singleProjectDesc: 'textSpotGrey text400',
      faIcon: 'faIconDark',
      list: 'listDark footerListWrap',
      aboutList: 'aboutListDark aboutListWrap',
      footerHeading: 'marBot textWhite',
      footerPara: 'pad marBotFooter textSpotGrey',
      footerTemp: 'footerTemp textWhite',
      footerIcon: 'footerIcon textWhite',
      footerCopyright: 'footerCopyright textYellow text700 responsiveCopyRight',
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
      link: 'textPeach projectsLink',
      projectRow: 'projectRowDark',
      barColor: 'textWhite',
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
      currentProjectUrl: ''
    };
    this.filter = this.filter.bind(this);
    this.filterReset = this.filterReset.bind(this);
    this.changePage = this.changePage.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
    this.changeImageTheme = this.changeImageTheme.bind(this);
    this.changePageAndProject = this.changePageAndProject.bind(this);
    this.randomProject = this.randomProject.bind(this);
  }

  componentWillMount() {
    this.randomProject();
  }

  randomProject() {
    randomNumber = [];
    while (randomNumber.length < 3) {
      var r = Math.floor(Math.random() * 12);
      if (randomNumber.indexOf(r) === -1) {
        randomNumber.push(r);
      }
    }
    this.setState(
      {
        randomNumber: randomNumber
      }
    );
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
        thisType: 'textGrey textHide',
        space: 'space textWhiteBg',
        brand: 'brandLight',
        navGallery: 'navItemLight navItemActiveLight',
        navAbout: 'navItemLight',
        navGalleryActive: 'navItemLightCollapse navItemActiveLightCollapse menuActiveItem',
        navAboutActive: 'navItemLightCollapse menuActiveItem',
        galleryFillIcon: 'galleryFillIconLight',
        singleProjectName: 'textLightGrey text700',
        singleProjectDesc: 'textGrey text400',
        faIcon: 'faIconLight',
        list: 'listLight',
        aboutList: 'aboutListLight aboutListWrap',
        footerHeading: 'marBot textGrey',
        footerPara: 'pad marBotFooter textLightGrey',
        footerTemp: 'footerTemp textGrey',
        footerIcon: 'footerIcon textLightGrey',
        footerCopyright: 'footerCopyright textBlue text700 responsiveCopyRight',
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
      // DARK THEME
      htmlBody.className = 'bgDark';
      this.setState({
        light: false,
        type: 'textWhite',
        thisType: 'textWhite textHide',
        space: 'space textGreyBg',
        brand: 'brandDark',
        navGallery: 'navItemDark navItemActiveDark',
        navAbout: 'navItemDark',
        navGalleryActive: 'navItemDarkCollapse navItemActiveDarkCollapse menuActiveItem',
        navAboutActive: 'navItemDarkCollapse menuActiveItem',
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
        footerCopyright: 'footerCopyright textYellow text700 responsiveCopyRight',
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
        projectRow: 'projectRowDark',
        barColor: 'textWhite'
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
          navGalleryActive: 'navItemDarkCollapse navItemActiveDarkCollapse menuActiveItem',
          navAboutActive: 'navItemDarkCollapse menuActiveItem'
        });
      } else if (value === 'about') {
        this.setState({
          navGallery: 'navItemDark',
          navAbout: 'navItemDark navItemActiveDark',
          navGalleryActive: 'navItemDarkCollapse menuActiveItem',
          navAboutActive: 'navItemDarkCollapse navItemActiveDarkCollapse menuActiveItem'
        });
      } else if (value === 'project') {
        this.setState({
          navGallery: 'navItemDark navItemActiveDark',
          navAbout: 'navItemDark',
          navGalleryActive: 'navItemDarkCollapse navItemActiveDarkCollapse menuActiveItem',
          navAboutActive: 'navItemDarkCollapse menuActiveItem'
        });
      }
      // LIGHT THEME
    } else if (this.state.light === true) {
      if (value === 'gallery') {
        this.setState({
          navGallery: 'navItemLight navItemActiveLight',
          navAbout: 'navItemLight',
          navGalleryActive: 'navItemLightCollapse navItemActiveLightCollapse menuActiveItem',
          navAboutActive: 'navItemLightCollapse menuActiveItem'
        });
      } else if (value === 'about') {
        this.setState({
          navGallery: 'navItemLight',
          navAbout: 'navItemLight navItemActiveLight',
          navGalleryActive: 'navItemLightCollapse menuActiveItem',
          navAboutActive: 'navItemLightCollapse navItemActiveLightCollapse menuActiveItem'
        });
      } else if (value === 'project') {
        this.setState({
          navGallery: 'navItemLight navItemActiveLight',
          navAbout: 'navItemLight',
          navGalleryActive: 'navItemLightCollapse navItemActiveLightCollapse menuActiveItem',
          navAboutActive: 'navItemLightCollapse menuActiveItem'
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
      currentProjectDesc: value['projectDesc'],
      currentProjectUrl: value['projectUrl']
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
          singleProjectDesc={this.state.singleProjectDesc}
          everything={this.state.everything}
          branding={this.state.branding}
          graphic={this.state.graphic}
          ux={this.state.ux}
          web={this.state.web}
          filter={this.filter}
          filterReset={this.filterReset}
          randomProject={this.randomProject}
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
          currentProjectUrl={this.state.currentProjectUrl}
          changePageFromProject={this.changePage}
          projectHeading={this.state.projectHeading}
          projectIntro={this.state.projectIntro}
          projectDesc={this.state.projectDesc}
          projectDetails={this.state.projectDetails}
          projectRow={this.state.projectRow}
          link={this.state.link}
          randomNumber={this.state.randomNumber}
          randomProject={this.randomProject}
        />
      );
    } else if (currentPage === 'about') {
      display = (
        <About
          space={this.state.space}
          aboutList={this.state.aboutList}
          aboutHeading={this.state.aboutHeading}
          aboutPara={this.state.aboutPara}
          aboutPhone={this.state.aboutPhone}
        />
      );
    }
    return (
      <React.Fragment>
        <div className='container-fluid'>
          <MDBAnimation type='fadeIn'>
            <Nav
              changePageFromNav={this.changePage}
              navGallery={this.state.navGallery}
              navAbout={this.state.navAbout}
              navGalleryActive={this.state.navGalleryActive}
              navAboutActive={this.state.navAboutActive}
              barColor={this.state.barColor}
              brand={this.state.brand}
              light={this.state.light}
            />
          </MDBAnimation>
          <Type type={this.state.type} thisType={this.state.thisType} />
          <React.Fragment>
            <MDBAnimation type='fadeIn'>{display}</MDBAnimation>
          </React.Fragment>
        </div>
        <React.Fragment>
          <MDBAnimation type='fadeIn'>{projectDisplay}</MDBAnimation>
        </React.Fragment>
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
