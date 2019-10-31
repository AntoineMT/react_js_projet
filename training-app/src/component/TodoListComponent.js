import React, {Component} from 'react';

import '../App.css';

export default class TodoListComponent extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
           <li key={item.id}> Antoine : {item.text}</li>
        ))}
      </ul>
    );
  }
}
