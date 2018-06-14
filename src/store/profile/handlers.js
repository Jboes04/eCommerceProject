import { setProfile } from "./actions";

export function profileHandler(dispatch) {
  return {
    setProfileInfo: (profile)  => dispatch(setProfile(profile)),
  }
}
