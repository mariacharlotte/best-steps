import React, { useContext } from "react";
import { CartContext } from "../context/MyContext";
import FavoriteItem from "./FavoriteItem";
import { SHOES } from "../shoelist";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Favorite = () => {
  const { favoriteIds, cartItems } = useContext(CartContext);
  const totalItemCount = cartItems.reduce((sum, item) => {
    return sum + item.count;
  }, 0);
  return (
    <div className="container">
      {/* Two links to go to Cart Component and Favorite Component */}
      <div className="position-fixed end-0 z-2 bottom-0 pe-3">
        <ul
          className="d-flex flex-column justify-content-around align-items-center mb-5 "
          style={{ height: "100px" }}
        >
          <Link className="link " to={"/cart"}>
            <span className="">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="fs-4 text-secondary bg-warning p-2 rounded-pill"
              />
              {totalItemCount > 0 && (
                <span
                  className="position-absolute translate-middle
             badge"
                  style={{ background: "darkorchid" }}
                >
                  {totalItemCount}
                </span>
              )}
            </span>
          </Link>

          <Link className="link" to={"/fav"}>
            <FontAwesomeIcon
              className="fs-4 text-secondary bg-warning p-2 rounded-pill"
              icon={faHeart}
            />
            {favoriteIds.length > 0 && (
              <span
                className="position-absolute translate-middle
             badge"
                style={{ background: "darkorchid" }}
              >
                {favoriteIds.length}
              </span>
            )}
          </Link>
        </ul>
      </div>

      <div className="product-title">
        <h3>Favorite Items</h3>
      </div>
      <div className="products-list d-flex flex-wrap gap-2">
        {favoriteIds.map((fid) => {
          const product = SHOES.find((shoe) => shoe.id === fid);
          return <FavoriteItem data={product} key={fid} />;
        })}
      </div>
    </div>
  );
};

export default Favorite;
