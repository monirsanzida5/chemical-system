import React from "react";

export default function Cart({ cart, setCart }) {

  // ❌ REMOVE
  // const total = cart.reduce((sum, item) => sum + item.price, 0);

  // ✅ FIXED TOTAL
  const total = cart.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);

  // ❌ REMOVE ITEM
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // ➕ INCREASE
  const increase = (id) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, qty: (item.qty || 1) + 1 }
        : item
    ));
  };

  // ➖ DECREASE
  const decrease = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    ));
  };

  return (
    <div className="cart-page">

      <h1>🛒 Checkout</h1>

      {cart.length === 0 ? (
        <h3>No items in cart</h3>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>

              <h3>{item.name}</h3>

              <p>Price: ${item.price}</p>

              {/* 🔥 QTY CONTROL */}
              <div>
                <button onClick={() => decrease(item.id)}>➖</button>
                <span style={{ margin: "0 10px" }}>{item.qty || 1}</span>
                <button onClick={() => increase(item.id)}>➕</button>
              </div>

              <button onClick={() => removeItem(item.id)}>
                ❌ Remove
              </button>

            </div>
          ))}

          <h2>Total: ${total}</h2>
        </>
      )}

    </div>
  );
}