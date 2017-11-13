import CategoryReducer from './reducer_categories';
import PostReducer from './reducer_posts';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  categories: CategoryReducer,
  posts: PostReducer
})

export default rootReducer;