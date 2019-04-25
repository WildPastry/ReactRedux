import React, { Component } from 'react';
import { initType } from '../data/type';

class Type extends Component<any, any> {
  private type: React.RefObject<HTMLDivElement>;
  constructor(props: any) {
    super(props);
    this.type = React.createRef();
  }

  componentWillMount() {
    // console.log('type component loading...');
  }

  componentDidMount() {
    // console.log('type component loaded...');
    // console.log(this.type.current);
    // console.log(this.type);
    // console.log(initType);
    
      initType();
    
    // console.log({initType})
    // console.log(this.props.initType)
    // console.log(this.initType)
  }

  render() {
    // console.log(this.type.current)
    // console.log(this.type)
    return (
      <React.Fragment>
        <h1 className='textGreen' id='type' ref={this.type}>
          {/* <p>{add(2, 8)}</p> */}
          {/* <Parent /> */}
        </h1>
        {/* <div>{this.initType}</div> */}
      </React.Fragment>
    );
  }
  initType(): React.ReactNode {
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

export default Type;
