import { setProfile, setDisconnect } from "./actions";

export function profileHandler(dispatch) {
  return {
    setProfileInfo: (profile)  => dispatch(setProfile(profile)),
  }
}

export function disconnectHandler(dispatch) {
  return {
    setDisconnectFunciton: (disconnect)  => dispatch(setDisconnect(disconnect)),
  }
}
