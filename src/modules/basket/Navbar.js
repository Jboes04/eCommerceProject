import React, { Component } from 'react';
import Basket from './Basket';

class Navbar extends Component {

  render() {
    return (
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-light p-4">
            <h5 className="text-dark h4">RECAPITULATIF DE VOTRE PANIER</h5>
            <span className="text-muted">Rendre accessible le code au plus grand nombre...</span>
            <Basket />
          </div>
        </div>
        <nav className="navbar navbar-dark bg-primary">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-cart-arrow-down"></i>
          </button>
        </nav>
      </div>
    );
  }
}

export default Navbar;
