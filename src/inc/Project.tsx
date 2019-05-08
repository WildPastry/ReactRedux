import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MDBAnimation } from 'mdbreact';

var randomNumber: any[] | number[] | (string | number)[];

class Project extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      projects: this.props.projects,
      currentProject: this.props.currentProject,
      currentProjectName: this.props.currentProjectName,
      currentProjectFields: this.props.currentProjectFields,
      currentProjectClient: this.props.currentProjectClient,
      currentProjectTimeline: this.props.currentProjectTimeline,
      currentProjectWebsite: this.props.currentProjectWebsite,
      currentProjectThumb: this.props.currentProjectThumb,
      currentProjectImages: this.props.currentProjectImages,
      currentProjectIcons: this.props.currentProjectIcons,
      currentProjectIntro: this.props.currentProjectIntro,
      currentProjectDesc: this.props.currentProjectDesc
    };
    this.prevProject = this.prevProject.bind(this);
    this.nextProject = this.nextProject.bind(this);
    this.changeProject = this.changeProject.bind(this);
    this.moreProjects = this.moreProjects.bind(this);
    this.changePageFromProject = this.changePageFromProject.bind(this);
  }

  randomProject() {
    randomNumber = [];
    while (randomNumber.length < 3) {
      var r = Math.floor(Math.random() * 12);
      if (randomNumber.indexOf(r) === -1) randomNumber.push(r);
    }
  }

  changeProject() {
    this.setState({
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
    });
  }

  prevProject() {
    this.randomProject();
    window.scrollTo(0, 0);
    var i;
    if (this.state.currentProject === '001') {
      i = 11;
    } else if (this.state.currentProject === '002') {
      i = 0;
    } else if (this.state.currentProject === '003') {
      i = 1;
    } else if (this.state.currentProject === '004') {
      i = 2;
    } else if (this.state.currentProject === '005') {
      i = 3;
    } else if (this.state.currentProject === '006') {
      i = 4;
    } else if (this.state.currentProject === '007') {
      i = 5;
    } else if (this.state.currentProject === '008') {
      i = 6;
    } else if (this.state.currentProject === '009') {
      i = 7;
    } else if (this.state.currentProject === '010') {
      i = 8;
    } else if (this.state.currentProject === '011') {
      i = 9;
    } else if (this.state.currentProject === '012') {
      i = 10;
    }
    this.setState({
      currentProject: this.state.projects[i].id,
      currentProjectName: this.state.projects[i].name,
      currentProjectFields: this.state.projects[i].fields,
      currentProjectClient: this.state.projects[i].client,
      currentProjectTimeline: this.state.projects[i].timeline,
      currentProjectWebsite: this.state.projects[i].website,
      currentProjectThumb: this.state.projects[i].thumb,
      currentProjectImages: this.state.projects[i].images,
      currentProjectIcons: this.state.projects[i].icons,
      currentProjectIntro: this.state.projects[i].intro,
      currentProjectDesc: this.state.projects[i].desc
    });
  }

  nextProject() {
    this.randomProject();
    window.scrollTo(0, 0);
    var i;
    if (this.state.currentProject === '001') {
      i = 1;
    } else if (this.state.currentProject === '002') {
      i = 2;
    } else if (this.state.currentProject === '003') {
      i = 3;
    } else if (this.state.currentProject === '004') {
      i = 4;
    } else if (this.state.currentProject === '005') {
      i = 5;
    } else if (this.state.currentProject === '006') {
      i = 6;
    } else if (this.state.currentProject === '007') {
      i = 7;
    } else if (this.state.currentProject === '008') {
      i = 8;
    } else if (this.state.currentProject === '009') {
      i = 9;
    } else if (this.state.currentProject === '010') {
      i = 10;
    } else if (this.state.currentProject === '011') {
      i = 11;
    } else if (this.state.currentProject === '012') {
      i = 0;
    }
    this.setState({
      currentProject: this.state.projects[i].id,
      currentProjectName: this.state.projects[i].name,
      currentProjectFields: this.state.projects[i].fields,
      currentProjectClient: this.state.projects[i].client,
      currentProjectTimeline: this.state.projects[i].timeline,
      currentProjectWebsite: this.state.projects[i].website,
      currentProjectThumb: this.state.projects[i].thumb,
      currentProjectImages: this.state.projects[i].images,
      currentProjectIcons: this.state.projects[i].icons,
      currentProjectIntro: this.state.projects[i].intro,
      currentProjectDesc: this.state.projects[i].desc
    });
  }

  moreProjects(value: any) {
    this.randomProject();
    window.scrollTo(0, 0);
    console.log(value);
    var j;
    if (value === 1) {
      j = 1;
    } else if (value === 2) {
      j = 2;
    } else if (value === 3) {
      j = 3;
    } else if (value === 4) {
      j = 4;
    } else if (value === 5) {
      j = 5;
    } else if (value === 6) {
      j = 6;
    } else if (value === 7) {
      j = 7;
    } else if (value === 8) {
      j = 8;
    } else if (value === 9) {
      j = 9;
    } else if (value === 10) {
      j = 10;
    } else if (value === 11) {
      j = 11;
    } else if (value === 12) {
      j = 12;
    }
    this.setState({
      currentProject: this.state.projects[j].id,
      currentProjectName: this.state.projects[j].name,
      currentProjectFields: this.state.projects[j].fields,
      currentProjectClient: this.state.projects[j].client,
      currentProjectTimeline: this.state.projects[j].timeline,
      currentProjectWebsite: this.state.projects[j].website,
      currentProjectThumb: this.state.projects[j].thumb,
      currentProjectImages: this.state.projects[j].images,
      currentProjectIcons: this.state.projects[j].icons,
      currentProjectIntro: this.state.projects[j].intro,
      currentProjectDesc: this.state.projects[j].desc
    });
  }

  changePageFromProject(value: any) {
    window.scrollTo(0, 0);
    this.props.changePageFromProject(value);
  }

  componentWillMount() {
    this.randomProject();
  }

  componentDidMount() {
    console.log('Project component loaded...');
  }

  render() {
    return (
      <React.Fragment>
        <MDBAnimation type='fadeIn'>
          {/* DESCRIPTION */}
          <div className='container-fluid responsiveMar'>
            <div className='row wrap marBotProject'>
              <div className='colWrap col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                <h1 className={this.props.projectHeading}>{this.state.currentProjectName}</h1>
              </div>
              <div className='colWrap col-xs-12 col-sm-12 col-md-12 col-lg-7'>
                <h2 className={this.props.projectIntro}>{this.state.currentProjectIntro}</h2>
                <br />
                <p className={this.props.projectDesc}>{this.state.currentProjectDesc}</p>
              </div>
              {/* PROJECT DETAILS */}
              <div className='colWrap right col-xs-12 col-sm-12 col-md-12 col-lg-5'>
                <ul>
                  <li className='projectListItem'>
                    FIELDS&nbsp;&nbsp;
                    <span className={this.props.projectDetails}>
                      {this.state.currentProjectFields[0]}
                      <span className='textLightGrey text700'> / </span>
                      {this.state.currentProjectFields[1]}
                      <span className='textLightGrey text700'> / </span>
                      {this.state.currentProjectFields[2]}
                    </span>
                  </li>
                  <li className='projectListItem'>
                    CLIENT&nbsp;&nbsp;
                    <span className={this.props.projectDetails}>
                      {this.state.currentProjectClient}
                    </span>
                  </li>
                  <li className='projectListItem'>
                    TIMELINE&nbsp;&nbsp;
                    <span className={this.props.projectDetails}>
                      {this.state.currentProjectTimeline}
                    </span>
                  </li>
                  <li className='projectListItem'>
                    WEBSITE&nbsp;&nbsp;
                    <span className={this.props.projectDetails}>
                      <a className={this.props.link} href='index.html'>
                        {this.state.currentProjectWebsite}
                      </a>
                    </span>
                  </li>
                </ul>
                {/* TOOLS */}
                <div className='projectIconsWrap responsiveWrap'>
                  {this.state.currentProjectIcons.map((currentIcon: any) => (
                    <FontAwesomeIcon
                      key={currentIcon['id']}
                      icon={['fab', currentIcon['src']]}
                      className='projectIcon'
                    />
                  ))}
                </div>
              </div>
              {/* LINE BREAK */}
              <div className='colWrap col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                <div className='lineThin mar' />
              </div>
              {/* TOP PROJECT CONTROL ICONS */}
              <div className='colWrap flex wrap col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                <div className='iconWrap' onClick={this.prevProject}>
                  <FontAwesomeIcon icon={['fas', 'chevron-left']} className='prevIcon' />
                </div>
                <div
                  className='iconWrap'
                  onClick={this.changePageFromProject.bind(this, 'gallery')}>
                  <FontAwesomeIcon icon={['fas', 'th']} className='gridIcon' />
                </div>
                <div className='iconWrap' onClick={this.nextProject}>
                  <FontAwesomeIcon icon={['fas', 'chevron-right']} className='nextIcon' />
                </div>
              </div>
            </div>
          </div>
          {/* IMAGES */}
          <div className={this.props.projectRow}>
            <div className='container-fluid'>
              <div className='row marBotProject'>
                {this.state.currentProjectImages.map((currentImage: { [x: string]: string }) => (
                  <div
                    key={currentImage['id']}
                    className='projectWrap col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                    <MDBAnimation type='zoomIn'>
                    <img
                      src={require('./../img/project/' + currentImage['src'])}
                      alt={this.state.currentProjectName}
                    />
                    </MDBAnimation>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* BOTTOM PROJECT CONTROL ICONS */}
          <div className='container-fluid'>
            <div className='colWrap flex wrap col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <div className='iconWrap' onClick={this.prevProject}>
                <FontAwesomeIcon icon={['fas', 'chevron-left']} className='prevIcon' />
              </div>
              <div className='iconWrap' onClick={this.changePageFromProject.bind(this, 'gallery')}>
                <FontAwesomeIcon icon={['fas', 'th']} className='gridIcon' />
              </div>
              <div className='iconWrap' onClick={this.nextProject}>
                <FontAwesomeIcon icon={['fas', 'chevron-right']} className='nextIcon' />
              </div>
            </div>
          </div>
          {/* MORE PROJECTS */}
          <div className='container-fluid'>
            <div className='row'>
              <div className='moreProjectsWrap col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                <h3 className='center marBotProject textPeach'>more projects</h3>
              </div>
              <div className='imgWrapDark col-xs-12 col-sm-4 col-md-4 col-lg-4'>
                <img
                  onClick={this.moreProjects.bind(this, randomNumber[0])}
                  src={require('./../img/thumb/' +
                    this.state.projects[randomNumber[0]].thumb[Math.round(Math.random())])}
                  alt='Gallery'
                />
              </div>
              <div className='imgWrapDark col-xs-12 col-sm-4 col-md-4 col-lg-4'>
                <img
                  onClick={this.moreProjects.bind(this, randomNumber[1])}
                  src={require('./../img/thumb/' +
                    this.state.projects[randomNumber[1]].thumb[Math.round(Math.random())])}
                  alt='Gallery'
                />
              </div>
              <div className='imgWrapDark col-xs-12 col-sm-4 col-md-4 col-lg-4'>
                <img
                  onClick={this.moreProjects.bind(this, randomNumber[2])}
                  src={require('./../img/thumb/' +
                    this.state.projects[randomNumber[2]].thumb[Math.round(Math.random())])}
                  alt='Gallery'
                />
              </div>
            </div>
          </div>
        </MDBAnimation>
      </React.Fragment>
    );
  }
}

export default Project;
