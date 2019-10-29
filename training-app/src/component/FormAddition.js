import React, {Component} from 'react';
import '../App.css';

export default class FormAddition extends Component {
   constructor(props) {
    super(props);
    this.state = {Nom : '', Prenom : ''};


    this.Nom = this.Nom.bind(this);
    this.Prenom = this.Prenom.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  Nom(event) {
    // alert('Nom');
    this.setState({Nom: event.target.value});
  }
  Prenom(event) {
    // alert('Prenom');
    this.setState({Prenom: event.target.value});
  }

  handleSubmit() {
    alert('Le nom été soumis : ' + this.state.Nom +' Le Prenom été soumis : '+ this.state.Prenom);
  }

  render() {
    return (
<form>
        <label>
          Nom :
          <input type="text" value={this.state.Nom} onChange={this.Nom} />
        </label>
        <label>
          Prenom :
          <input type="text" value={this.state.Prenom} onChange={this.Prenom} />
        </label>
        <input type="submit" value="Envoyer" onClick={this.handleSubmit} />
        </form>

    );
  }
}
