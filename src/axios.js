import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5001/clone-bb3a3/us-central1/api", // the API (Cloud funciton) URL
});

export default instance;
