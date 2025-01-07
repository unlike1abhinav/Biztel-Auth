import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/auth";

export const signup = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { errorMessage: "Unknown error occurred." };
  }
};

export const login = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { errorMessage: "Unknown error occurred." };
  }
};