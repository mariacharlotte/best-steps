import React from "react";
import shoe5 from "../assets/shoe5.png";

const Contact = () => {
  return (
    <div className="Hero">
      <div className="row d-flex align-items-center">
        <div className="col-md-8  col-lg-7 ">
          <div className="intro ">
            <h2 className="d-flex justify-content-center">
              Create Your Dream Shoes
            </h2>
            <p>
              If you're interested in ordering a custom-made pair of running
              shoes, please fill out the form below. Our team of expert
              designers will work with you to create your dream shoes
            </p>
          </div>
          <div className="contantInfo d-flex justify-content-center">
            <form className="row g-3" style={{width:"500px"}}>
              <div className="col-md-8 col-lg-6">
                <label className="form-label">First name</label>
                <input type="text" className="form-control " required />
              </div>
              <div className="col-md-8 col-lg-6">
                <label className="form-label">Last name</label>
                <input type="text" className="form-control " required />
              </div>
              <div className="col-md-8 col-lg-6">
                <label className="form-label">Username</label>
                <div className="input-group">
                  <input type="text" className="form-control" required />
                </div>
              </div>
              <div className="col-md-8 col-lg-6">
                <label className="form-label">City</label>
                <input type="text" className="form-control " required />
              </div>
              <div className="col-md-8 col-lg-6">
                <label className="form-label">State</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="col-md-8 col-lg-6">
                <label className="form-label">Zip</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="col-md-8 col-lg-6">
                <label className="form-label">Shoe type</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Running,climbing"
                  required
                />
              </div>
              <div className="col-md-8 col-lg-6">
                <label className="form-label">Message</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type Message"
                  required
                />
              </div>

              <button className="btn btn-primary col-md-5" type="submit">
                Submit form
              </button>
            </form>
          </div>
        </div>
        <div className="col-lg-4 col-md-8 ">
        <img src={shoe5} alt="imageError" style={{ width: "500px" }} />

          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            voluptatum autem ratione? Incidunt debitis velit illo deserunt iste
            suscipit dolore deleniti excepturi adipisci facilis, aspernatur
            pariatur illum omnis officia ut.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
