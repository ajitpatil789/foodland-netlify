import API from "./axios";

export const registerUser = async (data) => {
  try {
    const response = await API.post("/register", data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const login = async (data) => {
  try {
    const response = await API.post("/login", data);
    return response;
  } catch (error) {
    throw error;
  }
};
