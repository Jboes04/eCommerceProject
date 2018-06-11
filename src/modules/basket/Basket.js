import React, { Component } from 'react';
//import { connect } from "react-redux";
//import { getTodoList } from "./../../store/todo/selectors";
//import { tableTodosHandler } from "./../../store/todo/handlers";


import BasketProductLine from './BasketProductLine';

class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basketList: [
          { productId: "productid1", label: "label product 1", price: 10.10, quantity: 2},
          { productId: "productid2", label: "label product 2 beau", price: 9.20, quantity: 1}],
    };
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
              <span className="mt-4 mr-5">Récapitulatif de mes achats</span>

              <table className="table table-striped mt-2">
                <thead>
                  <tr>
                    <th scope="col">ARTICLE</th>
                    <th scope="col">QUANTITE</th>
                    <th scope="col">SUPPRIMER</th>
                    <th scope="col">PRIX UNITAIRE</th>
                    <th scope="col">PRIX TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.basketList.map(product => {
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

//const Connected = connect(getTodoList, tableTodosHandler)(TableTodos);
//export default Connected;
export default Basket;
