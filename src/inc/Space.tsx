import React, { Component } from 'react';
import { initSpace } from './../data/space';

class Space extends Component<any, any> {
  private space: React.RefObject<HTMLDivElement>;
  constructor(props: any) {
    super(props);
    this.space = React.createRef();
  }

  componentWillMount() {
    // console.log('space component loading...');
  }

  componentDidMount() {
    // console.log('space component loaded...');
    // console.log(this.space.current);
    // console.log(this.space);
    // console.log(initSpace);
    {
      initSpace();
    }
    // console.log({initSpace})
    // console.log(this.props.initSpace)
    // console.log(this.initSpace)
  }

  render() {
    // console.log(this.space.current)
    // console.log(this.space)
    return (
      <React.Fragment>
        <div id='space' ref={this.space}>
          {/* <p>{add(2, 8)}</p> */}
          {/* <Parent /> */}
        </div>
        {/* <div>{this.initSpace}</div> */}
      </React.Fragment>
    );
  }
  initSpace(): React.ReactNode {
    throw new Error('Method not implemented.');
  }
}

// class Child extends React.Component {
//   para!: HTMLElement | null;
//   render() {
//     return (
//       <div id='child'>
//         <p
//           ref={node => {
//             this.para = node;
//           }}>
//           child
//         </p>
//       </div>
//     );
//   }
// }

// class Parent extends React.Component {
//   child: any;
//   componentDidMount() {
//     // console.log(this.child.para);
//     // console.log(this.child.current);
//     // const node = this.child.current;
//     // console.log(node);
//   }

//   render() {
//     return (
//       <div>
//         <Child
//           ref={node => {
//             this.child = node;
//           }}
//         />
//       </div>
//     );
//   }
// }

export default Space;
