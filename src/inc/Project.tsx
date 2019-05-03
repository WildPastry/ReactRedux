import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Project extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      projects: this.props.projectsFromApp,
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
    this.changePageFromProject = this.changePageFromProject.bind(this);
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

  changePageFromProject(value: any) {
    this.props.changePageFromProject(value);
  }

  componentDidMount() {
    console.log('Project component loaded...');
  }

  render() {
    return (
      <React.Fragment>
        {/* DESCRIPTION */}
        <div className='row wrap'>
          <div className='colWrap col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <h1 className='marBot'>{this.state.currentProjectName}</h1>
          </div>
          <div className='colWrap col-xs-12 col-sm-12 col-md-7 col-lg-7'>
            <h2 className='textSpotGrey text300'>{this.state.currentProjectIntro}</h2>
            <br />
            <p>{this.state.currentProjectDesc}</p>
          </div>
          {/* PROJECT DETAILS */}
          <div className='colWrap col-xs-12 col-sm-12 col-md-4 col-lg-4'>
            <ul>
              <li className='projectListItem'>
                FIELDS&nbsp;&nbsp;
                <span className='textWhite text300'>
                  {this.state.currentProjectFields[0]}
                  <span className='textLightGrey text700'> / </span>
                  {this.state.currentProjectFields[1]}
                  <span className='textLightGrey text700'> / </span>
                  {this.state.currentProjectFields[2]}
                </span>
              </li>
              <li className='projectListItem'>
                CLIENT&nbsp;&nbsp;
                <span className='textWhite text300'>{this.state.currentProjectClient}</span>
              </li>
              <li className='projectListItem'>
                TIMELINE&nbsp;&nbsp;
                <span className='textWhite text300'>{this.state.currentProjectTimeline}</span>
              </li>
              <li className='projectListItem'>
                WEBSITE&nbsp;&nbsp;
                <span className='textWhite text300'>
                  <a href='index.html'>{this.state.currentProjectWebsite}</a>
                </span>
              </li>
            </ul>
            <div className='prevNextIconWrap'>
              {this.state.currentProjectIcons.map((currentIcon: any) => (
                <FontAwesomeIcon
                  key={currentIcon['id']}
                  icon={['fab', currentIcon['src']]}
                  className='projectIcon'
                />
              ))}
            </div>
          </div>
          {/* TOOLS */}
          <div className='colWrap col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <div className='lineThin mar' />
          </div>
          <div className='colWrap flex wrap col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            {/* PROJECT CONTROL ICONS */}
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
        {/* IMAGES */}
        <div className='row'>
          {this.state.currentProjectImages.map((currentImage: { [x: string]: string }) => (
            <div
              key={currentImage['id']}
              className='projectWrap col-xs-12 col-sm-12 col-md-12 col-lg-12'>
              <img
                src={require('./../img/project/' + currentImage['src'])}
                alt={this.state.currentProjectName}
              />
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Project;
