import {saveBasketListInLocalStorage, getBasketListFromLocalStorage} from './../../modules/basket/basketUtility';

const initialState = {
  basketList: getBasketListFromLocalStorage(),
  fetching: false,
  error: "No error",
  temp: getBasketListFromLocalStorage(),
};

function addProduct(basketList, _productId) {
  
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

  saveBasketListInLocalStorage(newBasketList);
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

  saveBasketListInLocalStorage(newBasketList);
  return newBasketList;
}

function eraseProduct(basketList, _productId) {
  //console.log("eraseProduct=", _productId);
  const newBasketList = basketList.filter(product => product.productId !== _productId)

  saveBasketListInLocalStorage(newBasketList);
  return newBasketList;
};

function basketReducer(state = initialState, action) {
  switch (action.type) {

    case "ADD_PRODUCT_TO_BASKET":
      const newBasketList = addProduct(state.basketList, action.productId);
      return {
        ...state,
        basketList: [...newBasketList],
      }

    case "DELETE_PRODUCT_TO_BASKET":
      const newRemove = eraseProduct(state.basketList, action.productId);
      return {
        ...state,
        basketList: [...newRemove],
      }

    case "REMOVE_PRODUCT_TO_BASKET":
      const newBasketListRemove = removeProduct(state.basketList, action.productId);
      return {
        ...state,
        basketList: [...newBasketListRemove],
      }

    case "DISPLAY_BASKET":
      return {
        ...state,
        fetching: false,
        basketList: [...action.basketList],
      }

    case "LOAD_BASKET_FROM_STORE":
      return {
        ...state,
        basketList: [...getBasketListFromLocalStorage()],
      }

    case "FETCHING_BASKET":
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
