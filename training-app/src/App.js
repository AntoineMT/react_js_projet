import React, { Component } from 'react';
import WalcomeComponent from './component/WalcomeComponent.js';
import FormAdditionComponent from './component/FormAdditionComponent.js';
import MessageriePage from './page/MessageriePage.js';

class App extends Component {

  render() {
    return (
      <div>
        <WalcomeComponent name="AntoineMT" />
        <MessageriePage />
        <FormAdditionComponent />
      </div>

    );
  }

}

export default App;
