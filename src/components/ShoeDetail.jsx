import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { SHOES } from "../shoelist";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { CartContext } from "../context/MyContext";

export const ProductDetail = () => {
  const params = useParams();
  const product = SHOES.find((product) => product.id === Number(params.id));
  const { id, title, price, image, detail } = product;
  const { cartItems, addToCart, favoriteIds, toggleFavorite } =
    useContext(CartContext);
  const cartItem = cartItems.find((item) => item.id === id);
  const favoriteId = favoriteIds.find((fid) => fid === id);
  const relatedItems = SHOES.filter(
    (product) => product.id !== Number(params.id)
  );
  return (
    <div className="m-2">
      <h3>Product Detail</h3>

      <div className="card mb-3">
        <div className="detailcard row align-items-center g-0">
          <div className="detail1 col-lg-4">
            <img
              src={image}
              className="img-fluid rounded-start"
              width={"100%"}
              alt={title}
            />
          </div>
          <div className="detail1 col-lg-4">
            <div className="card-body">
              <h5 className="card-title">
                <Link to={`/${id}`} className="text-decoration-none text-dark">
                  {title}
                </Link>
              </h5>
              <p className="card-text fs-3">${price}</p>

              <div className="mb-4">
                <h5>Sizes</h5>
                <div
                  className="d-grid sizes"
                  style={{ width: "400px", gridTemplateColumns: "1fr 1fr 1fr" }}
                >
                  <button className="p-2 m-2 rounded-pill sizebtn">
                    EU 40
                  </button>
                  <button className="p-2 m-2 rounded-pill sizebtn">
                    EU 40.5
                  </button>
                  <button className="p-2 m-2 rounded-pill sizebtn">
                    EU 41
                  </button>
                  <button className="p-2 m-2 rounded-pill sizebtn">
                    EU 42
                  </button>
                  <button className="p-2 m-2 rounded-pill sizebtn">
                    EU 42.5
                  </button>
                  <button className="p-2 m-2 rounded-pill sizebtn">
                    EU 43
                  </button>
                  <button className="p-2 m-2 rounded-pill sizebtn">
                    EU 44
                  </button>
                  <button className="p-2 m-2 rounded-pill sizebtn">
                    EU 44.5
                  </button>
                  <button className="p-2 m-2 rounded-pill sizebtn">
                    EU 45
                  </button>
                  <button className="p-2 m-2 rounded-pill sizebtn">
                    EU 45.5
                  </button>
                  <button className="p-2 m-2 rounded-pill sizebtn">
                    EU 46
                  </button>
                  <button className="p-2 m-2 rounded-pill sizebtn">
                    EU 47
                  </button>
                  <button className="p-2 m-2 rounded-pill sizebtn">
                    EU 47.5
                  </button>
                </div>
              </div>

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
                    "btn btn-outline-none position-relative fs-3 " +
                    (favoriteId && "text-danger")
                  }
                  onClick={() => toggleFavorite(id)}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
            </div>
          </div>
          <div className="description col-lg-4 row d-flex justify-content-center align-items-center">
            <div className="p-4 m-5" style={{ background: "#F6f6f6" }}>
              <p>{detail}</p>
            </div>
          </div>
        </div>
      </div>

      <h3>Related Products</h3>
      <div
        className="relatedShoes d-grid col-md-4 gap-3 m-auto py-3"
        style={{
          width: "100%",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gridAutoRows: "auto",
        }}
      >
        {relatedItems.map((product) => (
          <div className="card" key={product.id}>
            <img
              src={product.image}
              className="card-img-top"
              alt={product.title}
            />
            <div className="card-body text-center">
              <h5 className="card-title">
                <Link
                  to={`/${product.id}`}
                  className="text-decoration-none text-dark"
                >
                  {product.title}
                </Link>
              </h5>

              <p className="card-text">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
