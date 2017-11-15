import * as Actions from '../constants/Types';

const initialPostState = {
  items: {}
}

export default function (state = initialPostState, action) {
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
    case Actions.FETCH_ALL_POSTS_FULFILLED:
    console.log(action.payload)
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
