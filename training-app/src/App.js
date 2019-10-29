import React, { Component } from 'react';
import Welcome from './component/Walcome.js';
// import Addition from './component/Addition.js';
import FormAddition from './component/FormAddition.js';

import Messagerie from './component/Messagerie.js';

class App extends Component {

  render() {
    return (
      <div>
        <Welcome name="AntoineMT" />
        <Messagerie />
        {/* <Welcome name="Sara" /> */}
        
        {/* <Addition nb1={4} nb2={2} /> */}
        <FormAddition />
      </div>

    );
  }

}

export default App;
