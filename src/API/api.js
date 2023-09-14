import axios from "axios";

const apiRoot = axios.create({
  baseURL: `https://hoca-test.onrender.com/api`,
  
});

export default apiRoot;


