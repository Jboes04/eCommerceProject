import React, { Component } from 'react';
import { connect } from "react-redux";
import { basketHandler } from "./../../store/basket/handlers";
import { getBasketList } from "./../../store/basket/selectors";
import {formatAmount} from "./../../util.js";
import {getTotalAmount, getPaymentAmount} from './../basket/basketUtility';
import StripeCheck from './../stripe/StripeCheckout';
import './../../App.css';

class BasketRecap extends Component {

getLocalInfo = () => {
  //console.log(JSON.parse(localStorage.getItem("address")));
  return JSON.parse(localStorage.getItem("address"));
}

  render() {
    console.log("props :", this.props);
    return (
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-4">

        <ul className="list-group">
          <li className="BasketRecap list-group-item">Adresse de livraison</li>
          <li className="list-group-item">{this.getLocalInfo().firstName} {this.getLocalInfo().lastName}</li>
          <li className="list-group-item">{this.getLocalInfo().address}</li>
          <li className="list-group-item">{this.getLocalInfo().postcode} - {this.getLocalInfo().city}</li>
        </ul>
        </div>
        <div className="col-8">
          <ul className="list-group">
            <li className="BasketRecap list-group-item">Liste des articles de votre panier</li>
            <li className="BasketRecap list-group-item">
              <th width="350">Article</th>
              <th width="110">Quantité</th>
              <th width="120">Prix unitaire</th>
              <th width="120">Prix total</th>
            </li>
            {this.props.basketList.map((product) =>
              <li key={product.productId} className="list-group-item">
                <td width="350">{product.label}</td>
                <td width="110">{product.quantity}</td>
                <td width="120">{formatAmount(product.price)}</td>
                <td width="120">{formatAmount(product.quantity*product.price)}</td>
              </li>
            )}
            <li className="BasketRecap list-group-item">
              <td width="350"></td>
              <td width="110"></td>
              <td width="120">PRIX TOTAL</td>
              <td width="120">{formatAmount(getTotalAmount(this.props.basketList))}</td>
            </li>

          </ul>
        </div>
        </div>
        <div className="pt-5">
          <StripeCheck amount={getPaymentAmount(this.props.basketList)} />

        </div>
      </div>
    );
  }
}

const Connected = connect(getBasketList, basketHandler)(BasketRecap);
export default Connected;
