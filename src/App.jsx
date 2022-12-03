import './App.css';

import React from 'react';
import InputForms from './components/InputForms';
import Overview from './components/Overview';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { forms: {}, submit: false };
  }

  getFormData = (obj) => {
    this.setState({ forms: obj, submit: true });
  };

  render() {
    const { forms, submit } = this.state;

    return (
      <div>
        {!submit ? (
          <InputForms getFormData={this.getFormData} />
        ) : (
          <div>
            <Overview object={forms} />

            <button type='button' className='edit-button'>
              Edit
            </button>
            <button type='button' className='submit-button'>
              Confirm
            </button>
          </div>
        )}
      </div>
    );
  }
}
