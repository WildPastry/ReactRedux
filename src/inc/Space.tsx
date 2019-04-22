import React, { Component } from 'react';
import './../data/space.ts';

class Space extends Component<any, any> {
  private space: React.RefObject<HTMLDivElement>;
  constructor(props: any) {
    super(props);
    this.space = React.createRef();
  }
  render() {
    return (
      <React.Fragment>
        <div id='space' ref={this.space}>
        <p>space</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Space;
