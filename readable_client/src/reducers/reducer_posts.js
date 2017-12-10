import * as Actions from "../constants/Types";

const initialPostState = {
  items: {},
  item: {},
  currentPost: "",
  sort: "time",
  comments: {}
};

export default function(state = initialPostState, action) {
  switch (action.type) {
    case Actions.CREATE_POST_FULFILLED:
      return {
        ...state,
        items: action.payload.reduce(
          (map, obj) => {
            map[obj.id] = obj;
            return map;
          },
          { ...state.items }
        )
      };
    case Actions.DELETE_POST_FULFILLED:
      let items = state.items;
      if (items.hasOwnProperty(action.payload.id)) {
        delete items[action.payload.id];
      }
      return {
        ...state,
        items
      };
    case Actions.VOTE_POST_FULFILLED:
      return {
        ...state,
        items: { ...state.items, [action.payload.id]: action.payload }
      };
    case Actions.VOTE_COMMENT_FULFILLED:
      return {
        ...state,
        comments: { ...state.comments, [action.payload.id]: action.payload }
      };
    case Actions.FETCH_POSTS_FOR_CATEGORY_FULFILLED:
      return {
        ...state,
        items: action.payload.reduce(
          (map, obj) => {
            map[obj.id] = obj;
            return map;
          },
          { ...state.items }
        )
      };
    case Actions.FETCH_ALL_POSTS_FULFILLED:
      return {
        ...state,
        items: action.payload.reduce((map, obj) => {
          map[obj.id] = obj;
          return map;
        }, {})
      };
    case Actions.FETCH_POST_FULFILLED:
      return {
        ...state,
        item: action.payload
      };
    case Actions.SET_CURRENT_POST:
      return {
        ...state,
        currentPost: action.payload
      };
    case Actions.FETCH_ALL_COMMENTS_FULFILLED:
      return {
        ...state,
        comments: action.payload.reduce((map, obj) => {
          map[obj.id] = obj;
          return map;
        }, {})
      };
    case Actions.CHANGE_SORT:
      return {
        ...state,
        sort: action.payload
      };
    case Actions.EDIT_POST_FULFILLED:
      var newObject = Object.keys(state.items).reduce(function(
        previous,
        current
      ) {
        previous[current] = state.items[current] = action.payload;
        return previous;
      },
      {});
      let c = action.payload;
      return {
        ...state
      };
    default:
      return state;
  }
}
