import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="d-flex justify-content-between align-items-center m-4">
        <span className="fw-bold">Best Steps</span>
        <ul className="d-flex">
          <Link className="link py-3 px-5" to={"/"}>
            Home
          </Link>
          <Link className="link py-3 px-5" to={"/products"}>
            Products
          </Link>
          <Link className="link py-3 px-5" to={"/aboutus"}>
            About Us
          </Link>
          <Link className="link py-3 px-5" to={"/contact"}>
            Contact
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
