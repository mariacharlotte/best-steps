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
    <div className="mb-5">
      <div className="coverImg">
        <div
          className="p-5 d-flex flex-column justify-content-around "
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
              className="position-relative"
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

      {/* <video
            id="HeroVideo"
            style={{ width: "50%", height: "100%" }}
            loop=""
            src="https://static.nike.com/a/videos/q_90/476d28cd-731a-41fc-9bb5-0d2877aae7bd/video.mp4"
            autoplay=""
            class="css-ac32pf"
          ></video> */}

      <p className="mt-4 text-center fs-1 fw-bold">Trending Now</p>

      <div className="d-flex gap-5 m-auto" style={{ width: "80%" }}>
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

      <p className="p-5 fs-4 w-75 m-auto text-secondary text-center">
        With custom-designed running shoes from Best Steps. Our expert designers
        will work with you to create a unique pair of shoes tailored to your
        needs, preferences, and goals.
      </p>

      <p className="text-center fs-1 fw-bold bg-dark text-white">
        Everything You Need
      </p>

      <div
        className="mx-4 d-grid ms-auto me-auto"
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
    </div>
  );
};

export default Home;
