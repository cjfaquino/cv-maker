import React from 'react';

export default class InputPersonal extends React.Component {
  render() {
    const { personal, handleInput } = this.props;
    const label = {
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      address: 'Address',
      phone: 'Phone',
      summary: 'Summary',
    };
    const elementClass = 'personal-info';

    return (
      <form className={elementClass}>
        <label>
          <p>{label.firstName}</p>
          <input
            type='text'
            placeholder={label.firstName}
            value={personal.firstName}
            onChange={handleInput('firstName')}
          />
        </label>
        <label>
          <p>{label.lastName}</p>
          <input
            type='text'
            placeholder={label.lastName}
            value={personal.lastName}
            onChange={handleInput('lastName')}
          />
        </label>
        <label>
          <p>{label.address}</p>
          <input
            type='text'
            placeholder={label.address}
            value={personal.address}
            onChange={handleInput('address')}
          />
        </label>
        <label>
          <p>{label.phone}</p>
          <input
            type='text'
            placeholder={label.phone}
            value={personal.phone}
            onChange={handleInput('phone')}
          />
        </label>
        <label>
          <p>{label.email}</p>
          <input
            type='email'
            placeholder={label.email}
            value={personal.email}
            onChange={handleInput('email')}
          />
        </label>
        <label>
          <p>{label.summary}</p>
          <textarea
            type='text'
            placeholder={label.summary}
            value={personal.summary}
            onChange={handleInput('summary')}
          />
        </label>
      </form>
    );
  }
}
