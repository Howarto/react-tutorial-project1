import React, { Component } from 'react';

export default class TodoForm extends Component {
  render() {
    return (
      <div className="input-group input-group-lg">
        <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" ref={(node) => {
          this.input = node;
        }} />
        <div className="input-group-btn">
          <button className="btn btn-outline-secondary" type="button" onClick={() => {
            this.props.onClick(this.input.value);
            this.input.value = '';
            this.input.focus();
          }}>+</button>
        </div>
      </div>
    );
  }
}
