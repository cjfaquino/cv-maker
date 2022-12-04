import './App.css';

import React from 'react';
import InputForms from './components/InputForms';
import Experience from './components/Experience';
import Education from './components/Education';
import PrintFriendly from './components/PrintFriendly';
import MyHeader from './components/MyHeader/MyHeader';
import MyFooter from './components/MyFooter/MyFooter';

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
      <div id='app'>
        <MyHeader />
        {!submit ? (
          <InputForms getFormData={this.getFormData} object={forms} />
        ) : (
          <PrintFriendly object={forms} editFormData={this.editFormData} />
        )}
        <MyFooter />
      </div>
    );
  }
}
