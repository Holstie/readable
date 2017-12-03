import * as Action from "../constants/Types";

export function changeRoute(route) {
  return {
    type: Action.CHANGE_ROUTE,
    payload: route
  }
};