import React, { Component } from 'react';

class Project extends Component<any, any> {

  componentDidMount() {
    console.log('Project component loaded...')
  }

  render() {
    return (
      <React.Fragment>
        <h4>project</h4>
      </React.Fragment>
    );
  }
}

export default Project;
