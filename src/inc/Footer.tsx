import React, { Component } from 'react';

class Footer extends Component<any, any> {
  render() {
      return (
        <React.Fragment>
          <div className='line marTop' />
          <div className='flex wrap'>
            <div>
              <h4 className='pad padLeft'>links</h4>
            </div>
            <div>
            <p className='pad padRight'>&copy; mike parker 2019</p>
          </div>
          </div>
        </React.Fragment>
      );
  }
}

export default Footer;
