import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { foodList, increaseQty, decreaseQty, quantities, removeFromCart } =
    useContext(StoreContext);

  // cart items
  const cartItems = foodList.filter((food) => quantities[food.id] > 0);

  // calculations
  const subtotal = cartItems.reduce(
    (acc, food) => acc + food.price * quantities[food.id],
    0
  );
  const shipping = cartItems.length === 0 ? 0 : 10; // Flat rate shipping
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="container py-5">
      <h1 className="mb-5">Your Shopping Cart</h1>
      <div className="row">
        <div className="col-lg-8">
          {/* Cart Items */}
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="card mb-4">
              <div className="card-body">
                {cartItems.map((food) => (
                  <div key={food.id} className="row cart-item mb-3">
                    <div className="col-md-3">
                      <img
                        src={food.imageUrl}
                        alt={food.name}
                        className="img-fluid rounded"
                        width={100}
                      />
                    </div>
                    <div className="col-md-5">
                      <h5 className="card-title">{food.name}</h5>
                      <p className="text-muted">Category: {food.category}</p>
                    </div>
                    <div className="col-md-2">
                      <div className="input-group">
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          type="button"
                          onClick={() => decreaseQty(food.id)}
                        >
                          -
                        </button>
                        <input
                          style={{ maxWidth: "100px" }}
                          type="text"
                          className="form-control form-control-sm text-center quantity-input"
                          value={quantities[food.id]}
                          readOnly
                        />
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          type="button"
                          onClick={() => increaseQty(food.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="col-md-2 text-end">
                      <p className="fw-bold">
                        &#8377;{(food.price * quantities[food.id]).toFixed(2)}
                      </p>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => removeFromCart(food.id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Continue Shopping Button */}
          <div className="text-start mb-4">
            <Link to="/" className="btn btn-outline-primary">
              <i className="bi bi-arrow-left me-2"></i>Continue Shopping
            </Link>
          </div>
        </div>
        <div className="col-lg-4">
          {/* Cart Summary */}
          <div className="card cart-summary">
            <div className="card-body">
              <h5 className="card-title mb-4">Order Summary</h5>
              <div className="d-flex justify-content-between mb-3">
                <span>Subtotal</span>
                <span>&#8377;{subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Shipping</span>
                <span>&#8377;{shipping.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Tax</span>
                <span>&#8377;{tax.toFixed(2)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <strong>Total</strong>
                <strong>&#8377;{total.toFixed(2)}</strong>
              </div>
              <button
                className="btn btn-primary w-100"
                disabled={cartItems.length === 0}
                onClick={() => navigate("/order")}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
          {/* Promo Code */}
          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title mb-3">Apply Promo Code</h5>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter promo code"
                />
                <button className="btn btn-outline-secondary" type="button">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
