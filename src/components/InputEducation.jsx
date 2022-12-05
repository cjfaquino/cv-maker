import React from 'react';
import CustomInput from './CustomInput';

const InputEducation = (props) => {
  const handleDelete = () => {
    const { edu, deleteItem, objName } = props;
    deleteItem(edu.uuid, objName);
  };

  const { handleInput, edu, objName } = props;

  const label = {
    name: 'College',
    city: 'City',
    state: 'State',
    degree: 'Degree',
    subject: 'Subject',
  };
  return (
    <form className='education-info'>
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

      <button type='button' onClick={handleDelete} className='delete-button'>
        Delete
      </button>
    </form>
  );
};

export default InputEducation;
