import React, { Component } from 'react';

import StripeCheckout from 'react-stripe-checkout';

export default class StripeCheck extends Component {

  onToken = token => {
      fetch("/charge", {
        method: "POST",
        body: JSON.stringify({
          stripeData: token,
          products: [
            {id: "42", quantity: 2},
            {id: "1337", quantity: 1}
          ]
        }),
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(data => {
          if (data.status === "succeeded") {
            console.log(data);
            // dispatch a success
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
