import React, { Component } from 'react';

class Nav extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.changePageFromNav = this.changePageFromNav.bind(this);
  }

  changePageFromNav(value: any) {
    this.props.changePageFromNav(value);
  }

  componentDidMount() {
    console.log('Nav component loaded...');
  }

  render() {
    return (
      <React.Fragment>
        {/* BRAND */}
        <div className='flex wrap pad navWrap'>
          <p className={this.props.brand}>
           <a href='index.html'> mike parker | portfolio </a>
          </p>
          {/* NAV */}
          <div className='flex'>
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
      </React.Fragment>
    );
  }
}

export default Nav;
