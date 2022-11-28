import React, { Component } from 'react';

export default class DisplayExperience extends Component {
  handleDelete = () => {
    const { uuid, deleteExperience } = this.props;
    deleteExperience(uuid);
  };

  render() {
    const { label, experience, editExperience, elementClass } = this.props;
    return (
      <div className={elementClass}>
        <label>
          <p>{label.name}</p>
          <div>{experience.name}</div>
        </label>

        <label>
          <p>{label.position}</p>
          <div>{experience.position}</div>
        </label>

        <label>
          <p>{label.city}</p>
          <div>{experience.city}</div>
        </label>

        <label>
          <p>{label.state}</p>
          <div>{experience.state}</div>
        </label>

        <label>
          <p>{label.from}</p>
          <div>{experience.from}</div>
        </label>

        <label>
          <p>{label.until}</p>
          <div>{experience.until}</div>
        </label>

        <button onClick={editExperience}>Edit</button>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}
