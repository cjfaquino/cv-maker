import React, { Component } from 'react';

export default class DisplayEducation extends Component {
  render() {
    const { label, education, editEducation } = this.props;
    return (
      <>
        <div>{label.degree}</div>
        <div>{education.degree}</div>

        <div>{label.subject}</div>
        <div>{education.subject}</div>

        <div>{label.name}</div>
        <div>{education.name}</div>

        <div>{label.city}</div>
        <div>{education.city}</div>

        <div>{label.state}</div>
        <div>{education.state}</div>

        <button onClick={editEducation}>Edit</button>
      </>
    );
  }
}
