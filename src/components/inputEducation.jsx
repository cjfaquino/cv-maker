import React, { Component } from 'react';

import DisplayEducation from './DisplayEducation';

export default class InputEducation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        name: '',
        city: '',
        state: '',
        degree: '',
        subject: '',
      },
      education: {},
      editable: true,
    };
  }

  handleDegree = (e) => {
    const { input } = this.state;
    this.setState({
      input: Object.assign(input, { degree: e.target.value }),
    });
  };

  handleSubject = (e) => {
    const { input } = this.state;
    this.setState({
      input: Object.assign(input, { subject: e.target.value }),
    });
  };

  handleName = (e) => {
    const { input } = this.state;
    this.setState({
      input: Object.assign(input, { name: e.target.value }),
    });
  };

  handleCity = (e) => {
    const { input } = this.state;
    this.setState({
      input: Object.assign(input, { city: e.target.value }),
    });
  };

  handleState = (e) => {
    const { input } = this.state;
    this.setState({
      input: Object.assign(input, { state: e.target.value }),
    });
  };

  editEducation = () => {
    const { education } = this.state;
    console.log(education);
    this.setState({
      editable: true,
      input: education,
    });
  };

  onSubmitEducation = (e) => {
    e.preventDefault();
    const { input } = this.state;
    this.setState({
      editable: false,
      education: input,
      input: {
        name: '',
        city: '',
        state: '',
        degree: '',
        subject: '',
      },
    });
  };

  render() {
    const { editable, education, input } = this.state;

    const label = {
      name: 'College',
      city: 'City',
      state: 'State',
      degree: 'Degree',
      subject: 'Subject',
    };
    return (
      <div id='education-inputs'>
        {editable ? (
          <form onSubmit={this.onSubmitEducation}>
            <label>
              {label.degree}
              <input
                type='text'
                value={input.degree}
                onChange={this.handleDegree}
              />
            </label>

            <label>
              {label.subject}
              <input
                type='text'
                value={input.subject}
                onChange={this.handleSubject}
              />
            </label>

            <label>
              {label.name}
              <input
                type='text'
                value={input.name}
                onChange={this.handleName}
              />
            </label>

            <label>
              {label.city}
              <input
                type='text'
                value={input.city}
                onChange={this.handleCity}
              />
            </label>

            <label>
              {label.state}
              <input
                type='text'
                value={input.state}
                onChange={this.handleState}
              />
            </label>

            <button type='submit'>Save</button>
          </form>
        ) : (
          <DisplayEducation
            label={label}
            education={education}
            editEducation={this.editEducation}
          />
        )}
      </div>
    );
  }
}
