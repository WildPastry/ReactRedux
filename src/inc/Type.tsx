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
    console.log('Type component loaded...')
  }

  render() {
    return (
      <React.Fragment>
        <div className='typeWrap pad'>
          <div id='type' className={this.props.type} ref={this.type} />
        </div>
        <div className='lineNoMar' />
      </React.Fragment>
    );
  }
  initType(): React.ReactNode {
    throw new Error('Method not implemented.');
  }
}

export default Type;
