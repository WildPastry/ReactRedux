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
        <div className='typeWrap'>
          <div id='type' ref={this.type} />
        </div>
        <div className='line' />
      </React.Fragment>
    );
  }
  initType(): React.ReactNode {
    throw new Error('Method not implemented.');
  }
}

export default Type;
