import './App.css';

import React from 'react';
import InputPersonal from './components/InputPersonal';
import InputEducation from './components/InputEducation';
import InputExperienc from './components/InputExperience';

export default class App extends React.PureComponent {
  render() {
    return (
      <div>
        <InputPersonal />
        <InputEducation />
        <InputExperienc />
      </div>
    );
  }
}
