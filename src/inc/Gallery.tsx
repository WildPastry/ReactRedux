import React, { Component } from 'react';

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
    this.props.changePageFromGallery(value);
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
    console.log(projectsFiltered);
    this.setState(
      {
        projects: projectsFiltered
      },
      () => {
        // console.log(this.state.projects);
      }
    );
  }

  filterReset() {
    this.setState(
      {
        projects: this.props.projectsFromApp
      },
      () => {
        // console.log(this.state.projects);
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        {/* PROJECTS FILTER */}
        <div className='row'>
          <div className='filterWrap flex'>
            <h4 className='filterItem text700' onClick={this.filterReset}>
              All
            </h4>
            {/* <h4 className='filterItem' onClick={this.filter.bind(this, 'App')}>
              App
            </h4> */}
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
        </div>
        {/* PROJECTS MAP */}
        <div className='row'>
          {this.state.projects.map(
            (singleProject: {
              id: React.Key;
              name: React.ReactNode;
              fields: React.ReactNode;
              image: string;
            }) => (
              <div key={singleProject.id} className='imgWrap col-xs-12 col-sm-6 col-md-4 col-lg-4'>
                <img onClick={this.changePageFromGallery.bind(this, 'project')} src={require('./../img/thumb/' + singleProject.image)} alt='Gallery' />
                <p>{singleProject.name}</p>
                <p>
                  {singleProject.fields[0]}
                  <span className='textLightGrey text700'> </span>
                  {singleProject.fields[1]}
                  <span className='textLightGrey text700'> </span>
                  {singleProject.fields[2]}
                </p>
              </div>
            )
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Gallery;
