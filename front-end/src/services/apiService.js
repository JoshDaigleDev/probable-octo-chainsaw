import axios from 'axios';
const BASE_URL = 'http://localhost:3030'

export const makeGETRequest = async (endpoint) => {
    try {
        const response = await axios.get(`${BASE_URL}/${endpoint}`);
        return response;
    } catch(error) {
        throw error;
    }
}

export const makePOSTRequest = async (endpoint, payload) => {
    try {
        const response = await axios.post(`${BASE_URL}/${endpoint}`, payload);
        return response;
    } catch(error) {
        throw error;
    }
}