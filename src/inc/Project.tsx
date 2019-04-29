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
    this.changeProject = this.changeProject.bind(this);
    this.changePageFromProject = this.changePageFromProject.bind(this);
  }

  changeProject() {
    this.setState(
      {
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
      },
    );
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
          <div className='colWrap col-xs-12 col-sm-12 col-md-7 col-lg-7'>
            <h1 className='marBot'>{this.state.currentProjectName}</h1>
            <h2 className='textSpotGrey text300'>{this.state.currentProjectIntro}</h2>
            <br />
            <p>{this.state.currentProjectDesc}</p>
          </div>
          {/* PROJECT DETAILS */}
          <div className='colWrap col-xs-12 col-sm-12 col-md-4 col-lg-4'>
            <h2 className='marBot text300 textLightGrey'>PROJECT DETAILS</h2>
            <ul>
              <li className='projectListItem'>
                FIELDS&nbsp;&nbsp;
                <span className='textWhite text700'>
                  {this.state.currentProjectFields[0]}
                  <span className='textLightGrey text700'> / </span>
                  {this.state.currentProjectFields[1]}
                  <span className='textLightGrey text700'> / </span>
                  {this.state.currentProjectFields[2]}
                </span>
              </li>
              <li className='projectListItem'>
                CLIENT&nbsp;&nbsp;
                <span className='textWhite text700'>{this.state.currentProjectClient}</span>
              </li>
              <li className='projectListItem'>
                TIMELINE&nbsp;&nbsp;
                <span className='textWhite text700'>{this.state.currentProjectTimeline}</span>
              </li>
              <li className='projectListItem'>
                WEBSITE&nbsp;&nbsp;
                <span className='textWhite text700'>{this.state.currentProjectWebsite}</span>
              </li>
            </ul>
            <div className='prevNextIconWrap'>
              {this.state.currentProjectIcons.map((currentIcon: any) => (
                <FontAwesomeIcon icon={['fab', currentIcon]} className='projectIcon' />
              ))}
            </div>
          </div>
          {/* TOOLS */}
          <div className='colWrap col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <div className='lineThin mar' />
          </div>
          <div className='colWrap flex wrap col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <FontAwesomeIcon icon={['fas', 'chevron-left']} className='prevIcon' />
            <div className='iconWrap' onClick={this.changePageFromProject.bind(this, 'gallery')}>
              <FontAwesomeIcon icon={['fas', 'undo-alt']} className='undoIcon' />
            </div>
            <FontAwesomeIcon icon={['fas', 'chevron-right']} className='nextIcon' />
          </div>
        </div>
        {/* IMAGES */}
        <div className='row'>
          {this.state.currentProjectImages.map(
            (currentImage: { currentProjectName: string; currentImage: string }) => (
              <div className='projectWrap col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                <img
                  src={require('./../img/project/' + currentImage)}
                  alt={this.state.currentProjectName}
                />
              </div>
            )
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Project;
