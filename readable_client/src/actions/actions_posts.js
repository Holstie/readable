import * as Action from "../constants/Types";
import * as api from "../utils/api";

export function fetchPostsByCategory(category) {
  return {
    type: Action.FETCH_POSTS_FOR_CATEGORY,
    payload: api.fetchPostsByCategory(category)
  };
}

export function fetchAllCommentsForPost(id) {
  return {
    type: Action.FETCH_ALL_COMMENTS,
    payload: api.fetchAllCommentsForPost(id)
  };
}

export function changeSort(sort) {
  return {
    type: Action.CHANGE_SORT,
    payload: sort
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

export function editComment(comment) {
  return {
    type: Action.EDIT_COMMENT,
    payload: api.editComment(comment)
  };
}


export function createPost(post) {
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

export function setCurrentComment(id) {
  return {
    type: Action.SET_CURRENT_COMMENT,
    payload: id
  };
}

export function votePost(id, vote) {
  return {
    type: Action.VOTE_POST,
    payload: api.votePost(id, vote)
  };
}

export function voteComment(id, vote) {
  return {
    type: Action.VOTE_COMMENT,
    payload: api.voteComment(id, vote)
  };
}

export function deletePost(id) {
  return {
    type: Action.DELETE_POST,
    payload: api.deletePost(id)
  };
}

export function deleteComment(id) {
  return {
    type: Action.DELETE_COMMENT,
    payload: api.deleteComment(id)
  };
}
