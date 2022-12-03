import React, { Component } from 'react';
import CustomInput from './CustomInput';

export default class InputExperience extends Component {
  handleDelete = () => {
    const { exp, deleteItem, objName } = this.props;
    deleteItem(exp.uuid, objName);
  };

  render() {
    const { handleInput, exp, objName } = this.props;
    const elementClass = 'experience-info';

    const label = {
      name: 'Company',
      city: 'City',
      state: 'State',
      position: 'Position',
      from: 'From',
      until: 'Until',
      summary: 'Summary',
    };

    return (
      <form className={elementClass}>
        <CustomInput
          type='name'
          label={label}
          obj={exp}
          objName={objName}
          handleInput={handleInput}
        />
        <CustomInput
          type='position'
          label={label}
          obj={exp}
          objName={objName}
          handleInput={handleInput}
        />

        <div className='input-experience-location'>
          <CustomInput
            type='city'
            label={label}
            obj={exp}
            objName={objName}
            handleInput={handleInput}
          />
          <CustomInput
            type='state'
            label={label}
            obj={exp}
            objName={objName}
            handleInput={handleInput}
          />
        </div>

        <div className='input-experience-dates'>
          <CustomInput
            type='from'
            label={label}
            obj={exp}
            objName={objName}
            handleInput={handleInput}
          />
          <CustomInput
            type='until'
            label={label}
            obj={exp}
            objName={objName}
            handleInput={handleInput}
          />
        </div>

        <div className='input-experience-summary'>
          <CustomInput
            textarea
            type='summary'
            label={label}
            obj={exp}
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
