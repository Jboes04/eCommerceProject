import React, { Component } from 'react';

import { connect } from "react-redux";
import { getBasketList } from "./../../store/basket/selectors";
import { basketHandler } from "./../../store/basket/handlers";

import StripeCheckout from 'react-stripe-checkout';

class StripeCheck extends Component {


  onToken = token => {
      fetch("/charge", {
        method: "POST",
        body: JSON.stringify({
          stripeData: token,
          basketList: this.props.basketList,
          amount: this.props.amount
        }),
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(data => {
          if (data.status === "succeeded") {
            console.log("Payment success :", data);
            this.props.clearBasket();
          } else {
            console.warn(data);
            // dispatch an error
          }
        });
    };


render(){
  return(
    <StripeCheckout
      token={this.onToken}
      amount={this.props.amount}
      currency="EUR"
      stripeKey={process.env.REACT_APP_PUBLISHABLE_KEY}
    />
  );
}

}

const Connected = connect(getBasketList, basketHandler)(StripeCheck);
export default Connected;
