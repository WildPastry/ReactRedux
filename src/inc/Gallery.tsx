import React, { Component } from 'react';

class Gallery extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      projects: this.props.projectsFromApp
    };
    this.filter = this.filter.bind(this);
    this.filterReset = this.filterReset.bind(this);
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
        console.log(this.state.projects);
      }
    );
  }

  filterReset() {
    this.setState(
      {
        projects: this.props.projectsFromApp
      },
      () => {
        console.log(this.state.projects);
      }
    );
  }

  render() {
    return (
      <React.Fragment>
				{/* PROJECTS FILTER */}
        <div className='row'>
          <div className='filterWrap'>
            <h2 className='filter textPink' onClick={this.filterReset}>
              All
            </h2>
            <h3 className='filter' onClick={this.filter.bind(this, 'App')}>
              App
            </h3>
            <h3 className='filter' onClick={this.filter.bind(this, 'Branding')}>
              Branding
            </h3>
            <h3 className='filter' onClick={this.filter.bind(this, 'Graphic')}>
              Graphic
            </h3>
            <h3 className='filter' onClick={this.filter.bind(this, 'UX')}>
              UX
            </h3>
            <h3 className='filter' onClick={this.filter.bind(this, 'Web')}>
              Web
            </h3>
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
              price: React.ReactNode;
            }) => (
              <div key={singleProject.id} className='imgWrap col-xs-12 col-sm-6 col-md-4 col-lg-4'>
                <p>{singleProject.name}</p>
                <p>{singleProject.fields}</p>
                <img src={require('./../img/thumb/' + singleProject.image)} alt='Gallery' />
                <p>{singleProject.price}</p>
              </div>
            )
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Gallery;