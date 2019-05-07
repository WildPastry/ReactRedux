import React, { Component } from 'react';
import { HamburgerSqueeze } from 'react-animated-burgers';

class Nav extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isActive: false,
      collapseMenu: false,
      collapseMenuFalse: 'hidden',
      collapseMenuTrue: 'visible'
    };
    this.changePageFromNav = this.changePageFromNav.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  changePageFromNav(value: any) {
    this.props.changePageFromNav(value);
  }

  componentDidMount() {
    console.log('Nav component loaded...');
  }

  toggleMenu = () => {
    if (this.state.collapseMenu === false) {
      this.setState({
        collapseMenu: true
      });
    } else if (this.state.collapseMenu === true) {
      this.setState({
        collapseMenu: false
      });
    }
    this.setState({
      isActive: !this.state.isActive
    });
  };

  render() {
    let collapseMenu;
    if (this.state.collapseMenu === true) {
      collapseMenu = (
        <div className={this.state.collapseMenuTrue}>
          <h4
            id='navGallery'
            className={this.props.navGallery}
            onClick={this.changePageFromNav.bind(this, 'gallery')}>
            gallery
          </h4>
          <h4
            id='navAbout'
            className={this.props.navAbout}
            onClick={this.changePageFromNav.bind(this, 'about')}>
            about
          </h4>
        </div>
      );
    } else if (this.state.collapseMenu === false) {
      collapseMenu = (
        <div className={this.state.collapseMenuFalse}>
          <h4
            id='navGallery'
            className={this.props.navGallery}
            onClick={this.changePageFromNav.bind(this, 'gallery')}>
            gallery
          </h4>
          <h4
            id='navAbout'
            className={this.props.navAbout}
            onClick={this.changePageFromNav.bind(this, 'about')}>
            about
          </h4>
        </div>
      );
    }
    return (
      <React.Fragment>
        {/* BRAND */}
        <div className='flex wrap pad navWrap'>
          <p className={this.props.brand}>
            <a href='index.html'> mike parker | portfolio </a>
          </p>
          {/* NAV */}
          <div className='menuCollapse'>
            <HamburgerSqueeze
              className='menuBurger'
              isActive={this.state.isActive}
              toggleButton={this.toggleMenu}
              barColor='white'
            />
            {collapseMenu}
          </div>
          {/* <div className={this.state.collapseMenu}>
            <h4
              id='navGallery'
              className={this.props.navGallery}
              onClick={this.changePageFromNav.bind(this, 'gallery')}>
              gallery
            </h4>
            <h4
              id='navAbout'
              className={this.props.navAbout}
              onClick={this.changePageFromNav.bind(this, 'about')}>
              about
            </h4>
          </div> */}
        </div>
      </React.Fragment>
    );
  }
}

export default Nav;
