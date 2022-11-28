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
    const elementClass = 'experience-info';

    const label = {
      name: 'Company',
      city: 'City',
      state: 'State',
      position: 'Position',
      from: 'From',
      until: 'Until',
    };

    return (
      <>
        {editable ? (
          <form onSubmit={this.onSubmitExperience} className={elementClass}>
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
              <p>{label.position}</p>
              <input
                type='text'
                placeholder={label.position}
                value={input.position}
                onChange={this.handleInput('position')}
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

            <label>
              <p>{label.from}</p>
              <input
                type='text'
                placeholder={label.from}
                value={input.from}
                onChange={this.handleInput('from')}
              />
            </label>

            <label>
              <p>{label.until}</p>
              <input
                type='text'
                placeholder={label.until}
                value={input.until}
                onChange={this.handleInput('until')}
              />
            </label>

            <button type='submit'>Save</button>
          </form>
        ) : (
          <DisplayExperience
            elementClass={elementClass}
            label={label}
            experience={experience}
            editExperience={this.editExperience}
            deleteExperience={deleteExperience}
            uuid={uuid}
          />
        )}
      </>
    );
  }
}
