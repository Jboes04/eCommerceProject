let initialState = {
  profileInfo: {},
};

function profileReducer(state = initialState, action) {
  switch (action.type) {

    case "SET_PROFILE":
      console.log("setProfile REDUCER=", action.profile);
      return {
        ...state,
        profileInfo: action.profile,
      }

    default:
      return state
  }
}


export default profileReducer;
