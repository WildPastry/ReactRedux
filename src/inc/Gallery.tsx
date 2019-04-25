import React, { Component } from 'react';

class Gallery extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      filter: ''
    };
    this.filter = this.filter.bind(this);
  }

  filter(value: any) {
    var filter = value;
    const initialState = this.props.projectsFromApp;
    const filteredResult = initialState.filter(
      (project: { fields: { indexOf: (arg0: string) => number } }) => {
        return project.fields.indexOf(filter) >= 0;
      }
    );
    console.log('Filtered by: ' + value);
    console.log(filteredResult);
  }

  componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div className='row'>
          <div className='buttons'>
            <h2 onClick={this.filter.bind(this, 'UX')}>UX</h2>
          </div>
        </div>
        <div className='row'>
          {this.props.projectsFromApp.map(
            (singleProject: {
              id: React.Key;
              name: React.ReactNode;
              fields: React.ReactNode;
              image: string;
              price: React.ReactNode;
            }) => (
              <div key={singleProject.id} className='imgWrap col-xs-12 col-sm-6 col-md-4 col-lg-4'>
                <p>{singleProject.name}</p>
                <p>{singleProject.fields}</p>
                <img src={require('./../img/thumb/' + singleProject.image)} alt='Gallery' />
                <p>{singleProject.price}</p>
              </div>
            )
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Gallery;
