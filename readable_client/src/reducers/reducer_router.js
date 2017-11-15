import * as Actions from "../constants/Types";

const initialPostState = {
  route: ""
};

export default function(state = initialPostState, action) {
  switch (action.type) {
    case Actions.CHANGE_ROUTE:
      console.log("change");
      return {
        route: action.payload
      };
    default:
      console.log("hello", action);
      return {
        route: state.route
      };
  }
}
