import * as Action from "../constants/Types";

export function changeRoute(route) {
  switch (route) {
    case "":
      console.log("1");
      return {
        type: Action.CHANGE_ROUTE,
        payload: ""
      };
    case "redux":
      console.log("2");
      return {
        type: Action.CHANGE_ROUTE,
        payload: "redux"
      };
    case "react":
      console.log("3");
      return {
        type: Action.CHANGE_ROUTE,
        payload: "react"
      };
    case "udacity":
      console.log("4");
      return {
        type: Action.CHANGE_ROUTE,
        payload: "udacity"
      };
    case "newpost":
      console.log("5");
      return {
        type: Action.CHANGE_ROUTE,
        payload: "newpost"
      };
    default:
      console.log("6");
      return {
        type: Action.CHANGE_ROUTE,
        payload: ""
      };
  }
}
