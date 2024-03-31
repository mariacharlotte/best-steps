import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_nobg.png";

const Navbar = () => {
  return (
    <div>
      <nav className="d-flex justify-content-between align-items-center mx-4 p-3">
        <span className="fw-bold fs-2">
          Best Steps &nbsp;
          <img src={logo} style={{ width: "35px", height: "35px" }} alt="" />
        </span>
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
