export function getProfileInfo(reduxState) {
  return {
    profileInfo: reduxState.profileReducer.profileInfo,
  }
}
