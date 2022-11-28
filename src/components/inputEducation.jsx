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

  handleInput = (type) => (e) => {
    const { input } = this.state;
    let obj = {};
    obj[type] = e.target.value;
    this.setState({ input: Object.assign(input, obj) });
  };

  editEducation = () => {
    const { education } = this.state;
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
    const { uuid, deleteEducation } = this.props;
    const elementClass = 'education-info';

    const label = {
      name: 'College',
      city: 'City',
      state: 'State',
      degree: 'Degree',
      subject: 'Subject',
    };
    return (
      <>
        {editable ? (
          <form onSubmit={this.onSubmitEducation} className={elementClass}>
            <label>
              <p>{label.degree}</p>
              <input
                type='text'
                placeholder={label.degree}
                value={input.degree}
                onChange={this.handleInput('degree')}
              />
            </label>

            <label>
              <p>{label.subject}</p>
              <input
                type='text'
                placeholder={label.subject}
                value={input.subject}
                onChange={this.handleInput('subject')}
              />
            </label>

            <label>
              <p>{label.name}</p>
              <input
                type='text'
                placeholder={label.name}
                value={input.name}
                onChange={this.handleInput('name')}
              />
            </label>

            <label>
              <p>{label.city}</p>
              <input
                type='text'
                placeholder={label.city}
                value={input.city}
                onChange={this.handleInput('city')}
              />
            </label>

            <label>
              <p>{label.state}</p>
              <input
                type='text'
                placeholder={label.state}
                value={input.state}
                onChange={this.handleInput('state')}
              />
            </label>

            <button type='submit'>Save</button>
          </form>
        ) : (
          <DisplayEducation
            elementClass={elementClass}
            label={label}
            education={education}
            editEducation={this.editEducation}
            deleteEducation={deleteEducation}
            uuid={uuid}
          />
        )}
      </>
    );
  }
}
