import React, { Component } from 'react';
import { initType } from '../data/type';

class Type extends Component<any, any> {
  private type: React.RefObject<HTMLDivElement>;
  constructor(props: any) {
    super(props);
    this.type = React.createRef();
  }

  componentDidMount() {
    initType();
  }

  render() {
    return (
      <React.Fragment>
        <h1 className='textPurple' id='type' ref={this.type} />
      </React.Fragment>
    );
  }
  initType(): React.ReactNode {
    throw new Error('Method not implemented.');
  }
}

export default Type;
