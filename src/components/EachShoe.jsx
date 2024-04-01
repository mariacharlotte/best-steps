import React, { useContext } from "react";
import { CartContext } from "../context/MyContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const EachShoe = ({ shoe }) => {
  // Instead of writing shoe.id, shoe.image, we can shorten by putting them with spread operator
  const { id, image, title, price } = shoe;

  const { cartItems, addToCart, toggleFavorite, favoriteIds } =
    useContext(CartContext);

  const cartItem = cartItems.find((item) => item.id === id);
  const favoriteId = favoriteIds.find((fid) => fid === id);

  return (
    <div className="products d-flex flex-column m-4">
      <div className="imgdiv position-relative">
        <img
          className="shoeimg mb-2"
          src={image}
          alt="shoeImage"
          style={{ width: "100%" }}
        />
        <button
          className={
            "heartBtn btn btn-outline-secondary position-absolute start-0 end-1 " +
            (favoriteId && "text-info text-opacity-50")
          }
          style={{ border: "none", background: "none" }}
          onClick={() => toggleFavorite(id)}
        >
          <FontAwesomeIcon className="fs-4 p-2 rounded-pill" icon={faHeart} />
        </button>
      </div>
      <p>{title}</p>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span>{price}</span>
      </div>

      <div className="position-relative">
        <button className="addBtn text-start" onClick={() => addToCart(id)}>
          Add To Cart
        </button>

        <div
          style={{
            position: "absolute",
            left: "75%",
            top: "25%",
          }}
        >
          <span className="position-relative">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="fs-5 text-secondary p-2 rounded-pill"
            />
            <span
              className="position-absolute start-100 translate-middle
             badge"
              style={{ background: "darkorchid", borderRadius: "50%" }}
            >
              {cartItem?.count}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default EachShoe;
