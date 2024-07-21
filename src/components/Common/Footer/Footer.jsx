import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaApple, FaGoogle } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import Button from "../Button";
import axios from "axios";

const Footer = () => {
  const [subemail, setSubEmail] = useState("");
  const [msg, setMsg] = useState(false);
  const [alreadyExist, setAlreadyExist] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const subscribe = async () => {
    try {
      await axios.post(
        "https://www.hoogaaa.com/hoogaaa/api/v1/action/subscription/",
        {
          email: subemail,
        }
      );
      setMsg(true);
    } catch (error) {
      console.log("😁", error.response.status);
      if (error.response.status === 401) {
        setAlreadyExist("Email Already Exist");
      }
      setMsg(false);
    }
  };

  return (
    <div className="container section-padding footer">
      <div className="row gap-5 gap-lg-0">
        <div className="col-md-6 col-lg-3">
          <Link to="/" className="logo">
            Hoogaaa
          </Link>
          <p className="my-3">
            Generate outside the box thinking with the possibility to target the
            low.
          </p>
        </div>
        <div className="col-md-6 col-lg-2 offset-lg-1">
          <h4>Resources</h4>
          <ul className="mt-3">
            <Link to="/about">About us</Link>
            <Link to="/career">Career</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </ul>
        </div>
        <div className="col-md-6 col-lg-3 ">
          <h4>Products</h4>
          <ul className="mt-3">
            <Link to="/analytics">Data & Analytics</Link>
            <Link to="/automation">Automation & RPA</Link>
            <Link to="/cloud">Cloud Solution</Link>
            <Link to="/product-engineering">Product Engineering</Link>
          </ul>
        </div>
        <div className="col-md-6 col-lg-3 ">
          <h4>Get Email Notifications</h4>
          <p className="mb-0 mt-3">
            Generate outside the box thinking with the posibility to target the
            show
          </p>
          <form className="mt-3" onSubmit={handleSubmit}>
            <div className="d-flex align-items-center">
              <input
                name="email"
                type="email"
                className="form-control "
                id="subscribe"
                aria-describedby="subscribe"
                onChange={(e) => setSubEmail(e.target.value)}
                placeholder="Enter Email..."
                style={{
                  borderRadius: "8px 0 0 8px",
                  borderRight: 0,
                  borderWidth: "1px",
                  width: "70%",
                  padding: "9px 15px",
                }}
                value={subemail}
              />
              <Button
                children={"Submit"}
                bgcolor={"#397f83"}
                tcolor={"#fff"}
                padding={"9px 15px"}
                radius={"0 8px 8px 0"}
                border="1px solid #397f83 "
                myFun={() => subscribe()}
              />
            </div>
          </form>
          {msg ? (
            <p className="mt-2" style={{ color: "#5F6D7E", fontWeight: "500" }}>
              Thanks for signing up to Hoogaaa.{" "}
              <span style={{ fontWeight: 400, color: "#5F6D7E" }}>
                We're happy to have you.
              </span>
            </p>
          ) : (
            <p className="mt-2" style={{ color: "red" }}>
              {alreadyExist}
            </p>
          )}
        </div>
      </div>
      <div
        className="row align-items-center justify-space-between footer-bottom"
        style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}
      >
        <div className="col-12 mt-3 d-flex gap-2 align-items-center justify-content-center">
          <p className="mb-0">&copy; 2023 Hoogaaa. All Rights Reserverd.</p>
          <Link to="https://www.linkedin.com/company/hoogaaa/" style={{marginTop: "0px"}}>
            <BsLinkedin style={{ fontSize: "1.6rem" }} />
          </Link>
        </div>
        {/* <div className="col-md-6">
          <div className="d-flex gap-3 align-items-center justify-content-md-end">
            <Link to="http://facebook.com">
              <FaFacebook style={{ fontSize: "1.6rem" }} />
            </Link>
            <Link to="http://gmail.com">
              <FaGoogle style={{ fontSize: "1.6rem" }} />
            </Link>
            <Link to="http://apple.com">
              <FaApple style={{ fontSize: "1.6rem" }} />
            </Link>
            <Link to="http://instagram.com">
              <FaInstagram style={{ fontSize: "1.6rem" }} />
            </Link>
            <Link to="http://instagram.com">
              <BsLinkedin style={{ fontSize: "1.6rem" }} />
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
