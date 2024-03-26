import React from "react";
import { shoes } from "../shoelist";

const Products = () => {
  return (
    <div>
      {shoes.map((shoe, index) => {
        return (
          <div key={shoe.id}>
            <p>{shoe.title}</p>
            <p>{shoe.price}</p>
            <img src={shoe.image} alt="shoeImage" />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
