import React from 'react';

export default class InputPersonal extends React.Component {
  render() {
    const { personal, handleInput } = this.props;
    const label = { name: 'Full name', address: 'Address', phone: 'Phone' };
    const elementClass = 'personal-info';

    return (
      <form className={elementClass}>
        <label>
          <p>{label.name}</p>
          <input
            type='text'
            placeholder={label.name}
            value={personal.name}
            onChange={handleInput('name')}
            required
          />
        </label>
        <label>
          <p>{label.address}</p>
          <input
            type='text'
            placeholder={label.address}
            value={personal.address}
            onChange={handleInput('address')}
            required
          />
        </label>
        <label>
          <p>{label.phone}</p>
          <input
            type='text'
            placeholder={label.phone}
            value={personal.phone}
            onChange={handleInput('phone')}
            required
          />
        </label>
      </form>
    );
  }
}
