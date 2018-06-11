export function getBasketList(reduxState) {
  return {
    basketList: reduxState.basketList,
    fetching: reduxState.fetching,
  }
}
