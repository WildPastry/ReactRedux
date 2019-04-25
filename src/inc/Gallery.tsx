import React, { Component } from 'react';
import projectData from './../data/projects.json';
// import { singleProject } from './Gallery';
// console.log(projectData);
// console.log(projectData[0].name);
// var projectData = myProjects;
// console.log(myProjects);
// export interface singleProject {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   desc: string;
// }

class Gallery extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      projects: projectData,
      filter: ''
    };
    this.filter = this.filter.bind(this);
  }

  filter(value: any) {
    console.log(value);
    // this.setState({ filter: event.target.value });
  }
    // TRIAL AND ERROR
  //   var LevelFilter = React.createClass({

  //     render: function(){
  //         return this.props.tags.filter(tag => tag.taglevel === this.props.targetLevel).map(tag => <a onClick={this.props.onClick}>{tag.name}</a>);
  //     }
  // });
  
  // <LevelFilter onClick={onClick} targetLevel={1}/>
  // <LevelFilter onClick={onClick} targetLevel={2}/>
    // TRIAL AND ERROR
  render() {
    var myProjects = this.state['projects'];
    console.log(myProjects);

    return (
      <React.Fragment>
        <div className='row'>
          <div className='buttons'>
            <p onClick={this.filter.bind(this, myProjects[0].fields)}>FIELDS</p>
          </div>
        </div>
        <div className='row'>
          {myProjects.map(
            (singleProject: {
              id: React.Key;
              name: React.ReactNode;
              image: string;
              price: React.ReactNode;
            }) => (
              <div key={singleProject.id} className='imgWrap col-xs-12 col-sm-6 col-md-4 col-lg-4'>
                <p>{singleProject.name}</p>
                <img src={require('./../img/thumb/' + singleProject.image)} alt='Gallery' />
                <p>{singleProject.price}</p>
              </div>
            )
          )}
        </div>
      </React.Fragment>
    );

    // if (myProjects.fields === 'UX') {
    // filterProjects = filterProjects.filter(x => {
    // 	if (x.name.toLowerCase().indexOf(this.state.filter) !== -1) {
    // 	return true;
    // }
    // 	return false;
    // };

    // return myProjects.map(myProjects (
    //   <p
    //     key={myProjects.price}>
    //   </p>
    // ));

    // return myProjects.map((myProjects: singleProject) => (
    //   <div key={myProjects.id} className='imgWrap col-xs-12 col-sm-6 col-md-4 col-lg-4'>
    //     <p>{myProjects.name}</p>
    //     <img src={require('./../img/thumb/' + myProjects.image)} alt='Gallery' />
    //     <p>{myProjects.price}</p>
    //   </div>
    // ));

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
