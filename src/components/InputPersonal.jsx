import React from 'react';

export default class InputPersonal extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      personal: { name: '', address: '', phone: '' },
    };
  }

  handleName = (e) => {
    const { personal } = this.state;
    this.setState({
      personal: Object.assign(personal, { name: e.target.value }),
    });
  };

  handleAddress = (e) => {
    const { personal } = this.state;
    this.setState({
      personal: Object.assign(personal, { address: e.target.value }),
    });
  };

  handlePhone = (e) => {
    const { personal } = this.state;
    this.setState({
      personal: Object.assign(personal, { phone: e.target.value }),
    });
  };

  onSubmitPersonal = (e) => {
    e.preventDefault();
    const test = this.state;
    console.log(test);
  };

  render() {
    return (
      <div id='personal-inputs'>
        <form onSubmit={this.onSubmitPersonal}>
          <label htmlFor='input-full-name'>
            Full name
            <input
              type='text'
              id='input-full-name'
              onChange={this.handleName}
            />
          </label>
          <label htmlFor='input-address'>
            Address
            <input
              type='text'
              id='input-address'
              onChange={this.handleAddress}
            />
          </label>
          <label htmlFor='input-phone'>
            Phone number
            <input type='text' id='input-phone' onChange={this.handlePhone} />
          </label>
          <button type='submit'>Save</button>
        </form>
        Display
      </div>
    );
  }
}
