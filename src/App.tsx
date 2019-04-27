import React, { Component } from 'react';
import Nav from './inc/Nav';
import Type from './inc/Type';
import Gallery from './inc/Gallery';
import Project from './inc/Project';
import Footer from './inc/Footer';
import projectData from './data/projects.json';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faStarOfLife, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './scss/main.scss';

library.add(fab, faEnvelope, faStarOfLife);

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      projects: projectData
    };
  }

  render() {
    var allProjects = this.state['projects'];

    return (
      <React.Fragment>
        <div className='container-fluid'>
          <Nav />
          <Type />
          <Gallery projectsFromApp={allProjects} />
          <Project />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
