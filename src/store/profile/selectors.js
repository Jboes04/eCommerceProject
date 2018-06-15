export function getProfileInfo(reduxState) {
  return {
    profileInfo: reduxState.profileReducer.profileInfo,
    disconnect: reduxState.profileReducer.disconnect,
    basketList: reduxState.basketReducer.basketList,
  }
}
