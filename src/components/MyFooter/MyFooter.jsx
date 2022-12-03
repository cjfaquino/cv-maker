import React, { Component } from 'react';
import './MyFooter.css';
import Logo from './GitHub-Mark-Light-64px.png';

export default class MyFooter extends Component {
  render() {
    return (
      <footer>
        Copyright © 2022 <a href='https://github.com/cjfaquino/'>cjfaquino</a>
        <img src={Logo} alt='github user: cjfaquino' />
      </footer>
    );
  }
}
