import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Theme extends Component<any, any> {

  componentDidMount() {
    console.log('Theme component loaded...');
  }

  render() {
    return (
      <React.Fragment>
        <FontAwesomeIcon icon={['fas', 'fill-drip']} className='galleryFillIcon' />
      </React.Fragment>
    );
  }
}

export default Theme;
