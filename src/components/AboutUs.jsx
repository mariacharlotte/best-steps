import React from "react";
<<<<<<< HEAD
import newshoe from "../assets/cover.png";
import newshoe2 from "../assets/cover1.jpg";
import merchant from "../assets/merchant.avif";
import card from "../assets/card.avif";
import deposit from "../assets/deposit.avif";
import fund from "../assets/fund.avif";
=======
import { Link } from "react-router-dom";
import shoe5 from "../assets/shoe5.png";
import shoe1 from "../assets/shoe1.png";
import shoe2 from "../assets/shoe2.png";
>>>>>>> 2aec4a7 (admin added)

const AboutUs = () => {
  return (
    <div className="container ">
<<<<<<< HEAD
      <div className="div6">
        <div className="first">
          <div className="img2">
            <img src={newshoe} alt="" />
          </div>
          <div className="text">
            <h1>Best Steps App</h1>
            <p>
              Keep up daily with the best of Best Steps, personalised for you.
            </p>
            <a href="" className="text-dark">
              Explore
            </a>
          </div>
        </div>

        <div className=" w-100 bg-dark text-white text-center p-3">
          <h1>INNOVATION</h1>
          <p>
            Best Steps' shoes are designed with the latest technologies to
            provide the best performance and comfort possible. Our shoes use
            latest technologies that improves the shoe's durability,
            breathability, and flexibility. We also use new technologies to
            provide superior cushioning and support.
          </p>
        </div>

        <div className="second">
          <div className="img2">
            <img src={newshoe2} alt="" />
          </div>
          <div className="text">
            <h1>Best Steps Run Club</h1>
            <p>Run with us in the Best Steps Run Club App.</p>
            <a href="" className="text-dark">
              Explore
            </a>
          </div>
        </div>
      </div>

      <div className="div7">
        <div className="cards">
          <div className="card1 text-center">
            <img src={merchant} alt="" />
            <p>In Stock at many shop</p>
          </div>
          <div className="card2 text-center">
            <img src={fund} alt="" />
            <p>Free Return Policy</p>
          </div>
          <div className="card3 text-center">
            <img src={deposit} alt="" />
            <p>Can be bought from Online</p>
          </div>
          <div className="card4 text-center">
            <img src={card} alt="" />
            <p>Card Payments Available</p>
          </div>
        </div>
=======
      <div className="row">
        {/* main section */}

        <div className="col-lg-8">
         
            <div>
              <h2>What is Best steps?</h2>
              <p style={{ width: "500px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                tempora, soluta, eligendi architecto laborum quod sint excepturi
                facere placeat libero magni. At consectetur sunt veritatis quia
                rerum, voluptas illo qui.
              </p>
            </div>
            <div>
              <Link className="link" to={"/Products"}>
                <h2>Browse the shoes</h2>{" "}
              </Link>{" "}
              <p style={{ width: "500px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                tempora, soluta, eligendi architecto laborum quod sint excepturi
                facere placeat libero magni. At consectetur sunt veritatis quia
                rerum, voluptas illo qui.
              </p>
            </div>
            <div>
              <Link className="link" to={"/Contact"}>
                <h2>Customize Your Own Shoes</h2>{" "}
              </Link>{" "}
              <p style={{ width: "500px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                tempora, soluta, eligendi architecto laborum quod sint excepturi
                facere placeat libero magni. At consectetur sunt veritatis quia
                rerum, voluptas illo qui.
              </p>
            </div>
            <div>
              <Link className="link" to={"/Products"}>
                <h2>Save Your Favourtie Shoes</h2>{" "}
              </Link>{" "}
              <p style={{ width: "500px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                tempora, soluta, eligendi architecto laborum quod sint excepturi
                facere placeat libero magni. At consectetur sunt veritatis quia
                rerum, voluptas illo qui.
              </p>
            </div>
          
        </div>
        {/* side bar section */}
        <div className="col-lg-4 col-md-12">
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src={shoe5} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={shoe2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={shoe1} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bg-black rounded-pill"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next "
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon bg-black rounded-pill"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
>>>>>>> 2aec4a7 (admin added)
      </div>
    </div>
  );
};

export default AboutUs;
