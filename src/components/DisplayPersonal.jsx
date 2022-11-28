import React from 'react';

export default class DisplayPersonal extends React.PureComponent {
  render() {
    const { personal, editPersonal, label, elementClass, fieldClasses } =
      this.props;
    return (
      <div className={elementClass}>
        <label>
          <p>{label.name}</p>
          <div>{personal.name}</div>
        </label>

        <label>
          <p>{label.address}</p>
          <div>{personal.address}</div>
        </label>

        <label>
          <p>{label.phone}</p>
          <div>{personal.phone}</div>
        </label>

        <button type='button' onClick={editPersonal}>
          Edit
        </button>
      </div>
    );
  }
}
