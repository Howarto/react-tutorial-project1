import React, { Component } from 'react';

export default class Title extends Component {
  constructor(props) {
    super(props);
    this.titleName = props.titleName;
  }

  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-2 text-center">{this.props.titleName}</h1>
      </div>
    );
  }
}
