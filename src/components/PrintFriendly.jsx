import React, { Component } from 'react';
import Overview from './Overview';

export default class PrintFriendly extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleEdit = () => {
    const { changeSubmit } = this.props;
    changeSubmit();
  };

  render() {
    const { object } = this.props;
    return (
      <div id='display' className='print-menu'>
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
