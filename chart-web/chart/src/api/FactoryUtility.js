import axios from 'axios';

const BASE_URL = 'http://localhost:5241/'
const DEFULT_TIMEOUT = 10000

const axiosInstance = axios.create({
    baseURL: BASE_URL,  // Replace with your API base URL
    timeout: DEFULT_TIMEOUT,  // Timeout of 10 seconds
});

axiosInstance.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        //error response global handlers
        return Promise.reject(error);
    }
);


axiosInstance.interceptors.response.use(
    response => {
        //success response global handlers
        return response;
    },
    error => {
        //error response global handlers
        if (error.response) {
            console.log('Response error:', error.response.data);
        } else if (error.request) {
            console.log('Request error:', error.request);
        } else {
            console.log('Axios error:', error.message);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;