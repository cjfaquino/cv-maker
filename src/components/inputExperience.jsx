import React, { Component } from 'react';

import DisplayExperience from './DisplayExperience';

export default class InputExperience extends Component {
  constructor() {
    super();
    this.state = {
      editable: true,
      experience: {},
      input: {
        name: '',
        city: '',
        state: '',
        position: '',
        from: '',
        until: '',
      },
    };
  }

  handleInput = (type) => (e) => {
    const { input } = this.state;
    let obj = {};
    obj[type] = e.target.value;
    this.setState({ input: Object.assign(input, obj) });
  };

  editExperience = () => {
    const { experience } = this.state;
    this.setState({
      editable: true,
      input: experience,
    });
  };

  onSubmitExperience = (e) => {
    e.preventDefault();
    const { input } = this.state;
    this.setState({
      experience: input,
      editable: false,
      input: {
        name: '',
        city: '',
        state: '',
        position: '',
        from: '',
        until: '',
      },
    });
  };

  render() {
    const { input, editable, experience } = this.state;
    const { uuid, deleteExperience } = this.props;

    const label = {
      name: 'Company',
      city: 'City',
      state: 'State',
      position: 'Position',
      from: 'From',
      until: 'Until',
    };

    return (
      <div>
        {editable ? (
          <form onSubmit={this.onSubmitExperience}>
            <label>
              {label.name}
              <input
                type='text'
                value={input.name}
                onChange={this.handleInput('name')}
              />
            </label>

            <label>
              {label.position}
              <input
                type='text'
                value={input.position}
                onChange={this.handleInput('position')}
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

            <label>
              {label.from}
              <input
                type='text'
                value={input.from}
                onChange={this.handleInput('from')}
              />
            </label>

            <label>
              {label.until}
              <input
                type='text'
                value={input.until}
                onChange={this.handleInput('until')}
              />
            </label>

            <button type='submit'>Save</button>
          </form>
        ) : (
          <DisplayExperience
            label={label}
            experience={experience}
            editExperience={this.editExperience}
            deleteExperience={deleteExperience}
            uuid={uuid}
          />
        )}
      </div>
    );
  }
}
