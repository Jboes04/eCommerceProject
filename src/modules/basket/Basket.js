import React, { Component } from 'react';
import { connect } from "react-redux";
import { getBasketList } from "./../../store/basket/selectors";

import BasketProductLine from './BasketProductLine';

class Basket extends Component {
  constructor(props) {
    super(props);

    //this.handleChange = this.handleChange.bind(this);

  }

  // handleChange(event) {
  //   this.setState({basketList: this.capitalize(event.target.value)});
  // }


  render() {
    //console.log("RENDER TableTodos", this.props.todoList);
    return (
      <div className="container">

        {this.props.fetching
          ? <div>
              <span className="mt-4 mb-4">LOADING IN PROGRESS</span>
            </div>
          :
            <div>
              <span className="mt-4 mr-5">RECAPITULATIF DE MON PANIER</span>

              <table className="table table-striped mt-2">
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
            </div>
        }
      </div>
    );
  }
}

const Connected = connect(getBasketList, null)(Basket);
export default Connected;
