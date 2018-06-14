let initialState = {
  profileInfo: {},
  disconnect: {},
};

function profileReducer(state = initialState, action) {
  switch (action.type) {

    case "SET_PROFILE":
      console.log("setProfile REDUCER=", action.profile);
      return {
        ...state,
        profileInfo: action.profile,
        disconnect: action.disconnect,
      }

    case "DISCONNECT":
      console.log("disconnect REDUCER=", action.profile);
      return {
        ...state,
        profileInfo: {},
      }

    default:
      return state
  }
}


export default profileReducer;
