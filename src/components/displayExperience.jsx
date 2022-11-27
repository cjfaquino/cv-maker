import React, { Component } from 'react';

export default class DisplayExperience extends Component {
  render() {
    const { label, experience, editExperience } = this.props;
    return (
      <>
        <div>{label.name}</div>
        <div>{experience.name}</div>

        <div>{label.position}</div>
        <div>{experience.position}</div>

        <div>{label.city}</div>
        <div>{experience.city}</div>

        <div>{label.state}</div>
        <div>{experience.state}</div>

        <div>{label.from}</div>
        <div>{experience.from}</div>

        <div>{label.until}</div>
        <div>{experience.until}</div>

        <button onClick={editExperience}>Edit</button>
      </>
    );
  }
}
