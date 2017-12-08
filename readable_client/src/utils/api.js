import axios from "axios";
const ROOT_URL = "http://localhost:3001";

const headers = {
  Accept: "application/json",
  Authorization: "c",
  "Content-Type": "application/json"
};

const postMethod = { method: "POST" };
const putMethod = { method: "PUT" };
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

export const fetchPostById = id =>
  fetch(`${ROOT_URL}/posts/${id}`, { headers }).then(res => res.json());

export const createPost = post =>
  fetch("http://localhost:3001/posts", {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "c"
    },
    body: JSON.stringify(post)
  })
    .then(res => res.json)
    .then(data => console.log(data));

// export const createPost = post =>
//   fetch(
//     `${ROOT_URL}/posts/`,
//     { headers },
//     { postMethod },
//     {
//       body: JSON.stringify(post)
//     }
//   ).then(results => results.json());

export const editPost = post =>
  fetch(
    `${ROOT_URL}/posts/${post.id}`,
    { headers },
    { putMethod },
    {
      body: JSON.stringify(post)
    }
  )
    .then(console.log(JSON.stringify))
    .then(results => results.json())
    .then(data => data);

export const votePost = function (id, vote) {
  console.log("vote", vote)
  fetch("http://localhost:3001/posts/" + id, {
    method: "POST",
    headers,
    body: JSON.stringify({ option: vote })
  })
  .then(function (){

  })
  //.then(console.log(JSON.stringify))
  //.then(results => results.json());
}
