import axios from 'axios';
import { BASE_URL } from './const';

// Create a simple axios instance without token handling
const simpleAxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Utility function for POST request without token
export const patientPostRequest = async (url, data = {}, headers = {}) => {
    try {
        const response = await simpleAxiosInstance.post(url, data, {
            headers: { ...simpleAxiosInstance.defaults.headers, ...headers },
        });
        return response.data;
    } catch (error) {
        console.error('POST request error:', error);
        throw error;
    }
};

// Utility function for GET request without token
export const patientGetRequest = async (url, params = {}, headers = {}) => {
    try {
        const response = await simpleAxiosInstance.get(url, {
            params,
            headers: { ...simpleAxiosInstance.defaults.headers, ...headers },
        });
        return response.data;
    } catch (error) {
        console.error('GET request error:', error);
        throw error;
    }
};

// Utility function for PUT request without token
export const patientPutRequest = async (url, data = {}, headers = {}) => {
    try {
        const response = await simpleAxiosInstance.put(url, data, {
            headers: { ...simpleAxiosInstance.defaults.headers, ...headers },
        });
        return response.data;
    } catch (error) {
        console.error('PUT request error:', error);
        throw error;
    }
};

// Utility function for DELETE request without token
export const patientDeleteRequest = async (url, headers = {}) => {
    try {
        const response = await simpleAxiosInstance.delete(url, {
            headers: { ...simpleAxiosInstance.defaults.headers, ...headers },
        });
        return response.data;
    } catch (error) {
        console.error('DELETE request error:', error);
        throw error;
    }
};
