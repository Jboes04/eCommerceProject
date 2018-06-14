import React, { Component } from 'react';
import { connect } from "react-redux";
import { Route, withRouter } from 'react-router-dom';
import './App.css';

import Modal from 'react-modal';



import { getProfileInfo } from "./store/profile/selectors";
import { profileHandler } from "./store/profile/handlers";
import Categories from './modules/product/Categories';
import Delivery from './modules/checkout/Delivery';
import ProductDetails from './modules/product/productDetails';
import Navbar from './modules/basket/Navbar';
import ProductList from './modules/product/ProductList';
import Signin from './modules/checkout/Signin';

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

class App extends Component {
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


  getCategories = () => {
    return <Categories />
  }

  getProducts = (routerProps) => {
    return <ProductList {...routerProps} />
  }

  getProductDetails = (routerProps) => {
    return <ProductDetails {...routerProps} />
  }

  getCheckout = (routerProps) => {
    console.log(this.props.profileInfo.Eea);
    const isConnected = this.props.profileInfo.Eea;
    if(isConnected) {
    return <Delivery {...routerProps} />
  } else {
    this.handleShow();
  }
}

  render() {
    return (

      <div className="App" style={{backgroundColor:"papayawhip"}}>
        <Navbar />
        <button onClick={this.openModal}>Open Modal</button>
        {/* <Route exact path="/" render={this.getCategories}/> */}
        <Route path="/categories/:categoryId/products" render={this.getProducts}/>
        <Route path="/products/:productId" render={this.getProductDetails}/>
        <Route path="/checkout" render={this.openModal} />

        <button onClick={this.openModal}>Checkout</button>
        <div style={{height:800}}/>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    );
  }
}

const Connected = withRouter(connect(getProfileInfo, profileHandler)(App));
export default Connected;
