import './App.css';

import React from 'react';
import InputForms from './components/InputForms';
import MyHeader from './components/MyHeader/MyHeader';
import MyFooter from './components/MyFooter/MyFooter';

const App = () => (
  <div id='app'>
    <MyHeader />
    <InputForms />
    <MyFooter />
  </div>
);

export default App;
