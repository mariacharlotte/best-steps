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
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">${price}</p>
        <button
          type="button"
          className="btn btn-outline-primary position-relative me-2"
          onClick={() => addToCart(id)}
        >
          <FontAwesomeIcon icon={faCartShopping} /> Add To Cart
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartItem?.count}
          </span>
        </button>
        <button
          type="button"
          className={
            "btn btn-outline-primary position-relative " +
            (favoriteId && "text-danger")
          }
          onClick={() => toggleFavorite(id)}
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
    </div>
  );
};

export default FavoriteItem;
