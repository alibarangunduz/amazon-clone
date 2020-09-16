import axios from 'axios';
const instance = axios.create ({
    baseURL: '...' // the API (Cloud funciton) URL
});

export default instance;