import React, { Component } from 'react';

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

  handleName = (e) => {
    const { input } = this.state;
    this.setState({
      experience: Object.assign(input, { name: e.target.value }),
    });
  };

  handleCity = (e) => {
    const { input } = this.state;
    this.setState({
      experience: Object.assign(input, { city: e.target.value }),
    });
  };

  handleState = (e) => {
    const { input } = this.state;
    this.setState({
      experience: Object.assign(input, { state: e.target.value }),
    });
  };

  handleFrom = (e) => {
    const { input } = this.state;
    this.setState({
      experience: Object.assign(input, { from: e.target.value }),
    });
  };

  handleUntil = (e) => {
    const { input } = this.state;
    this.setState({
      experience: Object.assign(input, { until: e.target.value }),
    });
  };

  handlePosition = (e) => {
    const { input } = this.state;
    this.setState({
      experience: Object.assign(input, { position: e.target.value }),
    });
  };

  onSubmitExperience = (e) => {
    const { input } = this.state;
    e.preventDefault();
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
    console.log(this.state.experience);
  };

  render() {
    const { input, editable } = this.state;

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
          <form>
            <label>
              {label.name}
              <input
                type='text'
                value={input.name}
                onChange={this.handleName}
              />
            </label>

            <label>
              {label.position}
              <input
                type='text'
                value={input.position}
                onChange={this.handlePosition}
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

            <label>
              {label.from}
              <input
                type='text'
                value={input.from}
                onChange={this.handleFrom}
              />
            </label>

            <label>
              {label.until}
              <input
                type='text'
                value={input.until}
                onChange={this.handleUntil}
              />
            </label>

            <button type='submit'>Save</button>
          </form>
        ) : null}
      </div>
    );
  }
}
