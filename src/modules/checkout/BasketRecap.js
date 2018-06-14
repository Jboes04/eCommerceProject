import React, { Component } from 'react';
import { connect } from "react-redux";
import { basketHandler } from "./../../store/basket/handlers";
import { getBasketList } from "./../../store/basket/selectors";
import {formatAmount} from "./../../util.js";
import {getTotalAmount} from './../basket/basketUtility';

class BasketRecap extends Component {

getLocalInfo = () => {
  console.log(JSON.parse(localStorage.getItem("address")));
  return JSON.parse(localStorage.getItem("address"));
}

  render() {
    console.log("props :", this.props);
    return (
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-4">

        <ul class="list-group">
          <li class="list-group-item">{this.getLocalInfo().firstName} {this.getLocalInfo().lastName}</li>
          <li class="list-group-item">{this.getLocalInfo().address}</li>
          <li class="list-group-item">{this.getLocalInfo().postcode} - {this.getLocalInfo().city}</li>
        </ul>
        </div>
        <div className="col-8">
          <ul class="list-group">
            {this.props.basketList.map((product) =>
              <li class="list-group-item">{product.label} - {product.quantity} - {formatAmount(product.price)} - {formatAmount(product.quantity*product.price)}</li>
            )}
            <li class="list-group-item">TOTAL PRICE: {formatAmount(getTotalAmount(this.props.basketList))}</li>

          </ul>
        </div>
        </div>
      </div>
    );
  }
}

const Connected = connect(getBasketList, basketHandler)(BasketRecap);
export default Connected;
