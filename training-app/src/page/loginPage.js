import React, { Component } from 'react';
import LoginComponent from '../component/LoginComponent.js';


class LoginPage extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <LoginComponent />
      </div>
    );
  }
}



export default LoginPage;
