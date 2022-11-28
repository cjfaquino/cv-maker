import { v4 as uuidv4 } from 'uuid';

import '../styles/InputForms.css';

import React from 'react';
import InputPersonal from './InputPersonal';
import InputEducation from './InputEducation';
import InputExperience from './InputExperience';
import Experience from './Experience';

export default class InputForms extends React.Component {
  constructor() {
    super();
    const eduKey = uuidv4();
    this.state = {
      expArr: [new Experience()],
      eduArr: [
        <InputEducation
          key={eduKey}
          uuid={eduKey}
          deleteEducation={this.deleteEdu}
        />,
      ],
    };
  }

  handleInput = (type, uuid) => (e) => {
    let obj = {};
    obj[type] = e.target.value;

    const newArr = this.state.expArr.map((exp) => {
      if (exp.uuid === uuid) return Object.assign(exp, obj);
      return exp;
    });
    this.setState({ expArr: newArr });
    console.log(this.state);
  };

  addExp = () => {
    this.setState({
      expArr: this.state.expArr.concat(new Experience()),
    });
  };

  deleteExp = (uuid) => {
    const { expArr } = this.state;
    const index = expArr.findIndex((exp) => exp.uuid === uuid);
    const newArr = expArr.slice();
    newArr.splice(index, 1);

    this.setState({ expArr: newArr });
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
    const { expArr, eduArr, testArr } = this.state;

    return (
      <div className='forms'>
        <h3>Personal Information</h3>
        <InputPersonal />

        <h3>Experience</h3>
        {expArr.map((test) => (
          <InputExperience
            key={test.uuid}
            handleInput={this.handleInput}
            deleteExp={this.deleteExp}
            exp={test}
          />
        ))}
        {/* {expArr.map((exp) => exp)} */}
        <button onClick={this.addExp}>Add more</button>

        <h3>Education</h3>
        {eduArr.map((edu) => edu)}
        <button onClick={this.addEdu}>Add more</button>
      </div>
    );
  }
}
