import React, { Component } from 'react';
import { connect } from "react-redux";
import './../../App.css';

import { basketHandler } from "../../store/basket/handlers";
import {formatAmount} from "./../../util.js";
import { completeDisplay } from "./productUtility";

const fetch = require("node-fetch");

class ProductDetails extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      "productdetails": []
    }
  }

  componentDidMount() {
    localStorage.clear();
    //console.log("product details", this.props.match);
      fetch(`https://decath-product-api.herokuapp.com${this.props.match.url}`)
        .catch((error) => {
          console.warn(error);
        })
        .then((response) => response.json())
        .then((resp) => {
          this.setState({"productdetails": resp})
          console.log(resp);
        })
  }

  componentDidUpdate(prevProps) {
    if(prevProps.match.url !== this.props.match.url) {
      this.componentDidMount();
    }
  }

  handlerAddProductToBasket = (id) => {
    this.props.addProductToBasket(id);
  }

  render() {
    return (
      <div className="container">
        <div class="row justify-content-center ProductDetails">
          <div class="col-4">

            <img style={{height: 300}} src={completeDisplay(this.state.productdetails)} className="rounded float-right" alt="..."/>
          </div>

            <div class="col-4">
              <div class="card">
              <div className="card-body" style={{height: 300}}>
                <span className="align-middle">
                <h4 className="card-title">{this.state.productdetails.title}</h4>
                <p className="card-text">{this.state.productdetails.description}</p>
                <table>
                  <td style={{width: 120}}></td>
                  <td style={{width: 130}}><span className={`mb-3 rating-static rating-${Math.round(this.state.productdetails.rating*2)/2*10}`}></span></td>
                  <td style={{width: 57}}></td>
                </table>
                <h5 className="card-title">{formatAmount(this.state.productdetails.min_price)}</h5>

                <button className="btn btn-primary" onClick={() => this.handlerAddProductToBasket(this.state.productdetails.id)}>Add to cart</button>
              </span>
              </div>
            </div>
          </div>
          </div>
        </div>
    );
  }
}

const Connected = connect(null, basketHandler)(ProductDetails);
export default Connected;
