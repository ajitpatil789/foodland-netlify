export const calculateCartTotals = (cartItems, quantities) => {
  // calculations
  const subtotal = cartItems.reduce(
    (acc, food) => acc + food.price * quantities[food.id],
    0
  );
  const shipping = cartItems.length === 0 ? 0 : 10; // Flat rate shipping
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;
  return { subtotal, shipping, tax, total };
};
