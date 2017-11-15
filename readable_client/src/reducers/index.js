import CategoryReducer from './reducer_categories';
import PostReducer from './reducer_posts';
import RouterReducer from "./reducer_router";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  categories: CategoryReducer,
  posts: PostReducer,
  router: RouterReducer,
})

export default rootReducer;