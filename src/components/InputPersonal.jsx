import React from 'react';
import CustomInput from './CustomInput';

const InputPersonal = (props) => {
  const { personal, handleInput } = props;
  const label = {
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    address: 'Address',
    phone: 'Phone',
    summary: 'Summary',
  };
  const elementClass = 'personal-info';

  return (
    <form className={elementClass}>
      <CustomInput
        type='firstName'
        label={label}
        obj={personal}
        handleInput={handleInput}
      />
      <CustomInput
        type='lastName'
        label={label}
        obj={personal}
        handleInput={handleInput}
      />
      <CustomInput
        type='address'
        label={label}
        obj={personal}
        handleInput={handleInput}
      />
      <CustomInput
        type='phone'
        label={label}
        obj={personal}
        handleInput={handleInput}
      />
      <CustomInput
        type='email'
        label={label}
        obj={personal}
        handleInput={handleInput}
      />
      <CustomInput
        textarea
        type='summary'
        label={label}
        obj={personal}
        handleInput={handleInput}
      />
    </form>
  );
};

export default InputPersonal;
