import * as Actions from '../constants/Types';

export default function (state = [], action) {
  switch (action.type) {
    case Actions.FETCH_CATEGORIES_FULFILLED:
      return action.payload.data.categories;
    default:
      return state;
  }
}