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

  #updateStates = (objName, change) => {
    const { experience, education } = this.state;
    if (objName === 'experience') {
      return { experience: Object.assign(experience, change) };
    } else if (objName === 'education') {
      return { education: Object.assign(education, change) };
    }
  };

  handleInput = (type, uuid, objName) => (e) => {
    let obj = {};
    obj[type] = e.target.value;
    let array = [];
    if (objName === 'experience') {
      array = this.state.experience.array.slice();
    } else if (objName === 'education') {
      array = this.state.education.array.slice();
    }

    const newArr = array.map((item) => {
      if (item.uuid === uuid) return Object.assign(item, obj);
      return item;
    });

    let stateObj = { array: newArr };

    this.setState(this.#updateStates(objName, stateObj));

    console.log(this.state);
  };

  handlePersonal = (type) => (e) => {
    const { personal } = this.state;
    let obj = {};
    obj[type] = e.target.value;

    this.setState({ personal: Object.assign(personal, obj) });
  };

  addExtra = (objName) => () => {
    const { experience, education } = this.state;
    const obj = {
      array: (() => {
        if (objName === 'experience') {
          return experience.array.concat(new Experience());
        }

        if (objName === 'education') {
          return education.array.concat(new Education());
        }
      })(),
    };

    this.setState(this.#updateStates(objName, obj));
  };

  deleteItem = (uuid, objName) => {
    const { experience, education } = this.state;

    let index = null;
    let newArr = [];

    if (objName === 'experience') {
      index = experience.array.findIndex((exp) => exp.uuid === uuid);
      newArr = experience.array.slice();
    } else if (objName === 'education') {
      index = education.array.findIndex((edu) => edu.uuid === uuid);
      newArr = education.array.slice();
    }
    newArr.splice(index, 1);
    const obj = { array: newArr };

    this.setState(this.#updateStates(objName, obj));
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
            deleteItem={this.deleteItem}
            objName={expObjName}
            exp={test}
          />
        ))}
        {/* {expArr.map((exp) => exp)} */}
        <button onClick={this.addExtra('experience')}>Add more</button>

        <h3>Education</h3>
        {eduArr.map((edu) => (
          <InputEducation
            key={edu.uuid}
            handleInput={this.handleInput}
            deleteItem={this.deleteItem}
            objName={eduObjName}
            edu={edu}
          />
        ))}
        {/* {eduArr.map((edu) => edu)} */}
        <button onClick={this.addExtra('education')}>Add more</button>
      </div>
    );
  }
}
