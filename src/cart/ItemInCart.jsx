import React, { useContext } from "react";
import { CartContext } from "../context/MyContext";

const ItemInCart = (props) => {
  const { id, title, price, image, description } = props.data;
  const qty = props.qty;

  const { addToCart, removeFromCart, updateCartItemCount } =
    useContext(CartContext);

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-6">
          <img src={image} className="img-fluid rounded-start" alt={title} />
        </div>

        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text fs-3">${price}</p>

            <div className="card-text d-flex justify-content-between">
              <span>Quantity</span>

              <div className="input-group mb-3 w-75">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={(e) => removeFromCart(id)}
                >
                  -
                </button>
                <input
                  type="text"
                  className="form-control"
                  value={qty}
                  onChange={(e) =>
                    updateCartItemCount(Number(e.target.value), id)
                  }
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={(e) => addToCart(id)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="p-4">
              <p className="text-secondary">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemInCart;
