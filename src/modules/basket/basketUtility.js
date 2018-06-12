export function getTotalAmount(basketList) {
  const totalAmount = basketList.reduce((accumulator, currentProduct) => accumulator + currentProduct.quantity * currentProduct.price, 0);
  return totalAmount;
}
