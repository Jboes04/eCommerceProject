export default function completeDisplay(products) {
    let product = "https://www.decathlon.fr/media/" + products.image_path;
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
