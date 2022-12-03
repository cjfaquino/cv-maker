import React, { Component } from 'react';

export default class CustomInput extends Component {
  render() {
    const { type, label, obj, objName, handleInput, textarea } = this.props;
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
  }
}
