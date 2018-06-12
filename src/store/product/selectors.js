export function mapStateToProps(reduxState) {
  return {
    getBasket: reduxState.productReducer.basketList,
  }
}
