import { add } from "./actions";
import { resetAsync, loadAsync } from "./asyncActions";

export function tableTodosHandler(dispatch) {
  return {
    AddToBasket: (todoLabel)  => dispatch(add(todoLabel))
  }
}
