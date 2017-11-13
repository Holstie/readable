import * as Action from "../constants/Types";

export function switchPage(page) {
  return {
    type: Action.SWITCH_PAGE,
    payload: page
  };
}
