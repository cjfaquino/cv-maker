import React, { Component } from 'react';
import CustomInput from './CustomInput';

export default class InputEducation extends Component {
  handleDelete = () => {
    const { edu, deleteItem, objName } = this.props;
    deleteItem(edu.uuid, objName);
  };

  render() {
    const { handleInput, edu, objName } = this.props;

    const elementClass = 'education-info';

    const label = {
      name: 'College',
      city: 'City',
      state: 'State',
      degree: 'Degree',
      subject: 'Subject',
    };
    return (
      <form className={elementClass}>
        <CustomInput
          type='degree'
          label={label}
          obj={edu}
          objName={objName}
          handleInput={handleInput}
        />
        <CustomInput
          type='subject'
          label={label}
          obj={edu}
          objName={objName}
          handleInput={handleInput}
        />
        <CustomInput
          type='name'
          label={label}
          obj={edu}
          objName={objName}
          handleInput={handleInput}
        />

        <div className='input-education-location'>
          <CustomInput
            type='city'
            label={label}
            obj={edu}
            objName={objName}
            handleInput={handleInput}
          />
          <CustomInput
            type='state'
            label={label}
            obj={edu}
            objName={objName}
            handleInput={handleInput}
          />
        </div>

        <button
          type='button'
          onClick={this.handleDelete}
          className='delete-button'
        >
          Delete
        </button>
      </form>
    );
  }
}
