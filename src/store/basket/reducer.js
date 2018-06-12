const initialState = {
  basketList: [
      { productId: "c32af335-9b5c-4fb6-b64e-14198af25055", label: "PALMES WADERS", price: 10.10, quantity: 2},
      { productId: "82830e66-b439-4fef-ade8-abb4dce54e6e", label: "Corne chasse 14cm", price: 9.20, quantity: 1}],
  fetching: false,
  error: "No error",
};


function addProduct(basketList, _productId) {
  console.log("addProduct=", _productId);

  let productAlreadyInBasket = false;

  const newBasketList = basketList.map(product => {
    if (product.productId === _productId) {
      productAlreadyInBasket = true;
      return {...product, quantity: product.quantity + 1 };
    } else {
      return {...product};
    }
  });

  if (!productAlreadyInBasket) {
    newBasketList.push( {
      productId: _productId,
      quantity: 1,
      price: 0,
    })
  }

  return newBasketList;
}


function removeProduct(basketList, _productId) {
  console.log("removeProduct=", _productId);

    const newBasketList = basketList.map(product => {
    if (product.productId === _productId) {
      let newQuantity = product.quantity;
      if (newQuantity > 1) {
        newQuantity -= 1;
      }
      return {...product, quantity: newQuantity };
    } else {
      return {...product};
    }
  });

  return newBasketList;
}


function basketReducer(state = initialState, action) {
  switch (action.type) {

    case "ADD_PRODUCT_TO_BASKET":
      const newBasketList = addProduct(state.basketList, action.productId);
      return {
        ...state,
        basketList: [...newBasketList],
      }

    case "REMOVE_PRODUCT_TO_BASKET":
      const newBasketListRemove = removeProduct(state.basketList, action.productId);
      return {
        ...state,
        basketList: [...newBasketListRemove],
      }

    case "FETCHING":
    return {
      ...state,
      fetching: true,
    }

    case "ERROR":
    return {
      ...state,
      fetching: false,
      error: action.error,
    }


    default:
      return state
  }
}


export default basketReducer;
