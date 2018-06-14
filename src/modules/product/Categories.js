import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
//import { mapStateToProps } from "../../store/product/selectors";
import { basketHandler } from "../../store/basket/handlers";
import './../../App.css';
import './../../categorie.css';

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
      <div class="container">
        <div class="row">
          <div class="col"></div>
          <div class="col-6">
          <table class="table table-striped">
            <thead class="thead-dark" id="contour">
              <tr>
                <div class="shadow p-3 mb-0.3 rounded" id="titleCategory">Categories</div>
              </tr>
            </thead>
            <br>
            </br>
            <tbody id="tableCategory">
              <tr>
                <th scope="row">{this.state.categories.map((element) =>
                    <tr id="allDescription" key={element.id}><Link to={`/categories/${element.id}/products`}>{element.label}</Link> </tr>
                  )}
                </th>
              </tr>
            </tbody>
          </table>
          </div>
          <div class="col">
          </div>
        </div>
      </div>
    );
  }
}

const Connected = connect(null, basketHandler)(Categories);
export default Connected;
