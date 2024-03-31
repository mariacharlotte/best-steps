import React, { useContext } from "react";
import { CartContext } from "../context/MyContext";
import ItemInCart from "./ItemInCart";
import { SHOES } from "../shoelist";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(CartContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();

  return (
    <div className="cart" style={{ margin: "10px" }}>
      <div className="cart-title">
        <h3>Your Cart Items</h3>
      </div>

      <div className="cart-list d-flex gap-5">
        <div className="cart-item d-flex flex-wrap gap-2">
          {cartItems.map((item) => {
            const product = SHOES.find((shoe) => shoe.id === item.id);

            return (
              <ItemInCart data={product} qty={item.count} key={product.id} />
            );
          })}
        </div>
        <div className="cart-info d-flex flex-column gap-2">
          Subtotal: ${totalAmount}
          <button className="btn btn-primary">Checkout</button>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/products")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
