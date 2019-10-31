import React, {Component} from 'react';

import '../App.css';

export default class TodoListComponent extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
           <li key={item.id}> Thibault : {item.text}</li>
        ))}
      </ul>
    );
  }
}
