import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class LoginComponent extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.props.history.push('/Messagerie');
    
  }

  render() {
    return (
      <div>
        <label for="name">Name (1 to 15 characters):</label>
        <input type="text" id="name" name="name" required
          minlength="1" maxlength="15" size="15">
        </input>
        <label for="lastname">Lastname (1 to 15 characters):</label>
        <input type="text" id="lastname" name="lastname" required
          minlength="1" maxlength="15" size="15">
        </input>
        <input type="submit" value="Envoyer" 
        onClick={this.handleSubmit} 
        />
      </div>

    );
  }

}

export default withRouter (LoginComponent);
