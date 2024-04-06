import React, { useContext } from "react";
import { CartContext } from "../context/MyContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const EachShoe = ({ shoe }) => {
  // const heartBtn = document.querySelectorAll("heartBtn");
  // const shoeimg = document.querySelectorAll("shoeimg");
  // shoeimg.addEventListener("click", () => {
  //   heartBtn.classList.add("changecolor");
  // });
  const { id, image, title, price } = shoe;

  const { cartItems, addToCart, toggleFavorite, favoriteIds } =
    useContext(CartContext);

  const cartItem = cartItems.find((item) => item.id === id);
  const favoriteId = favoriteIds.find((fid) => fid === id);

  return (
    <div className="products d-flex flex-column m-4">
      <div className="imgdiv position-relative">
        <img
          className="shoeimg mb-2 "
          src={image}
          alt="shoeImage"
          style={{ width: "100%" }}
        />
        <button
          className={
            "heartBtn btn btn-outline-secondary position-absolute start-0 end-1 " +
            (favoriteId && "text-danger text-opacity-50")
          }
          style={{ border: "none", background: "none" }}
          onClick={() => toggleFavorite(id)}
        >
          <FontAwesomeIcon className="fs-4 p-2 rounded-pill" icon={faHeart} />
        </button>
      </div>
      <p>
        <Link to={`/${id}`} className="text-decoration-none text-dark">
          {title}
        </Link>
      </p>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span>{price}</span>
      </div>

      <div className="position-relative" style={{ width: "300px" }}>
        <button
          type="button"
          className="whiteBtn"
          onClick={() => addToCart(id)}
        >
          <FontAwesomeIcon icon={faCartShopping} /> Add To Cart
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartItem?.count}
          </span>
        </button>
        <div className="btnBorder"></div>
      </div>
    </div>
  );
};

export default EachShoe;
