import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from "react-redux";
import { getBasketList } from "./../../store/basket/selectors";
import { basketHandler } from "./../../store/basket/handlers";
import Modal from 'react-modal';
import BasketProductLine from './BasketProductLine';
import {getTotalAmount, containAllInformations} from './basketUtility';
import {formatAmount} from "./../../util.js";
import Delivery from '../checkout/Delivery';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Basket extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }


  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  getToCheckout(){
    return <Route path="/checkout" render={this.getCheckout} />;
  }
  getCheckout = (routerProps) => {
    return <Delivery {...routerProps} />;
  }

  componentDidMount() {
    //console.log("Basket componentDidMount");
    this.props.completeBasket(this.props.basketList);
  }

  componentWillReceiveProps(props) {
    const newBasketList = props.basketList;
    console.log("componentWillReceiveProps: ",newBasketList);
    if (!containAllInformations(newBasketList)) {
      //console.log("Basket containAllInformations NOT");
      this.props.completeBasket(this.props.basketList);
    } else {
      //console.log("Basket containAllInformations YES");
    }
  }

  // componentDidUpdate(prevProps) {
  //   console.log("Basket componentDidUpdate");
  //   if (!containAllInformations(this.props.basketList)) {
  //     console.log("Basket containAllInformations NOT");
  //     this.props.completeBasket(this.props.basketList);
  //   } else {
  //     console.log("Basket containAllInformations YES");
  //   }
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
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th className="d-none" scope="col">ID</th>
                    <th scope="col" colSpan="2">ARTICLE</th>
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
                <span>
                {this.props.flagInfo
                  ?<a href="/checkout"><button>Checkout here !    </button></a>
                  :<button className="mr-3 btn-danger" onClick={this.openModal}>Please Login to Checkout</button>
                }
                </span>
                 - Total panier : {formatAmount(getTotalAmount(this.props.basketList))}
              </div>
            </div>
        }
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Checkout Error"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>It seems there is a problem</h2>
          <div>Please Login before checking out</div><br/><br/>
          <button onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    );
  }
}

const Connected = connect(getBasketList, basketHandler)(Basket);

export default Connected;
