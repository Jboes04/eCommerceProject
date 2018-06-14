export function setProfile(_profile) {
  console.log("setProfile ACTION=", _profile);
  return {
    type: "SET_PROFILE",
    profile: _profile,
  }
}

export function setDisconnect(_disconnect) {
  console.log("disconnect ACTION=", _disconnect);
  return {
    type: "DISCONNECT",
    disconnect: _disconnect,
  }
}
