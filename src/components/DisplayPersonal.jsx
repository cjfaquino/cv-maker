import React from 'react';

export default class DisplayPersonal extends React.PureComponent {
  render() {
    const { personal, editPersonal, label } = this.props;
    return (
      <>
        <div className='label-name'>{label.name}</div>
        <div>{personal.name}</div>

        <div className='label-address'>{label.address}</div>
        <div>{personal.address}</div>

        <div className='label-phone'>{label.phone}</div>
        <div>{personal.phone}</div>

        <button type='button' onClick={editPersonal}>
          Edit
        </button>
      </>
    );
  }
}
