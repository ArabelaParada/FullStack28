import axios from 'axios';

const API_URL = 'https://apibookingsaccomodations-production.up.railway.app/api';

const getAuthHeaders = (token) => ({
  headers: { Authorization: `Bearer ${token}` }
});

export const getAccommodations = async (token) => {
  const response = await axios.get(`${API_URL}/accommodations`, getAuthHeaders(token));
  return response.data;
};

export const createAccommodation = async (accommodation, token) => {
  const response = await axios.post(`${API_URL}/accommodations`, accommodation, getAuthHeaders(token));
  return response.data;
};

export const updateAccommodation = async (id, accommodation, token) => {
  const response = await axios.put(`${API_URL}/accommodations/${id}`, accommodation, getAuthHeaders(token));
  return response.data;
};