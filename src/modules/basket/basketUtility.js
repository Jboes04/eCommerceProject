export function getTotalAmount(basketList) {
  const totalAmount = basketList.reduce((accumulator, currentProduct) => accumulator + currentProduct.quantity * currentProduct.price, 0);
  return totalAmount;
}

export function containAllInformations(basketList) {
  if (basketList.find(product => {
    return (!product.label || !product.price || !product.url)
  })) {
    //console.log("containAllInformations: ", basketList, "FALSE");
    return false;
  } else {
    //console.log("containAllInformations: ", basketList, "TRUE");
    return true;
  }
}


export function saveBasketListInLocalStorage(basketList) {
  const basketToLocalStorage = basketList.map(product => {
    return { lsId: product.productId, lsQuantity: product.quantity}
  });
  localStorage.setItem("basket", JSON.stringify(basketToLocalStorage));
}

export function getBasketListFromLocalStorage() {
  const basketInStorage = localStorage.getItem("basket");
  if (basketInStorage) {
    //console.log("getBasketListFromLocalStorage=", basketInStorage);
    const basketList = JSON.parse(basketInStorage).map(productStorage => {
      return {productId: productStorage.lsId, quantity: productStorage.lsQuantity}
    });
    //console.log("basketList=", basketList);
    return basketList;
  } else {
    return [];
  }
}
