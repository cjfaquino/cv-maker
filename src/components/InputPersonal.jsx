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
    const elementClass = 'personal-info';

    return (
      <>
        {editable === true ? (
          <form onSubmit={this.onSubmitPersonal} className={elementClass}>
            <label>
              <p>{label.name}</p>
              <input
                type='text'
                placeholder={label.name}
                value={input.name}
                onChange={this.handleName}
                required
              />
            </label>
            <label>
              <p>{label.address}</p>
              <input
                type='text'
                placeholder={label.address}
                value={input.address}
                onChange={this.handleAddress}
                required
              />
            </label>
            <label>
              <p>{label.phone}</p>
              <input
                type='text'
                placeholder={label.phone}
                value={input.phone}
                onChange={this.handlePhone}
                required
              />
            </label>
            <button type='submit'>Save</button>
          </form>
        ) : (
          <DisplayPersonal
            elementClass={elementClass}
            label={label}
            personal={personal}
            editPersonal={this.editPersonal}
          />
        )}
      </>
    );
  }
}
