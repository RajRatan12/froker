import axios from 'axios';

const API_URL = 'http://localhost:3000/api/blogs';

export const fetchBlogs = async (page = 1, limit = 18) => {
  const response = await axios.get(`${API_URL}?page=${page}&limit=${limit}`);
  return response.data;
};

// /**
//  * Fetches a single blog by its ID from the API.
//  * 
//  * @param {string} id - The ID of the blog to fetch.
//  * @returns {Promise<Object>} A promise that resolves to the API response data.
//  */

export const fetchBlogById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
