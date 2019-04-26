import React, { Component } from 'react';

class Nav extends Component<any, any> {
  render() {
    return (
      <React.Fragment>
        <div className='flex wrap'>
          <div>
            <p className='pad padLeft'>mike parker | portfolio</p>
          </div>
          <div className='flex'>
            <h4 className='pad navItem'>gallery</h4>
            <h4 className='pad navItem padRight'>contact</h4>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Nav;
