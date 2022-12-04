import React, { Component } from 'react';
import Overview from './Overview';

export default class PrintFriendly extends Component {
  handleEdit = () => {
    const { changeSubmit } = this.props;
    changeSubmit();
  };

  render() {
    const { object } = this.props;
    return (
      <div className='print-menu'>
        <div className='print-buttons'>
          <button
            type='button'
            className='edit-button no-print'
            onClick={this.handleEdit}
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
        </div>

        <Overview object={object} />
      </div>
    );
  }
}
