export function getBasketList(reduxState) {
  return {
    basketList: reduxState.basketReducer.basketList,
    fetching: reduxState.basketReducer.fetching,
  }
}
