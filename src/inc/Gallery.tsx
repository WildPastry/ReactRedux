import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Gallery extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      projects: this.props.projectsFromApp
    };
    this.filter = this.filter.bind(this);
    this.filterReset = this.filterReset.bind(this);
    this.changePageFromGallery = this.changePageFromGallery.bind(this);
  }

  changePageFromGallery(value: any) {
    var options = {
      page: 'project',
      project: value[0],
      projectName: value[1],
      projectFields: value[2],
      projectClient: value[3],
      projectTimeline: value[4],
      projectWebsite: value[5],
      projectThumb: value[6],
      projectImages: value[7],
      projectIcons: value[8],
      projectIntro: value[9],
      projectDesc: value[10],
    };
    this.props.changePageFromGallery(options);
    window.scrollTo(0, 0); 
  }

  filter(value: any) {
    var projects = this.props.projectsFromApp;
    var filter = value;
    var projectsFiltered = projects.filter(
      (project: { fields: { indexOf: (arg0: string) => number } }) => {
        return project.fields.indexOf(filter) >= 0;
      }
    );
    console.log('Filtered by: ' + value);
    this.setState({
      projects: projectsFiltered
    });
  }

  filterReset() {
    this.setState(
      {
        projects: this.props.projectsFromApp
      },
      () => {
        console.log('Reset filter');
      }
    );
  }

  componentDidMount() {
    console.log('Gallery component loaded...');
  }

  render() {
    return (
      <React.Fragment>
        {/* PROJECTS FILTER */}
        <div className='row wrap'>
          <div className='filterWrap flex pad'>
            <h4 className='filterItem text700' onClick={this.filterReset}>
              EVERYTHING
            </h4>
            <h4 className='filterItem' onClick={this.filter.bind(this, 'Branding')}>
              Branding
            </h4>
            <h4 className='filterItem' onClick={this.filter.bind(this, 'Graphic')}>
              Graphic
            </h4>
            <h4 className='filterItem' onClick={this.filter.bind(this, 'UX')}>
              UX
            </h4>
            <h4 className='filterItem' onClick={this.filter.bind(this, 'Web')}>
              Web
            </h4>
          </div>
          <div className='galleryWrap pad' onClick={this.props.changeImageTheme}>
          <FontAwesomeIcon icon={['fas', 'paint-roller']} className='galleryIcon' />
          </div>
        </div>
        {/* PROJECTS MAP */}
        <div className='row'>
          {this.state.projects.map(
            (singleProject: {
              id: React.Key;
              name: React.ReactNode;
              fields: Array<[]>;
              client: React.ReactNode;
              timeline: React.ReactNode;
              website: React.ReactNode;
              thumb: string;
              images: Array<[]>;
              icons: Array<[]>;
              intro: string;
              desc: string;
            }) => (
              <div key={singleProject.id} className={this.props.imgTheme}>
                <img
                  onClick={this.changePageFromGallery.bind(this, [
                    singleProject.id,
                    singleProject.name,
                    singleProject.fields,
                    singleProject.client,
                    singleProject.timeline,
                    singleProject.website,
                    singleProject.thumb,
                    singleProject.images,
                    singleProject.icons,
                    singleProject.intro,
                    singleProject.desc,
                  ])}
                  src={require('./../img/thumb/' + singleProject.thumb)}
                  alt='Gallery'
                />
                <div className='flex wrap'>
                <p>{singleProject.name}</p>
                {/* <p><span className='textSpotGrey text300'>
                  {singleProject.fields[0]}
                  <span className='textLightGrey text700'> / </span>
                  {singleProject.fields[1]}
                  <span className='textLightGrey text700'> / </span>
                  {singleProject.fields[2]}
                  </span>
                </p> */}
                </div>
              </div>
            )
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Gallery;
