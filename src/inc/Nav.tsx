import React, { Component } from 'react';

class Nav extends Component<any, any> {
  render() {
    return (
      <React.Fragment>
        <div className='flex wrap navWrap'>
          <div>
            <p className='brand'>mike parker | portfolio</p>
          </div>
          <div className='flex'>
            <h4 className='navItem'>gallery</h4>
            <h4 className='navItem'>space</h4>
            <h4 className='navItem'>info</h4>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Nav;
