import './App.css';

import React from 'react';
import InputForms from './components/InputForms';
import Overview from './components/Overview';
import Experience from './components/Experience';
import Education from './components/Education';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      forms: {
        personal: {
          firstName: '',
          lastName: '',
          email: '',
          address: '',
          phone: '',
          summary: '',
        },
        experience: { name: 'experience', array: [new Experience()] },
        education: { name: 'education', array: [new Education()] },
      },
      submit: false,
    };
  }

  getFormData = (obj) => {
    this.setState({ forms: obj, submit: true });
  };

  editFormData = () => {
    this.setState({ submit: false });
  };

  render() {
    const { forms, submit } = this.state;

    return (
      <div>
        {!submit ? (
          <InputForms getFormData={this.getFormData} object={forms} />
        ) : (
          <div>
            <button
              type='button'
              className='edit-button no-print'
              onClick={this.editFormData}
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

            <Overview object={forms} />
          </div>
        )}
      </div>
    );
  }
}
