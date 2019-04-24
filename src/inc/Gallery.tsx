import React, { Component } from 'react';
import projectData from './../data/projects.json';
// console.log(projectData);
// console.log(projectData[0].name);
// var projectData = myProjects;
// console.log(myProjects);
export interface singleProject {
  id: number;
  name: string;
  price: number;
  image: string;
  desc: string;
}

class Gallery extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      projects: projectData
    };
    // console.log(this.singleProject);
  }

  // componentWillMount() {
  //   this.setState({
  //     isLoaded: true,
  //     projects: projectData
  //   });
  //   console.log('project data loaded...');
  //   console.log(this.state);
  // }

  render() {
    var myProjects = this.state['projects'];
    console.log(myProjects);

    // return myProjects.map(myProjects (
    //   <p
    //     key={myProjects.price}>
    //   </p>
    // ));

    return myProjects.map((myProjects: singleProject) => (
      <div key={myProjects.id} className='imgWrap col-xs-12 col-sm-6 col-md-4 col-lg-3'>
        <p>{myProjects.name}</p>
        <img src={require('../img/thumbs/1.jpg')} />
      </div>
    ));

    // return (
    //   <React.Fragment>
    //     {/* <singleProject /> */}
    //     <div className='row'>
    //       <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3'>
    //         <img src={require('../img/thumbs/1.jpg')} />
    //       </div>
    //     </div>
    //   </React.Fragment>
    // );
  }
}

export default Gallery;
