import React, { Component } from 'react';
import { connect } from "react-redux";
import { getBasketList } from "./../../store/basket/selectors";

import BasketProductLine from './BasketProductLine';
import {getTotalAmount} from './basketUtility';
import {formatAmount} from "./../../util.js";

class Basket extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">

        {this.props.fetching
          ? <div>
              <span className="mt-4 mb-4">LOADING IN PROGRESS</span>
            </div>
          :
            <div>
              <div className="alert-primary pt-3 pb-3">RECAPITULATIF DE MON PANIER</div>

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
              <div class="alert alert-primary text-right">
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
