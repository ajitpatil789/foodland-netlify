import API from "./axios";

export const fetchFoodList = async () => {
  try {
    const response = await API.get("/foods");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error while fetching food list:", error);
    throw error;
  }
};

export const fetchFoodDetails = async (id) => {
  try {
    const response = await API.get(`/foods/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error while fetching food details:", error);
    throw error;
  }
};
