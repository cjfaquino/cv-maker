import React, { Component } from 'react';

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

  onSubmitEducation = (e) => {
    e.preventDefault();
    const { input } = this.state;
    this.setState({
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
    const { editable } = this.state;

    const label = {
      name: 'College name',
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
              <input type='text' onChange={this.handleDegree} />
            </label>

            <label>
              {label.subject}
              <input type='text' onChange={this.handleSubject} />
            </label>

            <label>
              {label.name}
              <input type='text' onChange={this.handleName} />
            </label>

            <label>
              {label.city}
              <input type='text' onChange={this.handleCity} />
            </label>

            <label>
              {label.state}
              <input type='text' onChange={this.handleState} />
            </label>

            <button type='submit'>Save</button>
          </form>
        ) : null}
      </div>
    );
  }
}
