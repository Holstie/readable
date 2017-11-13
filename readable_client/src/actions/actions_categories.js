import * as Action from "../constants/Types";
import * as api from "../utils/api";

export function fetchCategories() {
  return {
    type: Action.FETCH_CATEGORIES,
    payload: api.fetchCategories()
  };
}
