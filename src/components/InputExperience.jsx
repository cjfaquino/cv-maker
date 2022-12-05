import React from 'react';
import CustomInput from './CustomInput';

const InputExperience = (props) => {
  const handleDelete = () => {
    const { exp, deleteItem, objName } = props;
    deleteItem(exp.uuid, objName);
  };

  const { handleInput, exp, objName } = props;
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
    <form className='experience-info'>
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

      <button type='button' onClick={handleDelete} className='delete-button'>
        Delete
      </button>
    </form>
  );
};

export default InputExperience;
