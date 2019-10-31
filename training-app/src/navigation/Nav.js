import React, { Component } from 'react';
import WalcomeComponent from '../component/WalcomeComponent.js';
import FormAdditionComponent from '../component/FormAdditionComponent.js';
import MessageriePage from '../page/MessageriePage.js';
import LoginPage from '../page/LoginPage.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// class App extends Component {
export default function Nav() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/Messagerie">Messagerie</Link>
            </li>
            <li>
              <Link to="/Addition">Addition</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/Messagerie">
            <MessageriePage />
          </Route>
          <Route path="/Addition">
            <FormAdditionComponent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Login() {
  return <h2>Login</h2>
}

function Messagerie() {
  return <h2>Messagerie</h2>;
}

function Addition() {
  return <h2>Users</h2>;
}
      // <WalcomeComponent name="AntoineMT" />

      // <FormAdditionComponent />