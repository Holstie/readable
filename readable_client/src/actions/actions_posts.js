import * as Action from "../constants/Types";
import * as api from "../utils/api";

export function fetchPostsByCategory(category) {
  return {
    type: Action.FETCH_POSTS_FOR_CATEGORY,
    payload: api.fetchPostsByCategory(category)
  };
}

export function fetchAllPosts() {
  return {
    type: Action.FETCH_ALL_POSTS,
    payload: api.fetchAllPosts()
  };
}

export function fetchPost(id) {
  return {
    type: Action.FETCH_POST,
    payload: api.fetchPostById(id)
  };
}

export function editPost(post) {
  return {
    type: Action.EDIT_POST,
    payload: api.editPost(post)
  };
}

export function createPost(post) {
  console.log("newpost", JSON.stringify(post));
  return {
    tyoe: Action.CREATE_POST,
    payload: api.createPost(post)
  };
}

export function setCurrentPost(id) {
  return {
    type: Action.SET_CURRENT_POST,
    payload: id
  };
}


export function votePost(id, vote) {
  return {
    type: Action.VOTE_POST,
    payload: api.votePost(id, vote)
  }
}