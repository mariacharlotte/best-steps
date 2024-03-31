import React from "react";
import shoe1 from "../assets/homeshoe.png";

const Home = () => {
  return (
    <div className="mx-5">
      <p className="text1 text-secondary">
        With custom-designed running shoes from Xenon. Our expert designers will
        work with you to create a unique pair of shoes tailored to your needs,
        preferences, and goals.
      </p>

      <div className="d-flex gap-5 m-auto" style={{ width: "80%" }}>
        <div
          className="p-3 rounded border border-secondary text-center"
          style={{ height: "350px" }}
        >
          <img src={shoe1} alt="imageError" style={{ width: "300px" }} />
          <h3>NebulaX</h3>
          <p>
            A high-tech, lightweight running shoe with a sleek, futuristic
            design and advanced cushioning for maximum comfort.
          </p>
        </div>

        <div
          className="p-3 rounded border border-secondary text-center"
          style={{ height: "350px" }}
        >
          <img src={shoe1} alt="imageError" style={{ width: "300px" }} />
          <h3>NebulaX</h3>
          <p>
            A high-tech, lightweight running shoe with a sleek, futuristic
            design and advanced cushioning for maximum comfort.
          </p>
        </div>

        <div
          className="p-3 rounded border border-secondary text-center"
          style={{ height: "350px" }}
        >
          <img src={shoe1} alt="imageError" style={{ width: "300px" }} />
          <h3>NebulaX</h3>
          <p>
            A high-tech, lightweight running shoe with a sleek, futuristic
            design and advanced cushioning for maximum comfort.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
