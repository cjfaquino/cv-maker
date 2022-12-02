import '../styles/InputForms.css';

import React from 'react';
import InputPersonal from './InputPersonal';
import InputEducation from './InputEducation';
import InputExperience from './InputExperience';
import Experience from './Experience';
import Education from './Education';
import Overview from './Overview';

export default class InputForms extends React.Component {
  constructor() {
    super();
    this.state = {
      personal: {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        phone: '',
        summary: '',
      },
      experience: { name: 'experience', array: [new Experience()] },
      education: { name: 'education', array: [new Education()] },
    };
  }

  #updateStates = (objName, change) => {
    const { experience, education } = this.state;
    if (objName === 'experience') {
      return { experience: Object.assign(experience, change) };
    }
    if (objName === 'education') {
      return { education: Object.assign(education, change) };
    }
    throw Error('Could not catch objName');
  };

  handleInput = (type, uuid, objName) => (e) => {
    const { personal, experience, education } = this.state;
    const obj = {};
    obj[type] = e.target.value;

    // if updating personal
    if (!uuid && !objName) {
      return this.setState({ personal: Object.assign(personal, obj) });
    }

    // else continue updating arrays
    let array = [];
    if (objName === 'experience') {
      array = experience.array.slice();
    } else if (objName === 'education') {
      array = education.array.slice();
    }

    const newArr = array.map((item) => {
      if (item.uuid === uuid) return Object.assign(item, obj);
      return item;
    });

    const stateObj = { array: newArr };

    return this.setState(this.#updateStates(objName, stateObj));
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

        throw Error('Could not catch objName');
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
      <div id='display' className='wrapper'>
        <div id='forms'>
          <h3>Personal Information</h3>
          <InputPersonal personal={personal} handleInput={this.handleInput} />

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
          <button type='button' onClick={this.addExtra('experience')}>
            Add more
          </button>

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
          <button type='button' onClick={this.addExtra('education')}>
            Add more
          </button>
        </div>
        <Overview object={this.state} />
      </div>
    );
  }
}
