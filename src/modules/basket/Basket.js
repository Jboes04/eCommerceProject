import React, { Component } from 'react';
import { connect } from "react-redux";
import { getBasketList } from "./../../store/basket/selectors";

import BasketProductLine from './BasketProductLine';
import {getTotalAmount} from './basketUtility';
import {formatAmount} from "./../../util.js";

class Basket extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   //this.handleChange = this.handleChange.bind(this);
  //
  // }

  render() {
    return (
      <div className="container">

        {this.props.fetching
          ? <div>
              <span className="mt-4 mb-4" >LOADING IN PROGRESS</span>
            </div>
          :
            <div>
              <h1 className="alert-primary pt-3 pb-3 pink" style={{backgroundColor:"pink"}}>RECAPITULATIF DE MON PANIER</h1>

              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">ARTICLE</th>
                    <th scope="col">QUANTITE</th>
                    <th scope="col">SUPPRIMER</th>
                    <th scope="col">PRIX UNITAIRE</th>
                    <th scope="col">PRIX TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.basketList.map(product => {
                      return (<BasketProductLine
                        key={product.productId}
                        product={product}
                        />)
                      })
                  }
                </tbody>
              </table>
              <div className="alert alert-primary text-right" style={{backgroundColor:"pink"}}>
                Total panier : {formatAmount(getTotalAmount(this.props.basketList))}
              </div>
            </div>
        }
      </div>
    );
  }
}

const Connected = connect(getBasketList, null)(Basket);
export default Connected;
