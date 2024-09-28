// fetchClinicUtil.js
import { BASE_URL } from './const';

// Function to get token from localStorage
const getToken = () => localStorage.getItem('token');

// Utility function for handling response
const handleResponse = async response => {
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Network response was not ok');
    }
    return response.json();
};

// Utility function for GET request
export const getClinicRequest = async (url, params = {}, headers = {}) => {
    try {
        const token = getToken();
        const queryString = new URLSearchParams(params).toString();
        const response = await fetch(`${BASE_URL}${url}?${queryString}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...(token && { 'Authorization': `Bearer ${token}` }),
                ...headers
            }
        });
        return handleResponse(response);
    } catch (error) {
        console.error('GET request error:', error);
        throw error;
    }
};

// Utility function for POST request
export const postClinicRequest = async (url, data = {}, headers = {}) => {
    try {
        const token = getToken();
        const response = await fetch(`${BASE_URL}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...(token && { 'Authorization': `Bearer ${token}` }),
                ...headers
            },
            body: JSON.stringify(data)
        });
        return handleResponse(response);
    } catch (error) {
        console.error('POST request error:', error);
        throw error;
    }
};

// Utility function for PUT request
export const putClinicRequest = async (url, data = {}, headers = {}) => {
    try {
        const token = getToken();
        const response = await fetch(`${BASE_URL}${url}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                ...(token && { 'Authorization': `Bearer ${token}` }),
                ...headers
            },
            body: JSON.stringify(data)
        });
        return handleResponse(response);
    } catch (error) {
        console.error('PUT request error:', error);
        throw error;
    }
};

// Utility function for DELETE request
export const deleteClinicRequest = async (url, headers = {}) => {
    try {
        const token = getToken();
        const response = await fetch(`${BASE_URL}${url}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                ...(token && { 'Authorization': `Bearer ${token}` }),
                ...headers
            }
        });
        return handleResponse(response);
    } catch (error) {
        console.error('DELETE request error:', error);
        throw error;
    }
};
