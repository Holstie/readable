import axios from "axios";
const ROOT_URL = "http://localhost:3001";

const headers = {
  Accept: "application/json",
  Authorization: "authorized",
  'Content-Type': 'application/json',  
};

// Categories
export const fetchCategories = () => {
  const request = axios.get(`${ROOT_URL}/categories`, { headers });
  return request;
}

export const fetchCategoryByCategory = (category) =>
fetch(`${ROOT_URL}/${category}/posts`, { headers })
    .then(res => res.json())

    export const fetchAllPosts = () =>
    fetch(`${ROOT_URL}/posts`, { headers })
        .then(res => res.json())
  
