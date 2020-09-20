import axios from "axios";
const instance = axios.create({
  baseURL: "https://us-central1-clone-bb3a3.cloudfunctions.net/api", // the API (Cloud funciton) URL
});
//http://localhost:5001/clone-bb3a3/us-central1/api
export default instance;
//https://us-central1-clone-bb3a3.cloudfunctions.net/api