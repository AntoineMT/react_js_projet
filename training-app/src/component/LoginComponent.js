import React, { Component } from 'react';

class LoginComponent extends Component {

  render() {
    return (
      <div>
        <label for="name">Name (4 to 8 characters):</label>
        <input type="text" id="name" name="name" required
          minlength="4" maxlength="8" size="10">
        </input>
      </div>

    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

export default LoginComponent;
