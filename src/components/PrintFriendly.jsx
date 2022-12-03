import React, { Component } from 'react';
import Overview from './Overview';

export default class PrintFriendly extends Component {
  render() {
    const { object, editFormData } = this.props;
    return (
      <div>
        <button
          type='button'
          className='edit-button no-print'
          onClick={editFormData}
        >
          Edit
        </button>
        <button
          type='button'
          className='submit-button no-print'
          onClick={() => window.print()}
        >
          Print friendly version
        </button>

        <Overview object={object} />
      </div>
    );
  }
}
