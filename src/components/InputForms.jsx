import '../styles/InputForms.css';

import React, { useState } from 'react';
import InputPersonal from './InputPersonal';
import InputEducation from './InputEducation';
import InputExperience from './InputExperience';
import Experience from './Experience';
import Education from './Education';
import Overview from './Overview';
import ObjectModel from './ObjectModel';
import PrintFriendly from './PrintFriendly';

const InputForms = () => {
  const [storedObj, setStoredObj] = useState(new ObjectModel());
  const [submitState, setSubmitState] = useState(false);

  const mergeObjects = (objName, change) => {
    const { personal, experience, education } = storedObj;
    if (objName === 'experience') {
      return {
        ...storedObj,
        experience: { ...experience, ...change },
      };
    }
    if (objName === 'education') {
      return {
        ...storedObj,
        education: { ...education, ...change },
      };
    }

    if (objName === 'personal') {
      return {
        ...storedObj,
        personal: { ...personal, ...change },
      };
    }
    throw Error('Could not catch objName');
  };

  const handleInput = (type, uuid, objName) => (e) => {
    const { experience, education } = storedObj;
    const obj = {};
    obj[type] = e.target.value;

    // if updating personal
    if (!uuid && !objName) {
      return setStoredObj(mergeObjects('personal', obj));
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

    const changed = { array: newArr };

    return setStoredObj(mergeObjects(objName, changed));
  };

  const addExtra = (objName) => () => {
    const { experience, education } = storedObj;
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

    setStoredObj(mergeObjects(objName, obj));
  };

  const deleteItem = (uuid, objName) => {
    const { experience, education } = storedObj;

    let index = null;
    let array = [];

    if (objName === 'experience') {
      array = experience.array.slice();
    } else if (objName === 'education') {
      array = education.array.slice();
    }
    index = array.findIndex((item) => item.uuid === uuid);

    array.splice(index, 1);
    const changed = { array };

    setStoredObj(mergeObjects(objName, changed));
  };

  const changeSubmit = () => {
    setSubmitState(false);
  };

  const handleSubmit = () => {
    setSubmitState(true);
  };

  const handleReset = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStoredObj(new ObjectModel());
  };

  const { personal, experience, education } = storedObj;
  const { array: expArr, name: expObjName } = experience;
  const { array: eduArr, name: eduObjName } = education;

  const currentDispaly = () => {
    if (submitState) {
      return (
        <PrintFriendly
          object={{ personal, experience, education }}
          changeSubmit={changeSubmit}
        />
      );
    }

    if (!submitState) {
      return (
        <div id='display' className='wrapper'>
          <div id='forms'>
            <h3>Personal Information</h3>
            <InputPersonal personal={personal} handleInput={handleInput} />
            <h3>Experience</h3>
            {expArr.map((test) => (
              <InputExperience
                key={test.uuid}
                handleInput={handleInput}
                deleteItem={deleteItem}
                objName={expObjName}
                exp={test}
              />
            ))}
            <button
              type='button'
              onClick={addExtra('experience')}
              className='add-button'
            >
              Add more
            </button>
            <h3>Education</h3>
            {eduArr.map((edu) => (
              <InputEducation
                key={edu.uuid}
                handleInput={handleInput}
                deleteItem={deleteItem}
                objName={eduObjName}
                edu={edu}
              />
            ))}
            <button
              type='button'
              onClick={addExtra('education')}
              className='add-button'
            >
              Add more
            </button>
            <div className='final-buttons'>
              <button
                type='button'
                className='reset-button'
                onClick={handleReset}
              >
                Reset
              </button>
              <button
                type='button'
                className='submit-button'
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
          <Overview object={storedObj} sticky />
        </div>
      );
    }
    return null;
  };

  return currentDispaly();
};

export default InputForms;
