import './App.css';

import React from 'react';
import InputForms from './components/InputForms';
import PrintFriendly from './components/PrintFriendly';
import MyHeader from './components/MyHeader/MyHeader';
import MyFooter from './components/MyFooter/MyFooter';
import ObjectModel from './components/ObjectModel';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      forms: new ObjectModel(),
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
