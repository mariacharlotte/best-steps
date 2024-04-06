import React from "react";
import covershoe from "../assets/covershoe2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";

const Contact = () => {
  return (
    <div className="my-5 d-md-flex flex-md-column md-align-items-center">
      <div
        className="m-auto d-lg-flex 
       justify-content-between"
        style={{ width: "90%" }}
      >
        <div className="contactdiv1">
          <div
            style={{ width: "400px", marginBottom: "40px", textAlign: "start" }}
          >
            <h1 style={{ fontSize: "50px" }}>Create Your Dream Shoes</h1>
            <p>
              If you're interested in ordering a custom-made pair of running
              shoes, please fill out the form below. Our team of expert
              designers will work with you to create your dream shoes
            </p>
          </div>
          <div className="">
            <h3>Contact Form:</h3>
            <form className="row g-3" style={{ width: "500px" }}>
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

              <div className="row my-3">
                <label className="mb-2" htmlFor="stype">
                  04. Shoe Type
                </label>
                <input
                  id="stype"
                  type="text"
                  style={{
                    outline: "none",
                    border: "none",
                    borderBottom: "1px solid black",
                    paddingBottom: "5px",
                  }}
                  placeholder="Enter Shoe Type"
                />
              </div>

              <div className="row my-3">
                <label className="mb-2" htmlFor="msg">
                  Message
                </label>

                <textarea
                  name=""
                  id="msg"
                  rows="2"
                  placeholder="Type message"
                  className="rounded border-dark"
                  style={{ outline: "none" }}
                ></textarea>
              </div>

              <button
                className="w-50 py-2 submit"
                style={{ transition: "all 0.2s" }}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>

        <div className="contactdiv1 mt-4">
          <img src={covershoe} width={"400px"} alt="imageError" />

          <div style={{ width: "400px" }}>
            <p className="my-4 text-secondary">
              At Best Steps, we value your feedback and are here to help you
              with any questions or concerns you may have. You can reach us
              through the following methods:
            </p>
            <div className="my-2 fw-bold">
              <FontAwesomeIcon className="me-2" icon={faPhone} />
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="tel:555-555-5555"
              >
                555-555-5555
              </a>
            </div>
            <div className="my-2 fw-bold">
              <FontAwesomeIcon className="me-2" icon={faEnvelope} />
              <a
                href="mailto:inquiry@beststeps.com"
                style={{ textDecoration: "none", color: "black" }}
              >
                inquiry@beststeps.com
              </a>
            </div>
            <div className="my-2 fw-bold">
              <FontAwesomeIcon className="me-2" icon={faUser} />
              <span>chat bot</span>
            </div>
            <p className="my-4 text-secondary">
              If you have any questions or concerns, please don't hesitate to
              reach out to us. We'll be happy to assist you in any way we can
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
