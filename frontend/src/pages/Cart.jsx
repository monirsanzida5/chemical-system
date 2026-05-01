import React from "react";
import "../css/cart.css";

export default function Cart({ cart, setCart }) {
  // ✅ ITEM SUBTOTAL
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  );

  // 🚚 SHIPPING ( FIXED for now )
  const shipping = 20;

  // %" TAX ( FIXED )
  const taxRate = 0.1; // 10%
  const tax = subtotal * taxRate;

  // 💰 TOTAL
  const total = subtotal + shipping + tax;

  // ❌ REMOVE ITEM
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // ➕ INCREASE
  const increase = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, qty: (item.qty || 1) + 1 }
          : item
      )
    );
  };

  // ➖ DECREASE
  const decrease = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  // 🎟️ COUPON / DISCOUNT (FRONTEND DEMO)
  const [coupon, setCoupon] = React.useState("");
  const [discount, setDiscount] = React.useState(0);

  const applyCoupon = () => {
    // শুধু before total এর ১০% demo discount
    setDiscount(subtotal * 0.1);
  };

  React.useEffect(() => {
    setDiscount(0); // reset when cart changes
  }, [cart]);

  const finalTotal = total - discount;

  return (
    <div className="cart-page">

      <h1>🛒 Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h3>No items in cart</h3>
          <p>Start shopping to add products.</p>
        </div>
      ) : (
        <>
          <div className="cart-table-wrapper">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  const itemTotal =
                    item.price * (item.qty || 1);
                  return (
                    <tr key={item.id} className="cart-item">
                      <td>
                        {item.name}
                        <p className="text-sm">
                          SKU: {item.id}
                        </p>
                      </td>
                      <td>
                        ${item.price.toFixed(2)}
                      </td>
                      <td>
                        <div className="qty-controls">
                          <button
                            onClick={() => decrease(item.id)}
                          >
                            ➖
                          </button>
                          <span className="qty-input">
                            {item.qty || 1}
                          </span>
                          <button
                            onClick={() => increase(item.id)}
                          >
                            ➕
                          </button>
                        </div>
                      </td>
                      <td>${itemTotal.toFixed(2)}</td>
                      <td>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="btn btn-danger"
                        >
                          ❌ Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* COUPON */}
          <div className="coupon-section">
            <label>
              Coupon Code
            </label>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="XYZ123"
              />
              <button
                className="btn btn-primary"
                onClick={applyCoupon}
              >
                Apply
              </button>
            </div>
          </div>

          {/* ORDER SUMMARY */}
          <div className="cart-subtotal">
            <div style={{ maxWidth: "400px", textAlign: "right" }}>
              <p>
                Subtotal: <strong>${subtotal.toFixed(2)}</strong>
              </p>
              <p>
                Shipping: <strong>${shipping.toFixed(2)}</strong>
              </p>
              <p>
                Tax (10%):{" "}
                <strong>${tax.toFixed(2)}</strong>
              </p>
              {discount > 0 && (
                <p>
                  Discount:{" "}
                  <strong>
                    -${discount.toFixed(2)}
                  </strong>
                </p>
              )}
              <p>
                <strong>
                  Total: ${finalTotal.toFixed(2)}
                </strong>
              </p>
            </div>
          </div>

          {/* CHECKOUT BUTTONS */}
          <div className="cart-actions">
            <button
              className="btn-shop-more"
              onClick={() => console.log("Go to shop")}
            >
              ← Continue Shopping
            </button>
            <button
              className="btn-cart-checkout"
              onClick={() => {
                alert(
                  "Proceed to checkout: total $" +
                    finalTotal.toFixed(2)
                );
              }}
            >
              Proceed to Checkout
            </button>
          </div>

          {/* OPTIONAL DEBUG */}
          <div style={{ marginTop: "20px", fontSize: "12px" }}>
            cart length: {cart.length}
          </div>
        </>
      )}

    </div>
  );
}