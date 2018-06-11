import {reset, fetching, load, mountError } from "./actions";

function fetchProductDetail(productId) {
  return fetch(
    `https://decath-product-api.herokuapp.com/products/${productId}`,
    //`http://localhost:3001/brands`,
    {method: "GET"}
  )
  .then((response) => {
	  return response.json()
  });
}

export function loadProductDetailAsync() {
  return dispatch => {
    dispatch(fetching());

    return fetchBrands()
  	.then(brands => {
  		const todoList = brands.map(brand => {
  			return {id: brand.id, label: brand.title, done: false}
  		});
  		dispatch(load(todoList));
  		}
  	)
    .catch(error => {
      dispatch(mountError(error.toString()));
    });
 }
}
