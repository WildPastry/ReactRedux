import React, { Component } from 'react';

class Nav extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      navGallery: 'navItem',
      navAbout: 'navItem'
    };
    this.changePageFromNav = this.changePageFromNav.bind(this);
    this.setNavItemActive = this.setNavItemActive.bind(this);
  }

  changePageFromNav(value: any) {
    this.props.changePageFromNav(value);
    this.setNavItemActive();
  }

  // componentWillMount() {
  //   this.setNavItemActive();
  // }

  componentDidMount() {
    this.setNavItemActive();
    console.log('Nav component loaded...');
  }

  setNavItemActive() {
    if (this.props.currentPage === 'gallery') {
      this.setState({
        navGallery: 'navItem navItemActive',
        navAbout: 'navItem'
      });
    } else if (this.props.currentPage === 'about') {
      this.setState({
        navGallery: 'navItem',
        navAbout: 'navItem navItemActive'
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className='flex wrap pad navWrap'>
          <p className='brand textSpotGrey' onClick={this.changePageFromNav.bind(this, 'gallery')}>
            mike parker | portfolio
          </p>
          <div className='flex'>
            <h4
              className={this.state.navGallery}
              onClick={this.changePageFromNav.bind(this, 'gallery')}>
              work
            </h4>
            <h4
              className={this.state.navAbout}
              onClick={this.changePageFromNav.bind(this, 'about')}>
              about
            </h4>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Nav;
