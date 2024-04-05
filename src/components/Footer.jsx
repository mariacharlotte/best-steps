import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer bg-dark text-white pt-5 mt-4">
      {/* Text and Input */}
      <div
        className="footer1 d-lg-flex d-md-block justify-content-between align-items-center m-auto"
        style={{ width: "85%" }}
      >
        <div className="pt-3" style={{ width: "500px" }}>
          <h1 className="fw-bold">Best Steps Offers a Suggestion</h1>
          <p>
            Stay up to date with the latest shoes, fashion trends, and special
            offers by signing up for our newsletter
          </p>
        </div>
        {/* Input Box */}
        <div
          className="inputbox p-2 d-flex justify-content-between bg-white rounded"
          style={{ width: "400px", height: "50px" }}
        >
          <input
            type="text"
            style={{ border: "none", outline: "none" }}
            placeholder="Enter your email"
          />
          <button className="rounded text-white bg-dark">Subscribe Now</button>
        </div>
      </div>

      <hr className="m-auto my-5" style={{ width: "85%" }} />

      <div style={{ width: "85%", margin: "auto" }}>
        {/* Logo and links */}
        <div className="d-lg-flex d-md-block justify-content-between pt-3 align-items-center d-md-block">
          <h1>
            <Link className="text-white text-decoration-none " to={"/"}>
              Best Steps
            </Link>
          </h1>
          <div className="d-lg-row d-md-column">
            <ul className="footer2 d-flex justify-content-between align-items-center">
              <Link
                className="ps-4 text-white footerlinks"
                style={{ textDecoration: "none" }}
                to={"/"}
              >
                Home
              </Link>
              <Link
                className="ps-4 text-white footerlinks"
                style={{ textDecoration: "none" }}
                to={"/products"}
              >
                Products
              </Link>
              <Link
                className="ps-4 text-white footerlinks"
                style={{ textDecoration: "none" }}
                to={"/aboutus"}
              >
                About Us
              </Link>
              <Link
                className="ps-4 text-white footerlinks"
                style={{ textDecoration: "none" }}
                to={"/contact"}
              >
                Contact
              </Link>
            </ul>
          </div>
        </div>

        {/* Last texts */}
        <div className="d-lg-flex d-md-block justify-content-between  align-items-center mt-5">
          <p className="d-flex justify-content-center">
            @2024 Best Steps. All rights reserved
          </p>
          <div className="d-flex justify-content-center">
            <a href="" className="pe-4 text-secondary text-decoration-none">
              Terms of Use
            </a>
            <a href="" className="text-secondary text-decoration-none">
              Private Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
