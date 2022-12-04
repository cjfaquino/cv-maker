import React, { PureComponent } from 'react';
import './MyHeader.css';

export default class MyHeader extends PureComponent {
  render() {
    return (
      <header>
        <div className='wrapper'>
          <h1>CV Maker</h1>
        </div>
      </header>
    );
  }
}
