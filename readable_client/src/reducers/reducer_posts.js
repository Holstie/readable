import * as Actions from '../constants/Types';

export default function (state = {}, action) {
  switch (action.type) {
    case Actions.FETCH_POSTS_FOR_CATEGORY_FULFILLED:
    return {
      ...state,
      items: action.payload.reduce(
        (map, obj) => {
          map[obj.id] = obj
          return map
        },
        { ...state.items }
      )
    }
    default:
      return state;
  }
}