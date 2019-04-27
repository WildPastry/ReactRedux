import React, { Component } from 'react';
import { initSpace } from '../data/space';

class Space extends Component<any, any> {
  private space: React.RefObject<HTMLDivElement>;
  constructor(props: any) {
    super(props);
    this.space = React.createRef();
  }

  componentDidMount() {
    initSpace();
  }

  render() {
    return (
      <React.Fragment>
        <div id='space' ref={this.space} />
      </React.Fragment>
    );
  }
}

export default Space;
