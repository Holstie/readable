import axios from "axios";
const ROOT_URL = "http://localhost:3001";

const headers = {
  Accept: "application/json",
  Authorization: "cd",
  "Content-Type": "application/json"
};

const getMethod = { method: "GET" };

// Categories
export const fetchCategories = () => {
  const request = axios.get(`${ROOT_URL}/categories`, { headers });
  return request;
};

export const fetchPostsByCategory = category =>
  fetch(`${ROOT_URL}/${category}/posts`, { headers }).then(res => res.json());

export const fetchAllPosts = () =>
  fetch(`${ROOT_URL}/posts`, { headers }, { getMethod }).then(res =>
    res.json()
  );

export const fetchAllCommentsForPost = id =>
  fetch(`${ROOT_URL}/posts/${id}/comments/`, { headers }, { getMethod }).then(
    res => res.json()
  );

export const fetchPostById = id =>
  fetch(`${ROOT_URL}/posts/${id}`, { headers }).then(res => res.json());

export const createPost = post =>
  fetch("http://localhost:3001/posts", {
    method: "POST",
    headers,
    body: JSON.stringify(post)
  }).then(res => res.json);

export const editPost = post =>
  fetch(`${ROOT_URL}/posts/${post.id}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(post)
  }).then(res => res.json());

export const editComment = comment =>
  fetch(`${ROOT_URL}/comments/${comment.id}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(comment)
  }).then(res => res.json());

export const votePost = (id, vote) =>
  fetch(`${ROOT_URL}/posts/${id}`, {
    method: "POST",
    headers,
    body: JSON.stringify({ option: vote })
  }).then(res => res.json());

export const voteComment = (id, vote) =>
  fetch(`${ROOT_URL}/comments/${id}`, {
    method: "POST",
    headers,
    body: JSON.stringify({ option: vote })
  }).then(res => res.json());

export const deletePost = id =>
  fetch(`${ROOT_URL}/posts/${id}`, {
    method: "DELETE",
    headers
  }).then(res => res.json());

export const deleteComment = id =>
  fetch(`${ROOT_URL}/comments/${id}`, {
    method: "DELETE",
    headers
  }).then(res => res.json());
