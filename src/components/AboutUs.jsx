import React from "react";
import newshoe from "../assets/cover.png";
import newshoe2 from "../assets/cover1.jpg";
import merchant from "../assets/merchant.avif";
import card from "../assets/card.avif";
import deposit from "../assets/deposit.avif";
import fund from "../assets/fund.avif";

const AboutUs = () => {
  return (
    <div className="container ">
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
      </div>
    </div>
  );
};

export default AboutUs;
