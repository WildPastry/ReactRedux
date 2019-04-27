import React, { Component } from 'react';
import Nav from './inc/Nav';
import Type from './inc/Type';
import Gallery from './inc/Gallery';
import Project from './inc/Project';
import About from './inc/About';
import Space from './inc/Space';
import Footer from './inc/Footer';
import projectData from './data/projects.json';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faStarOfLife, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './scss/main.scss';

library.add(fab, faEnvelope, faStarOfLife);

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      projects: projectData,
      currentPage: 'gallery'
    };
    this.changePage = this.changePage.bind(this);
  }

  changePage(value: any) {
    this.setState({
      currentPage: value
    });
  }

  render() {
    var allProjects = this.state['projects'];
    var currentPage = this.state.currentPage;
    let display;

    if (currentPage === 'gallery') {
      display = <Gallery projectsFromApp={allProjects} changePageFromGallery={this.changePage} />;
    } else if (currentPage === 'project') {
      display = <Project />;
    } else if (currentPage === 'space') {
      display = <Space />;
    } else if (currentPage === 'about') {
      display = <About />;
    }
    return (
      <React.Fragment>
        <div className='container-fluid'>
          <Nav changePageFromNav={this.changePage} />
          <Type />
          <React.Fragment>{display}</React.Fragment>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
