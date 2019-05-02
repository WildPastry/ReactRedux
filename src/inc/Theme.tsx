import React, { Component } from 'react';

class Theme extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
    this.changePageFromTheme = this.changePageFromTheme.bind(this);
  }

  changePageFromTheme(value: any) {
    this.props.changePageFromTheme(value);
  }

  componentDidMount() {
    console.log('Theme component loaded...');
  }

  render() {
    return (
      <React.Fragment>
      </React.Fragment>
    );
  }
}

export default Theme;
