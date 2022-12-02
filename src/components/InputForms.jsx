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
      experience: { name: 'experience', array: [new Experience()] },
      education: { name: 'education', array: [new Education()] },
    };
  }

  handleInput = (type, uuid, arrayName) => (e) => {
    let obj = {};
    obj[type] = e.target.value;
    let array = [];
    if (arrayName === 'experience') {
      array = this.state.experience.array.slice();
    } else if (arrayName === 'education') {
      array = this.state.education.array.slice();
    }

    const newArr = array.map((item) => {
      if (item.uuid === uuid) return Object.assign(item, obj);
    });

    let stateObj = {};
    stateObj['array'] = newArr;

    this.setState(() => {
      if (arrayName === 'experience') {
        return { experience: Object.assign(this.state.experience, stateObj) };
      } else if (arrayName === 'education') {
        return { education: Object.assign(this.state.education, stateObj) };
      }
    });

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
    const { personal, experience, education } = this.state;
    const { array: expArr, name: expObjName } = experience;
    const { array: eduArr, name: eduObjName } = education;

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
            objName={expObjName}
            exp={test}
          />
        ))}
        {/* {expArr.map((exp) => exp)} */}
        <button onClick={this.addExp}>Add more</button>

        <h3>Education</h3>
        {eduArr.map((edu) => (
          <InputEducation
            key={edu.uuid}
            handleInput={this.handleInput}
            deleteEdu={this.deleteEdu}
            objName={eduObjName}
            edu={edu}
          />
        ))}
        {/* {eduArr.map((edu) => edu)} */}
        <button onClick={this.addEdu}>Add more</button>
      </div>
    );
  }
}
