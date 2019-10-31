import React, { Component } from 'react';
import '../App.css';

export default class WalcomeComponent extends Component {
  render() {
    return <h1>Conversation de {this.props.name}</h1>;
  }
}


