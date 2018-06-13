import React, { Component } from 'react';
import { connect } from "react-redux";
import { getBasketList } from "./../../store/basket/selectors";
import { basketHandler } from "./../../store/basket/handlers";

import BasketProductLine from './BasketProductLine';
import {getTotalAmount, containAllInformations} from './basketUtility';
import {formatAmount} from "./../../util.js";

class Basket extends Component {

  componentDidMount() {
    console.log("Basket componentDidMount");
    this.props.completeBasket(this.props.basketList);
  }

  componentDidUpdate(prevProps) {
    console.log("Basket componentDidUpdate");
    if (!containAllInformations(this.props.basketList)) {
      console.log("Basket containAllInformations NOT");
      this.props.completeBasket(this.props.basketList);
    } else {
      console.log("Basket containAllInformations YES");
    }
  }

  render() {
    return (
      <div className="container">

        {this.props.fetching
          ? <div>
              <span className="mt-4 mb-4" >LOADING IN PROGRESS</span>
            </div>
          :
            <div>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th className="d-none" scope="col">ID</th>
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
              <div className="alert bg-primary text-right text-white">
                Total panier : {formatAmount(getTotalAmount(this.props.basketList))}
              </div>
            </div>
        }
      </div>
    );
  }
}

const Connected = connect(getBasketList, basketHandler)(Basket);
export default Connected;
