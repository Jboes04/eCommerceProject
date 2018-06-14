export function completeDisplay(productToComplete) {
    let product = "https://www.decathlon.fr/media/" + productToComplete.image_path;
    //console.log("this is product path : ", product);
    return product;
}

export function getProductDetail(productId) {
  return fetch(`https://decath-product-api.herokuapp.com/products/${productId}`)
  .catch((error) => {
      console.warn(error);
    })
  .then((response) => response.json())
}

export function addProductToHistory(productsHistory, productToAdd) {
	if (productsHistory.last) {
		if (!productsHistory.toDisplay.some(product => product.id === productsHistory.last.id)) {
			productsHistory.toDisplay.unshift(productsHistory.last);
		}
	}
	productsHistory.last = productToAdd;

	if (productsHistory.toDisplay.length > 6) {
		productsHistory.toDisplay.pop();
	}
	return productsHistory;
}
