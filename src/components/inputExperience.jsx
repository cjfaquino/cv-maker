import React, { Component } from 'react';

export default class InputExperience extends Component {
  handleDelete = () => {
    const { exp, deleteExp } = this.props;
    deleteExp(exp.uuid);
  };

  render() {
    const { handleInput, exp, deleteExp } = this.props;
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
        <form className={elementClass}>
          <label>
            <p>{label.name}</p>
            <input
              type='text'
              placeholder={label.name}
              value={exp.name}
              onChange={handleInput('name', exp.uuid)}
            />
          </label>

          <label>
            <p>{label.position}</p>
            <input
              type='text'
              placeholder={label.position}
              value={exp.position}
              onChange={handleInput('position', exp.uuid)}
            />
          </label>

          <label>
            <p>{label.city}</p>
            <input
              type='text'
              placeholder={label.city}
              value={exp.city}
              onChange={handleInput('city', exp.uuid)}
            />
          </label>

          <label>
            <p>{label.state}</p>
            <input
              type='text'
              placeholder={label.state}
              value={exp.state}
              onChange={handleInput('state', exp.uuid)}
            />
          </label>

          <label>
            <p>{label.from}</p>
            <input
              type='text'
              placeholder={label.from}
              value={exp.from}
              onChange={handleInput('from', exp.uuid)}
            />
          </label>

          <label>
            <p>{label.until}</p>
            <input
              type='text'
              placeholder={label.until}
              value={exp.until}
              onChange={handleInput('until', exp.uuid)}
            />
          </label>

          <button type='button' onClick={this.handleDelete}>
            Delete
          </button>
        </form>
      </>
    );
  }
}
