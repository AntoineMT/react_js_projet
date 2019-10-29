import React, {Component} from 'react';
import '../App.css';

export default class Welcome extends Component {
    render() {
      return <h1>Conversation de {this.props.name}</h1>;
    }
  }
  // export default Welcome; export maniere differente
  // <Welcome name="Sara" /> et
  // <Welcome name="AntoineMT" />
  // <Addition nb1 = {4}  nb2 = {2} />

