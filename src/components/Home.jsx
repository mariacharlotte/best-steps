import React from "react";
import homeshoe1 from "../assets/homeshoe.png";
import homeshoe2 from "../assets/homeshoe2.png";
import homeshoe3 from "../assets/homeshoe3.png";
import medal from "../assets/medal.png";
import cover from "../assets/cover.jpg";
import covershoe1 from "../assets/covershoe1.png";
import covershoe2 from "../assets/covershoe2.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  // const title = document.querySelector("h3");
  // title.addEventListener("click", () => {
  //   title.classNameList.add("changecolor");
  // });
  return (
    <div>
      {/* First div */}
      <div className="coverImg">
        <div
          className="covertxt p-5 d-flex flex-column justify-content-around"
          style={{ width: "30%" }}
        >
          <div
            className="group p-2 border border-secondary rounded d-flex justify-content-between align-items-center"
            style={{ width: "230px", height: "3.5rem" }}
          >
            <img
              className="object-fit-cover"
              src={medal}
              alt=""
              style={{ height: "2rem" }}
            />
            <div className="p-2">
              <span className="text-secondary">Product Hunt</span>
              <p className="m-0">#1 Product of the Day</p>
            </div>
          </div>

          <p className="fs-1 fw-bold">Feel The Unreal</p>
          <p className="fs-3">The next generation of Air Technology is here.</p>

          <div className="flex flex-column justify-content-between position-relative p-2">
            <div
              className="position-relative whiteBtndiv"
              style={{ width: "352px", height: "56px" }}
            >
              <button
                className="whiteBtn"
                onClick={() => navigate("/products")}
              >
                See More
              </button>
              <div className="btnBorder"></div>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 text-center fs-1 fw-bold">Trending Now</p>

      {/* Three cards */}
      <div className="threeCards d-flex gap-5 m-auto" style={{ width: "80%" }}>
        <div
          className=" p-3 rounded border border-secondary text-center"
          style={{ height: "370px", width: "calc(100% / 3)" }}
        >
          <img
            src={homeshoe1}
            className="thumbnail"
            alt="imageError"
            style={{ width: "300px" }}
          />
          <div className="hole mb-2"></div>
          <h3>NIKE ACG 2020 RUNNER</h3>
          <p>
            The Nike ACG does it all with tough traction and a drainage system
            for treks through trails and water.
          </p>
        </div>

        <div
          className="p-3 rounded border border-secondary text-center"
          style={{ height: "370px", width: "calc(100% / 3)" }}
        >
          <img
            src={homeshoe2}
            className="thumbnail"
            alt="imageError"
            style={{ width: "300px" }}
          />
          <div className="hole mb-2"></div>

          <h3>Nike Air Huarache Runner</h3>
          <p>
            With its stretchy, foot-hugging fabric and futuristic heel cage,
            it's still everything you love about the Huarache.
          </p>
        </div>

        <div
          className="p-3 rounded border border-secondary text-center"
          style={{ height: "370px", width: "calc(100% / 3)" }}
        >
          <img
            src={homeshoe3}
            className="thumbnail"
            alt="imageError"
            style={{ width: "300px" }}
          />
          <div className="hole mb-2"></div>

          <h3>Nike Air Jordan 35'</h3>
          <p>
            This special-edition Air Jordan 35' brings rich textures and warm
            neutrals together for a look to complement your freshest outfit.
          </p>
        </div>
      </div>

      {/* Shop All Button */}
      <div className="m-4 d-flex justify-content-center fs-5">
        <button className="shopAll" onClick={() => navigate("/products")}>
          Shop All
        </button>
      </div>

      {/* Some texts */}
      <p className="p-5 fs-4 w-75 m-auto text-secondary text-center">
        With custom-designed running shoes from Best Steps. Our expert designers
        will work with you to create a unique pair of shoes tailored to your
        needs, preferences, and goals.
      </p>

      <p className="text-center fs-1 fw-bold bg-dark text-white">
        Everything You Need
      </p>

      <div
        className="cols4 m-5 d-grid ms-auto me-auto"
        style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr", width: "80%" }}
      >
        <div>
          <p>Air Force 1</p>
          <p>Huarache</p>
          <p>Air Max 90</p>
          <p>Air Max 95</p>
          <p>Air Max 97</p>
          <p>Air Max 270</p>
          <p>Air Max 720</p>
          <p>All Air Max</p>
          <p>Vapormax</p>
        </div>

        <div>
          <p>All Shoes</p>
          <p>Custom Shoes</p>
          <p>Jordan Shoes</p>
          <p>Running Shoes</p>
          <p>Basketball Shoes</p>
          <p>Football Shoes</p>
          <p>Gym & Training Shoes</p>
          <p>Lifestyle Shoes</p>
        </div>

        <div>
          <p>All Clothing</p>
          <p>Modest Wear</p>
          <p>Hoodies & Pullovers</p>
          <p>Shirts & Tops</p>
          <p>Jackets</p>
          <p>Compression & Nike Pro</p>
          <p>Trousers & Leggings</p>
          <p>Shorts</p>
        </div>

        <div>
          <p>Infant & Toddler Shoes</p>
          <p>Kids' Shoes</p>
          <p>Kids' Jordan Shoes</p>
          <p>Kids' Basketball Shoes</p>
          <p>Kids' Running Shoes</p>
          <p>Kids' Clothing</p>
          <p>Kids' Backpacks</p>
          <p>Kids' Socks</p>
        </div>
      </div>

      <div className="mt-4 p-4 bg-danger text-white d-flex align-items-center justify-content-center">
        <h3>BECOME A MEMBER & ENJOY 15% DISCOUNT </h3>
        <div className="flex flex-column justify-content-between position-relative p-2">
          <div className="position-relative whiteBtndiv">
            <button
              className="whiteBtn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Sign Up
            </button>
            <div className="btnBorder"></div>
          </div>

          <div className="text-dark">
            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Sign Up Form
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form className="row g-3 p-3" style={{ width: "500px" }}>
                      <div className="row my-3">
                        <label className="mb-2" htmlFor="name">
                          01. Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          style={{
                            outline: "none",
                            border: "none",
                            borderBottom: "1px solid black",
                            paddingBottom: "5px",
                          }}
                          placeholder="Enter Name Here"
                        />
                      </div>

                      <div className="row my-3">
                        <label className="mb-2" htmlFor="email">
                          02. Email Address
                        </label>
                        <input
                          id="email"
                          type="text"
                          style={{
                            outline: "none",
                            border: "none",
                            borderBottom: "1px solid black",
                            paddingBottom: "5px",
                          }}
                          placeholder="Enter Email Here"
                        />
                      </div>

                      <div className="row my-3">
                        <label className="mb-2" htmlFor="ph">
                          03. Phone number
                        </label>
                        <input
                          id="ph"
                          type="text"
                          style={{
                            outline: "none",
                            border: "none",
                            borderBottom: "1px solid black",
                            paddingBottom: "5px",
                          }}
                          placeholder="Enter Phone Number"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      className="w-25 py-2 submit bg-dark text-white"
                      style={{ transition: "all 0.2s" }}
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>

                    <button
                      type="submit"
                      className="w-25 py-2 submit"
                      style={{ transition: "all 0.2s" }}
                      data-bs-dismiss="modal"
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
