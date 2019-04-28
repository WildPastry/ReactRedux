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
      currentProjectDesc: this.props.currentProjectDesc,
    };
    this.changeProject = this.changeProject.bind(this);
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
        currentProjectDesc: '',
      },
      () => {
        // console.dir(this.state);
      }
    );
  }

  componentDidMount() {
    console.log('Project component loaded...');
    // console.log(this.state.projects)
  }

  render() {
    // console.dir(this.state);
    return (
      <React.Fragment>
        {/* DESCRIPTION */}
        <div className='row wrap'>
          <div className='colWrap col-xs-12 col-sm-12 col-md-7 col-lg-7'>
            <h1 className='textPeach marBot'>{this.state.currentProjectName}</h1>
            <h2>Hero statement...</h2>
            <br />
            <p>{this.state.currentProjectDesc}</p>
          </div>
          {/* PROJECT DETAILS */}
          <div className='colWrap col-xs-12 col-sm-12 col-md-4 col-lg-4'>
            <h2 className='marBot'>project details</h2>
            <ul>
              <li className='projectListItem'>
                FIELDS&nbsp;&nbsp;
                <span className='textWhite text700'>
                  {this.state.fieldsOne}
                  <span className='textLightGrey text700'> / </span>
                  {this.state.fieldsTwo}
                  <span className='textLightGrey text700'> / </span>
                  {this.state.fieldsThree}
                </span>
              </li>
              <li className='projectListItem'>
                CLIENT&nbsp;&nbsp;<span className='textWhite text700'>Wagamama</span>
              </li>
              <li className='projectListItem'>
                TIMELINE&nbsp;&nbsp;<span className='textWhite text700'>Apr - Nov 2018</span>
              </li>
              <li className='projectListItem'>
                LIVE SITE&nbsp;&nbsp;<span className='textWhite text700'>site.mparker.co.nz</span>
              </li>
            </ul>
            <div className='prevNextIconWrap'>
              <FontAwesomeIcon icon={['fas', 'chevron-left']} className='prevIcon' />
              <FontAwesomeIcon icon={['fas', 'chevron-right']} className='nextIcon' />
            </div>
          </div>
          {/* TOOLS */}
          <div className='colWrap center col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <div className='lineThin mar' />
            <FontAwesomeIcon icon={['fab', 'adobe']} className='projectIcon' />
            <FontAwesomeIcon icon={['fab', 'less']} className='projectIcon' />
            <FontAwesomeIcon icon={['fab', 'sass']} className='projectIcon' />
            <FontAwesomeIcon icon={['fab', 'grunt']} className='projectIcon' />
            <FontAwesomeIcon icon={['fab', 'git']} className='projectIcon' />
            <div className='lineThin mar' />
          </div>
        </div>
        {/* IMAGES */}
        <div className='row'>
          <div className='projectWrap col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <img src={require('./../img/project/wag/01.jpg')} alt='Gallery' />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Project;
