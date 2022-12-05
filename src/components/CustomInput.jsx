import React from 'react';

const CustomInput = (props) => {
  const { type, label, obj, objName, handleInput, textarea } = props;
  return (
    <label>
      <p>{label[type]}</p>
      {!textarea ? (
        <input
          type='text'
          placeholder={label[type]}
          value={obj[type]}
          onChange={handleInput(type, obj.uuid, objName)}
        />
      ) : (
        <textarea
          type='text'
          placeholder={label[type]}
          value={obj[type]}
          onChange={handleInput(type, obj.uuid, objName)}
        />
      )}
    </label>
  );
};

export default CustomInput;
