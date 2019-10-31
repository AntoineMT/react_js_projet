import React, { Component } from 'react';
import '../App.css';

export default class FormAdditionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { Nombre1: '', Nombre2: '' };


    this.Nombre1 = this.Nombre1.bind(this);
    this.Nombre2 = this.Nombre2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  Nombre1(event) {
    this.setState({ Nombre1: event.target.value });
  }
  Nombre2(event) {
    this.setState({ Nombre2: event.target.value });
  }

  handleSubmit() {

    let Nb1 = parseInt(this.state.Nombre1);
    let Nb2 = parseInt(this.state.Nombre2);
    let $somme = Nb1 + Nb2
    let $message = 'Calcul de : ' + Nb1 + ' et ' + Nb2 + ' est egal à ' + $somme;
    alert($message);

  }

  render() {
    return (
      <form>
        <label>
          Nombre 1 :
          <input type="text" value={this.state.Nombre1} onChange={this.Nombre1} />
        </label>
        <label>
          Nombre 2 :
          <input type="text" value={this.state.Nombre2} onChange={this.Nombre2} />
        </label>
        <input type="submit" value="Envoyer" onClick={this.handleSubmit} />
      </form>

    );
  }
}
