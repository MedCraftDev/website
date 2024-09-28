import axios from 'axios';
import { BASE_URL } from './const';

// Function to get token from localStorage
const getToken = () => localStorage.getItem('token');

// Create an instance of axios with default headers
const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to include the token in headers
axiosInstance.interceptors.request.use(config => {
    const token = getToken();
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// Utility function for GET request
export const getRequest = async (url, params = {}, headers = {}) => {
    try {
        const response = await axiosInstance.get(url, {
            params,
            headers: { ...axiosInstance.defaults.headers, ...headers },
        });
        return response.data;
    } catch (error) {
        console.error('GET request error:', error);
        throw error;
    }
};

// Utility function for POST request
export const postRequest = async (url, data = {}, headers = {}) => {
    try {
        const response = await axiosInstance.post(url, data, {
            headers: { ...axiosInstance.defaults.headers, ...headers },
        });
        return response.data;
    } catch (error) {
        console.error('POST request error:', error);
        throw error;
    }
};

// Utility function for PUT request
export const putRequest = async (url, data = {}, headers = {}) => {
    try {
        const response = await axiosInstance.put(url, data, {
            headers: { ...axiosInstance.defaults.headers, ...headers },
        });
        return response.data;
    } catch (error) {
        console.error('PUT request error:', error);
        throw error;
    }
};

// Utility function for DELETE request
export const deleteRequest = async (url, headers = {}) => {
    try {
        const response = await axiosInstance.delete(url, {
            headers: { ...axiosInstance.defaults.headers, ...headers },
        });
        return response.data;
    } catch (error) {
        console.error('DELETE request error:', error);
        throw error;
    }
};


