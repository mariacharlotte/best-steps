import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-primary-light">
      <div className="d-lg-flex d-md-block justify-content-space-between align-items-center m-4">
        <div className="pt-3">
          <h2 className="d-flex justify-content-center">
            Best Steps Offers a Suggestion
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            autem aspernatur nobis! Voluptatem earum, nam laborum error ratione
            tempore sequi ut culpa cupiditate, fuga quo. Beatae sint quos
            doloremque praesentium.
          </p>
        </div>
        <div>
        <form action="" className="d-flex justify-content-center pt-3">
          <input
            type="text"
            placeholder="Enter your Email"
            style={{ width: "500px", height: "50px" }}
            className=" footerInput"
          />
          <button className="rounded-pill ps-1">Subscribe Now</button>
        </form>
        </div>
      </div>
      <hr/>
      <div>
        <div className="d-lg-flex d-md-block justify-content-between pt-3 align-items-center m-4 d-md-">
          <h1 className="d-flex justify-content-center">
            <a href="./"style={{color: "#000000", textDecoration: "none" }}>
              Best Steps
            </a>
          </h1>
          <div className="links  d-lg-row d-md-column">
            <nav className="d-flex justify-content-between align-items-center m-4">
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
        </div>
        <div className="d-lg-flex d-md-block justify-content-between  align-items-center m-4">
          <p className="d-flex justify-content-center">@2024 Best Steps. All rights reserved</p>
          <div className="d-flex justify-content-center">
            <a href="" className="pe-2">
              Terms of Use
            </a>
            <a href="">Private Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
