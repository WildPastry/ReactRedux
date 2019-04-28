import React, { Component } from 'react';

class Nav extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
    this.changePageFromNav = this.changePageFromNav.bind(this);
  }

  changePageFromNav(value: any) {
    this.props.changePageFromNav(value);
  }

  componentDidMount() {
    console.log('Nav component loaded...')
  }

  render() {
    return (
      <React.Fragment>
        <div className='flex wrap pad navWrap'>
          <div>
            <p className='brand textPeach' onClick={this.changePageFromNav.bind(this, 'gallery')}>
              mike parker | portfolio
            </p>
          </div>
          <div className='flex'>
            <h4 className='navItem' onClick={this.changePageFromNav.bind(this, 'gallery')}>
              gallery
            </h4>
            <h4 className='navItem' onClick={this.changePageFromNav.bind(this, 'space')}>
              space
            </h4>
            <h4 className='navItem' onClick={this.changePageFromNav.bind(this, 'about')}>
              about
            </h4>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Nav;
