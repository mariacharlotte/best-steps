import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_nobg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="">
      <nav className="d-flex justify-content-between align-items-center mx-4 p-3">
        <span className="fw-bold fs-2">
          Best Steps &nbsp;
          <img src={logo} style={{ width: "35px", height: "35px" }} alt="" />
        </span>
        <ul className="navUl d-flex">
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

        {navbarOpen ? (
          <FontAwesomeIcon
            className="barIcon fs-3"
            icon={faXmark}
            onClick={() => setNavbarOpen((prev) => !prev)}
          />
        ) : (
          <FontAwesomeIcon
            className="barIcon fs-3"
            icon={faBars}
            onClick={() => setNavbarOpen((prev) => !prev)}
          />
        )}
      </nav>

      <div
        className={
          "z-1 togglelinks position-absolute bg-white " +
          (navbarOpen && "d-block")
        }
        style={{ height: "400px", width: "100%" }}
      >
        <ul className="">
          <Link className="d-block link py-3 px-5" to={"/"}>
            Home
          </Link>
          <Link className="d-block link py-3 px-5" to={"/products"}>
            Products
          </Link>
          <Link className="d-block link py-3 px-5" to={"/aboutus"}>
            About Us
          </Link>
          <Link className="d-block link py-3 px-5" to={"/contact"}>
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
