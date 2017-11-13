import * as Actions from '../constants/Types';

export default function (state = [], action) {
  switch (action.type) {
    case Actions.FETCH_POSTS_FOR_CATEGORY:
      return action.payload.data;
    default:
      return state;
  }
}