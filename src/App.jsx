import './App.css';
import { v4 as uuidv4 } from 'uuid';

import React from 'react';
import InputPersonal from './components/InputPersonal';
import InputEducation from './components/InputEducation';
import InputExperience from './components/InputExperience';

export default class App extends React.PureComponent {
  constructor() {
    super();
    const expKey = uuidv4();
    const eduKey = uuidv4();
    this.state = {
      expArr: [
        <InputExperience
          key={expKey}
          uuid={expKey}
          class={'test'}
          deleteExperience={this.deleteExp}
        />,
      ],
      eduArr: [
        <InputEducation
          key={eduKey}
          uuid={eduKey}
          deleteEducation={this.deleteEdu}
        />,
      ],
    };
  }

  addExp = () => {
    const expKey = uuidv4();
    this.setState({
      expArr: this.state.expArr.concat(
        <InputExperience
          key={expKey}
          uuid={expKey}
          deleteExperience={this.deleteExp}
        />
      ),
    });
  };

  deleteExp = (uuid) => {
    const filtered = this.state.expArr.filter((el) => el.props.uuid !== uuid);
    this.setState({ expArr: filtered });
  };

  addEdu = () => {
    const eduKey = uuidv4();
    this.setState({
      eduArr: this.state.eduArr.concat(
        <InputEducation
          key={eduKey}
          uuid={eduKey}
          deleteEducation={this.deleteEdu}
        />
      ),
    });
  };

  deleteEdu = (uuid) => {
    const filtered = this.state.eduArr.filter((el) => el.props.uuid !== uuid);
    this.setState({ eduArr: filtered });
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
