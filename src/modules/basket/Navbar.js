import React, { Component } from 'react';
import Basket from './Basket';
import { connect } from "react-redux";
import { Cookies } from 'react-cookie';
import { Route, withRouter } from 'react-router-dom';
import { getProfileInfo} from "../../store/profile/selectors";
import { profileHandler } from "../../store/profile/handlers";



// console.log("cookie value ",cookie.load('connect.sid'));



class Navbar extends Component {


  render() {
    const imagePath = this.props.profileInfo.Paa
    return (
      <div className="pos-f-t">
      <nav className="navbar navbar-dark bg-primary">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-cart-arrow-down"></i>
        </button>
          <img src={imagePath} style={{
             borderWidth:1,
             borderColor:'rgba(0,0,0,0.2)',
             alignItems:'center',
             justifyContent:'center',
             width:50,
             height:50,
             backgroundColor:'#fff',
             borderRadius:100,
           }}/>
          <div
            className="g-signin2"
            data-onsuccess="googleConnectCallback"
            data-theme="light"
          />
      </nav>
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-light p-4">
            <h5 className="text-dark h4">RECAPITULATIF DE VOTRE PANIER</h5>
            <span className="text-muted">Rendre accessible le code au plus grand nombre...</span>
            <Basket />
          </div>
        </div>

      </div>
    );
  }
}

const Connected = connect(getProfileInfo, profileHandler)(Navbar);
export default Connected;
