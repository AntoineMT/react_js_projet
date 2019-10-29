import React, {Component} from 'react';
import '../App.css';

export default class Addition extends Component {
    render() {
      var $somme =  Math.pow( this.props.nb1, this.props.nb2)
      var $message =  <p> Calcul de :  {this.props.nb1} et {this.props.nb2} est egal à {$somme}</p>;
      return $message ;
    }
  }
  // export default Welcome; export maniere differente