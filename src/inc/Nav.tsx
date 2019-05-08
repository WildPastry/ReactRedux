import React, { Component } from 'react';
import { HamburgerSqueeze } from 'react-animated-burgers';

class Nav extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isActive: false,
      collapseMenu: false,
      collapseMenuFalse: 'hidden menuActive',
      collapseMenuTrue: 'visible menuActive'
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
    let burgerMenu
    if (this.props.light === false){
      burgerMenu = (
        <div className='menuCollapse'>
        <HamburgerSqueeze
          className='menuBurger'
          isActive={this.state.isActive}
          toggleButton={this.toggleMenu}
          buttonWidth={30}
          barColor={'#fff'}
        />
      </div>
      )
    } else if (this.props.light === true){
      burgerMenu = (
        <div className='menuCollapse'>
        <HamburgerSqueeze
          className='menuBurger'
          isActive={this.state.isActive}
          toggleButton={this.toggleMenu}
          buttonWidth={30}
          barColor={'#292929'}
        />
      </div>
      )
    } if (this.state.collapseMenu === true) {
      collapseMenu = (
        <div className={this.state.collapseMenuTrue}>
          <h4
            id='navGallery'
            className={this.props.navGalleryActive}
            onClick={this.changePageFromNav.bind(this, 'gallery')}>
            gallery
          </h4>
          <h4
            id='navAbout'
            className={this.props.navAboutActive}
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
            <a href='index.html'>
              mike parker <span className='text300'> portfolio </span>
            </a>
          </p>
          {/* NAV */}
          {burgerMenu}
          <div className='menu flex'>
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
        </div>
        {/* COLLAPSE MENU */}
        {collapseMenu}
      </React.Fragment>
    );
  }
}

export default Nav;
