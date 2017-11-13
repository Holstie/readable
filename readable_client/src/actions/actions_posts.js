import * as Action from "../constants/Types";
import * as api from "../utils/api";

export function fetchPostsByCategory(category) {
  return {
    type: Action.FETCH_POSTS_FOR_CATEGORY,
    payload: api.fetchCategoryByCategory(category)
  };
}
