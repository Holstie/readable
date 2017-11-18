import * as Action from "../constants/Types";
import store from '../store'
import reducer from "../reducers"
import { GET_ROUTE } from "../constants/Types";

export function changeRoute(route) {
  return {
    type: Action.CHANGE_ROUTE,
    payload: route
  }
};