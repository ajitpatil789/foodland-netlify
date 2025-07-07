import API from "./axios"; // uses baseURL from .env

export const fetchUserOrders = async (token) => {
  try {
    const response = await API.get("/orders", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error occurred while fetching the orders", error);
    throw error;
  }
};

export const createOrder = async (orderData, token) => {
  try {
    const response = await API.post("/orders/create", orderData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error occurred while creating the order", error);
    throw error;
  }
};

export const verifyPayment = async (paymentData, token) => {
  try {
    const response = await API.post("/orders/verify", paymentData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.status === 200;
  } catch (error) {
    console.error("Error occurred while verifying the payment", error);
    throw error;
  }
};

export const deleteOrder = async (orderId, token) => {
  try {
    await API.delete(`/orders/${orderId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.error("Error occurred while deleting the order", error);
    throw error;
  }
};
