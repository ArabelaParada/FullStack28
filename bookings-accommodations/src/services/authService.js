import axios from 'axios';

const API_URL = 'https://apibookingsaccomodations-production.up.railway.app/api';

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/auth/login`, credentials);
  return response.data;
};