import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { CartContext } from "../context/MyContext";

const FavoriteItem = (props) => {
  const { id, title, price, image } = props.data;
  const { cartItems, addToCart, favoriteIds, toggleFavorite } =
    useContext(CartContext);
  const cartItem = cartItems.find((item) => item.id === id);
  const favoriteId = favoriteIds.find((fid) => fid === id);

  return (
    <div className="card" style={{ width: "25rem" }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">${price}</p>
        <div className="d-flex justify-content-between">
          <div className="position-relative" style={{ width: "300px" }}>
            <button
              type="button"
              className="whiteBtn bg-dark text-white"
              onClick={() => addToCart(id)}
            >
              <FontAwesomeIcon icon={faCartShopping} /> Add To Cart
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartItem?.count}
              </span>
            </button>
            <div className="btnBorder bg-white"></div>
          </div>
          <button
            type="button"
            className={
              "btn btn-outline-dark position-relative " +
              (favoriteId && "text-danger")
            }
            onClick={() => toggleFavorite(id)}
          >
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteItem;
