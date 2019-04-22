import React, { Component } from 'react';
import * as spaceFunction from './../data/space.js';

class Space extends Component<any, any> {
  private space: React.RefObject<HTMLDivElement>;
  constructor(props: any) {
    super(props);
    this.space = React.createRef();
  }
  render() {
    console.log(spaceFunction.spaceFunction);
    return (
      <React.Fragment>
        <div id='space' ref={this.space}>
          {/* {spaceFunction} */}
        </div>
      </React.Fragment>
    );
  }
}

export default Space;
