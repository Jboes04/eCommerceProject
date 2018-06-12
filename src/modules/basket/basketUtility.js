export function getTotalAmount(basketList) {
  const totalAmount = basketList.reduce((accumulator, currentProduct) => accumulator + currentProduct.quantity * currentProduct.price, 0);
  return totalAmount;
}

export function containAllInformations(basketList) {
  if (basketList.find(product => {
    return (!product.label || !product.price)
  })) {
    //console.log("containAllInformations:", basketList, "FALSE");
    return false;
  } else {
    //console.log("containAllInformations:", basketList, "TRUE");
    return true;
  }
}
