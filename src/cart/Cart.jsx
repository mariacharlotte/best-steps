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
    <div className="cart" style={{ margin: "20px" }}>
      <div className="cart-title">
        <h3>Your Cart Items</h3>
      </div>

      <div className="w-100 cart-list d-lg-flex gap-2">
        <div
          className="shoeincart cart-item d-flex flex-wrap gap-2"
          style={{ width: "70%", height: "370px" }}
        >
          {cartItems.map((item) => {
            const product = SHOES.find((shoe) => shoe.id === item.id);

            return (
              <ItemInCart data={product} qty={item.count} key={product.id} />
            );
          })}
        </div>
        <div
          className="summarydiv px-4 cart-info d-flex flex-column gap-2"
          style={{ width: "30%" }}
        >
          <h3>Summary</h3>
          <div className="d-flex justify-content-between">
            <h6>Subtotal:</h6>
            <h6> ${totalAmount}</h6>
          </div>
          <div className="d-flex justify-content-between">
            <h6>Delivery & Handling</h6>
            <h6>Free</h6>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h5>Total:</h5>
            <h5> ${totalAmount}</h5>
          </div>
          <div
            className="position-relative mb-3"
            style={{ width: "100%", cursor: "pointer" }}
          >
            <button type="button" className="whiteBtn  bg-dark text-white">
              Checkout
            </button>
            <div className="btnBorder bg-white"></div>
          </div>
          <div
            onClick={() => navigate("/products")}
            className="position-relative"
            style={{ width: "100%", cursor: "pointer" }}
          >
            <button className="whiteBtn bg-dark text-white">
              Continue Shopping
            </button>
            <div className="btnBorder bg-white"></div>
          </div>

          <div className="mt-5 p-3 border border-black rounded ">
            <h2 className="fw-bold mb-4">FREE DELIVERY</h2>

            <p>
              Your order of 50USD or more gets free standard delivery.
              <ul className="my-4">
                <li>Standard delivered 4-5 Business Days</li>
                <li>Express delivered 2-4 Business</li>
              </ul>
              Days Orders are processed and delivered Monday-Friday (excluding
              public holidays)
            </p>
          </div>

          <div className="mt-5 p-3 border border-black rounded bg-dark text-white">
            <h2 className="fw-bold mb-4">EASY RETURN</h2>
            <p>
              If you are not entirely satisfied with your order, you may be
              entitled to a refund.
            </p>
            <p>
              Please note returns and refunds will not be applicable for certain
              articles.
            </p>
            <p>
              Articles excluded from returns and refunds will have been listed
              with 'No returns, no refunds'.
            </p>
            <p>Check out our Return Policy for more details.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
