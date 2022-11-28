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
    const { id, deleteEducation } = this.props;

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
                onChange={this.handleInput('degree')}
              />
            </label>

            <label>
              {label.subject}
              <input
                type='text'
                value={input.subject}
                onChange={this.handleInput('subject')}
              />
            </label>

            <label>
              {label.name}
              <input
                type='text'
                value={input.name}
                onChange={this.handleInput('name')}
              />
            </label>

            <label>
              {label.city}
              <input
                type='text'
                value={input.city}
                onChange={this.handleInput('city')}
              />
            </label>

            <label>
              {label.state}
              <input
                type='text'
                value={input.state}
                onChange={this.handleInput('state')}
              />
            </label>

            <button type='submit'>Save</button>
          </form>
        ) : (
          <DisplayEducation
            label={label}
            education={education}
            editEducation={this.editEducation}
            deleteEducation={deleteEducation}
            id={id}
          />
        )}
      </div>
    );
  }
}
