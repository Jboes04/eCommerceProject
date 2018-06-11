
const initialState = {
  tempReducerAsup: "asup",
};



function asupReducer(state = initialState, action) {
  switch (action.type) {

    case "ACTION_ASUP":
      return {
        ...state,
      }

    default:
      return state
  }
}


export default asupReducer;
