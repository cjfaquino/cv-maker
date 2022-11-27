import './App.css';
import { v4 as uuidv4 } from 'uuid';

import React from 'react';
import InputPersonal from './components/InputPersonal';
import InputEducation from './components/InputEducation';
import InputExperience from './components/InputExperience';

export default class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      expArr: [<InputExperience key={uuidv4()} />],
      eduArr: [<InputEducation key={uuidv4()} />],
    };
  }

  addExp = () => {
    this.setState({
      expArr: this.state.expArr.concat(<InputExperience key={uuidv4()} />),
    });
  };

  addEdu = () => {
    this.setState({
      eduArr: this.state.eduArr.concat(<InputEducation key={uuidv4()} />),
    });
  };

  render() {
    const { expArr, eduArr } = this.state;
    return (
      <div>
        <h3>Personal Information</h3>
        <InputPersonal />

        <h3>Experience</h3>
        {expArr.map((exp) => exp)}
        <button onClick={this.addExp}>Add more</button>

        <h3>Education</h3>
        {eduArr.map((edu) => edu)}
        <button onClick={this.addEdu}>Add more</button>
      </div>
    );
  }
}
