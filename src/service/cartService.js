import API from "./axios";

export const addToCart = async (foodId, token) => {
  try {
    await API.post(
      "/cart",
      { foodId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return true;
  } catch (error) {
    console.error("Error while adding the cart data", error);
    return false;
  }
};

export const removeQtyFromCart = async (foodId, token) => {
  try {
    await API.post(
      "/cart/remove",
      { foodId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return true;
  } catch (error) {
    console.error("Error while removing quantity from cart", error);
    return false;
  }
};

export const getCartData = async (token) => {
  try {
    const response = await API.get("/cart", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.items;
  } catch (error) {
    console.error("Error while fetching the cart data", error);
    return {};
  }
};

export const clearCartItems = async (token, setQuantities) => {
  try {
    await API.delete("/cart", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setQuantities({});
  } catch (error) {
    console.error("Error while clearing the cart", error);
    throw error;
  }
};
