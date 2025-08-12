import axios from 'axios';

const API_URL = 'https://apibookingsaccomodations-production.up.railway.app/api';

const getAuthHeaders = (token) => ({
  headers: { Authorization: `Bearer ${token}` }
});

export const getBookings = async (token) => {
  const response = await axios.get(`${API_URL}/bookings`, getAuthHeaders(token));
  return response.data;
};

export const createBooking = async (booking, token) => {
  const response = await axios.post(`${API_URL}/bookings`, booking, getAuthHeaders(token));
  return response.data;
};

export const cancelBooking = async (id, token) => {
  const response = await axios.delete(`${API_URL}/bookings/${id}`, getAuthHeaders(token));
  return response.data;
};

export const getAccommodationCalendar = async (accommodationId, token) => {
  const response = await axios.get(`${API_URL}/bookings/calendar/${accommodationId}`, getAuthHeaders(token));
  return response.data;
};