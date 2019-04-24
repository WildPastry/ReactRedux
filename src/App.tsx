import React, { Component } from 'react';
import Header from './inc/Header';
import Nav from './inc/Nav';
import Space from './inc/Space';
import Gallery from './inc/Gallery';
import Project from './inc/Project';
import Footer from './inc/Footer';

import './scss/main.scss';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className='container-fluid'>
          <Nav />
          <Space />
          <div className='row'>
            <Gallery />
          </div>
          <Project />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
