import axios from 'axios';
const API_BASE_URL = 'https://oauth2.googleapis.com';

// export default axios.create({
//     baseURL: API_BASE_URL,
// });

export const axiosPrivate = axios.create({
  baseURL: API_BASE_URL,
  headers: {'Content-Type': 'application/json'},
  withCredentials: true,
});
