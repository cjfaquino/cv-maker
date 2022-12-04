import './App.css';

import React from 'react';
import InputForms from './components/InputForms';
import MyHeader from './components/MyHeader/MyHeader';
import MyFooter from './components/MyFooter/MyFooter';

export default class App extends React.PureComponent {
  render() {
    return (
      <div id='app'>
        <MyHeader />

        <InputForms />

        <MyFooter />
      </div>
    );
  }
}
