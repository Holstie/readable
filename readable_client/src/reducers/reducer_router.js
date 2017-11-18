import * as Actions from '../constants/Types';

const initialPostState = {
  route: ""
}

export default function (state = initialPostState, action) {
  switch (action.type) {
    case Actions.CHANGE_ROUTE:
      return {
        route: action.payload
      }
    default:
      return state;
  }
}