import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
//import { mapStateToProps } from "../../store/product/selectors";
import { basketHandler } from "../../store/basket/handlers";
import './../../App.css';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "categories": []
    }
  }

  componentDidMount() {
      fetch("https://decath-product-api.herokuapp.com/categories")
        .catch((error) => {
          console.warn(error);
        })
        .then((response) => response.json())
        .then((resp) => {
          this.setState({"categories": resp})
          console.log(resp);
        })
  }

  render() {
    return (
      <div>
        {this.state.categories.map((element) => <li key={element.id}><Link to={`/categories/${element.id}/products`}>{element.label}</Link> </li>)}
      </div>
    );
  }
}

const Connected = connect(null, basketHandler)(Categories);
export default Connected;
