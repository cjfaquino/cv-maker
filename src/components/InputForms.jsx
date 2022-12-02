import { v4 as uuidv4 } from 'uuid';

import '../styles/InputForms.css';

import React from 'react';
import InputPersonal from './InputPersonal';
import InputEducation from './InputEducation';
import InputExperience from './InputExperience';
import Experience from './Experience';
import Education from './Education';

export default class InputForms extends React.Component {
  constructor() {
    super();
    this.state = {
      personal: { name: '', address: '', phone: '' },
      expArr: [new Experience()],
      eduArr: [new Education()],
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

  handleEdu = (type, uuid) => (e) => {
    let obj = {};
    obj[type] = e.target.value;

    const newArr = this.state.eduArr.map((exp) => {
      if (exp.uuid === uuid) return Object.assign(exp, obj);
      return exp;
    });
    this.setState({ eduArr: newArr });
    console.log(this.state);
  };

  handlePersonal = (type) => (e) => {
    const { personal } = this.state;
    let obj = {};
    obj[type] = e.target.value;

    this.setState({ personal: Object.assign(personal, obj) });
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
    this.setState({
      eduArr: this.state.eduArr.concat(new Education()),
    });
  };

  deleteEdu = (uuid) => {
    const { eduArr } = this.state;
    const index = eduArr.findIndex((exp) => exp.uuid === uuid);
    const newArr = eduArr.slice();
    newArr.splice(index, 1);

    this.setState({ eduArr: newArr });
  };

  render() {
    const { personal, expArr, eduArr } = this.state;

    return (
      <div className='forms'>
        <h3>Personal Information</h3>
        <InputPersonal personal={personal} handleInput={this.handlePersonal} />

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
        {eduArr.map((edu) => (
          <InputEducation
            key={edu.uuid}
            handleInput={this.handleEdu}
            deleteEdu={this.deleteEdu}
            edu={edu}
          />
        ))}
        {/* {eduArr.map((edu) => edu)} */}
        <button onClick={this.addEdu}>Add more</button>
      </div>
    );
  }
}
