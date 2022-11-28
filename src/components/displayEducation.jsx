import React, { Component } from 'react';

export default class DisplayEducation extends Component {
  handleDelete = () => {
    const { uuid, deleteEducation } = this.props;
    deleteEducation(uuid);
  };

  render() {
    const { label, education, editEducation, elementClass } = this.props;
    return (
      <div className={elementClass}>
        <label>
          <p>{label.degree}</p>
          <div>{education.degree}</div>
        </label>

        <label>
          <p>{label.subject}</p>
          <div>{education.subject}</div>
        </label>

        <label>
          <p>{label.name}</p>
          <div>{education.name}</div>
        </label>

        <label>
          <p>{label.city}</p>
          <div>{education.city}</div>
        </label>

        <label>
          <p>{label.state}</p>
          <div>{education.state}</div>
        </label>

        <button onClick={editEducation}>Edit</button>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}
