import React, { Component } from 'react';
// import Header from './inc/Header';
import Nav from './inc/Nav';
import Type from './inc/Type';
import Gallery from './inc/Gallery';
import Project from './inc/Project';
import Footer from './inc/Footer';
import projectData from './data/projects.json';

import './scss/main.scss';

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
        {/* <Header /> */}
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
