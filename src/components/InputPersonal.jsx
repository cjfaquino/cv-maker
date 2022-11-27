import React from 'react';
import DisplayPersonal from './DisplayPersonal';

export default class InputPersonal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: { name: '', address: '', phone: '' },
      personal: {},
      editable: true,
    };
  }

  handleName = (e) => {
    const { input } = this.state;
    this.setState({
      input: Object.assign(input, { name: e.target.value }),
    });
  };

  handleAddress = (e) => {
    const { input } = this.state;
    this.setState({
      input: Object.assign(input, { address: e.target.value }),
    });
  };

  handlePhone = (e) => {
    const { input } = this.state;
    this.setState({
      input: Object.assign(input, { phone: e.target.value }),
    });
  };

  editPersonal = () => {
    const { personal } = this.state;
    this.setState({
      editable: true,
      input: personal,
    });
  };

  onSubmitPersonal = (e) => {
    const { input } = this.state;
    e.preventDefault();
    this.setState({
      editable: false,
      personal: input,
      input: { name: '', address: '', phone: '' },
    });
  };

  render() {
    const { personal, input, editable } = this.state;
    const label = { name: 'Full name', address: 'Address', phone: 'Phone' };
    return (
      <div id='personal-inputs'>
        {editable === true ? (
          <form onSubmit={this.onSubmitPersonal}>
            <label htmlFor='input-full-name'>
              {label.name}
              <input
                type='text'
                id='input-full-name'
                value={input.name}
                onChange={this.handleName}
                required
              />
            </label>
            <label htmlFor='input-address'>
              {label.address}
              <input
                type='text'
                id='input-address'
                value={input.address}
                onChange={this.handleAddress}
                required
              />
            </label>
            <label htmlFor='input-phone'>
              {label.phone}
              <input
                type='text'
                id='input-phone'
                value={input.phone}
                onChange={this.handlePhone}
                required
              />
            </label>
            <button type='submit'>Save</button>
          </form>
        ) : (
          <DisplayPersonal
            id='personal-inputs'
            label={label}
            personal={personal}
            editPersonal={this.editPersonal}
          />
        )}
      </div>
    );
  }
}
