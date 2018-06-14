export function setProfile(_profile) {
  console.log("setProfile ACTION=", _profile);
  return {
    type: "SET_PROFILE",
    profile: _profile,
  }
}
