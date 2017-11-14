import axios from "axios";
const ROOT_URL = "http://localhost:3001";

const headers = {
  Accept: "application/json",
  Authorization: "authorized"
};

// Categories
export const fetchCategories = () => {
  const request = axios.get(`${ROOT_URL}/categories`, { headers });
  return request;
}

export const fetchCategoryByCategory = (category) => {
  const request = axios.get(`${ROOT_URL}/${category}/posts`, { headers });
  return request;
}
  
