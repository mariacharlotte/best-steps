import React, { useContext } from "react";
import { SHOES } from "../shoelist";

import { Link } from "react-router-dom";
import { CartContext } from "../context/MyContext";
import EachShoe from "./EachShoe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const Products = (props) => {
  const { cartItems, addToCart, favoriteIds } = useContext(CartContext);

  const totalItemCount = cartItems.reduce((sum, item) => {
    return sum + item.count;
  }, 0);

  return (
    <div className="position-relative">
      {/* Two links to go to Cart Component and Favorite Component */}
      <div className="position-fixed end-0 z-2 bottom-0 pe-3">
        <ul
          className="d-flex flex-column justify-content-around align-items-center mb-5 "
          style={{ height: "100px" }}
        >
          <Link className="link " to={"/cart"}>
            <span className="">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="fs-4 text-white bg-dark p-2 rounded-pill"
              />
              {totalItemCount > 0 && (
                <span
                  className="position-absolute translate-middle
             badge bg-danger"
                >
                  {totalItemCount}
                </span>
              )}
            </span>
          </Link>

          <Link className="link" to={"/fav"}>
            <FontAwesomeIcon
              className=" fs-4 text-white bg-dark p-2 rounded-pill"
              icon={faHeart}
            />
            {favoriteIds.length > 0 && (
              <span
                className="position-absolute translate-middle
             badge bg-danger"
              >
                {favoriteIds.length}
              </span>
            )}
          </Link>
        </ul>
      </div>

      {/* All the shoes will be displayed here, but each shoe can be found in EachShoe component */}
      <div
        className="d-grid col-md-4 gap-3 m-auto py-3"
        style={{
          width: "90%",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gridAutoRows: "470px",
        }}
      >
        {SHOES.map((shoe) => (
          <EachShoe shoe={shoe} key={shoe.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
