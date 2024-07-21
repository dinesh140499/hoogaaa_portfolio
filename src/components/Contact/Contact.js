import toast, { Toaster } from "react-hot-toast";
import React, { useState, useEffect } from "react";
import SectionPara from "../Common/SectionPara";
import Button from "../Common/Button";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import Loader from '../Common/Loader/Loader'

const Contact = () => {
  const [toggle, setToggle] = useState(false);
  const [serviceType, setServiceType] = useState("");
  const [otp, setOtp] = useState("");
  const [inputItem, setInputItem] = useState([]);
  const [verified, setVerified] = useState(false);
  const [loading] = useState(false)
  const [oneToastClick, setOneToastClick] = useState(0)
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
    enterOtp: "",
  });
  const [counter, setCounter] = useState(600);
  useEffect(() => {
    var timer =
      counter > 0 &&
      setInterval(() => {
        setCounter(counter - 1);
      }, 1000);
    return () => clearInterval(timer);
  }, [counter]);

  useEffect(() => {
    if (window.pageYOffset > 0) {
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      });
    }
  }, [])

  const inputData = (e) => {
    let { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputItem(data);
  };

  const sendContactData = async () => {
    setOneToastClick(oneToastClick + 1)
    try {
      await axios.post(
        "https://www.hoogaaa.com/hoogaaa/api/v1/action/sendContactus/",
        {
          firstName: data.fname,
          lastName: data.lname,
          phone: data.phone,
          email: data.email,
          message: data.message,
        }
      );
      setServiceType("sendForm");
      toast.success("We'll Contact You Soon.", {
        duration: 1500
      });
    } catch (error) {
      toast.error("Please Enter Email", {
        duration: 1500
      });
    }
  };

  ///////Model oprn and otp send in mobile

  // const verifyPhone = async () => {
  //   try {
  //     if (data.phone) {
  //       await axios.post(
  //         "https://www.hoogaaa.com/hoogaaa/api/v1/action/phoneNumberOtp/",
  //         {
  //           phone: data.phone,
  //         }
  //       );

  //       toast.success("Valid Phone Number");
  //       setToggle(true);
  //       setServiceType("phone");
  //     }
  //   } catch (error) {
  //     toast.error(error.response.data.errorMessage);
  //   }
  // };

  // const verifyPhoneOtp = async () => {
  //   try {
  //     const res = await axios.post(
  //       "https://www.hoogaaa.com/hoogaaa/api/v1/action/verifyPhoneOtp/",
  //       {
  //         phone: data.phone,
  //         otp: otp,
  //       }
  //     );
  //     if (res.status === 200) {
  //       toast.success("Otp Verified");
  //       setServiceType(data.phone);
  //       setInputItem("");
  //     }
  //   } catch (error) {
  //     toast.error(error.response.data.errorMessage);
  //     setToggle(true);
  //     setOtp("");
  //   }
  // };

  ////// model open and otp send in email address

  const verifyEmail = async () => {
    try {
      await axios.post("https://www.hoogaaa.com/hoogaaa/api/v1/action/emailOtp", {
        email: data.email,
      });
      toast.success("Valid Email", {
        duration: 1500
      });
      setToggle(true);
      setServiceType("email");
    } catch (error) {
      toast.error(error.response.data.errorMessage, {
        duration: 1500
      });
    }
  };

  const verifyEmailOtp = async () => {
    try {
      const res = await axios.post(
        "https://www.hoogaaa.com/hoogaaa/api/v1/action/verifyEmailOtp/",
        {
          email: data.email,
          otp: otp,
        }
      );
      if (res.status === 200) {
        toast.success("Otp Verified", {
          duration: 1500
        });
        setServiceType(data.email);
        setInputItem("");
        setVerified(true);
      }
    } catch (error) {
      toast.error(error.response.data.errorMessage, {
        duration: 1500
      });
    }
    setOtp("");
  };

  const verifyOtp = () => {
    if (serviceType === "email") {
      verifyEmailOtp();
      setToggle(false);
    }

    // if (serviceType === "phone") {
    //   verifyPhoneOtp();
    //   setToggle(false);
    // }

    if (serviceType === "sendForm") {
      sendContactData();
    }
  };

  // // Resend Otp
  // const ResendOtp = () => {
  //   if (serviceType === "email") {
  //     verifyEmail();
  //   }

  //   if (serviceType === "phone") {
  //     verifyPhone();
  //   }
  // };

  return (
    <>
      <div
        id="contact"
        className={
          toggle
            ? "container contact active section-padding mt-5"
            : "container contact  section-padding mt-5"
        }
      >
        <SectionPara
          heading={"Get in touch"}
          para={"Our friendly team would love to hear from you."}
        />
        <div className="row justify-content-center text-start p-1 mt-lg-5 mt-3">
          <div className="col-lg-5">
            <form onSubmit={handleSubmit}>
              <div className="d-flex gap-3">
                <div className="w-100">
                  <label htmlFor="first" className="form-label">
                    First Name
                  </label>
                  <input
                    onChange={inputData}
                    name="fname"
                    type="text"
                    className="form-control"
                    value={data.fname}
                    id="first"
                    aria-describedby="first"
                    placeholder="First Name"
                  />
                </div>
                <div className="w-100">
                  <label htmlFor="first" className="form-label">
                    Last Name
                  </label>
                  <input
                    onChange={inputData}
                    name="lname"
                    type="text"
                    className="form-control"
                    value={data.lname}
                    id="first"
                    aria-describedby="first"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              {verified ? (
                <div className="w-100 mt-3">
                  <label htmlFor="first" className="form-label" required>
                    Email
                  </label>
                  <div className="d-flex ">
                    <input
                      disabled
                      name="email"
                      type="email"
                      className="form-control email"
                      value={data.email}
                      id="email"
                      aria-describedby="email"
                      placeholder="you@company.com"
                    />
                    <button className="verify">
                      verified
                    </button>
                  </div>

                </div>
              ) : (
                <div className="w-100 mt-3">
                  <label htmlFor="first" className="form-label" required>
                    Email
                  </label>
                  <div className="d-flex ">
                    <input
                      onChange={inputData}
                      name="email"
                      type="email"
                      className="form-control email"
                      value={data.email}
                      id="email"
                      aria-describedby="email"
                      placeholder="you@company.com"
                    />
                    <button className="verify" onClick={() => verifyEmail()}>
                      verify
                    </button>
                  </div>

                </div>
              )}

              {/* Phone  */}
              <div className="w-100 mt-3">
                <label htmlFor="first" className="form-label">
                  Message
                </label>
                <textarea
                  onChange={inputData}
                  className="form-control mb-3"
                  name="message"
                  id="message"
                  value={data.message}
                  aria-describedby="message"
                  placeholder="Message"
                  rows={"5"}
                ></textarea>
              </div>

              <Button
                children={"Send Message"}
                padding="10px 20px"
                bgcolor={"#397f83"}
                tcolor={"#fff"}
                myFun={() => sendContactData()}
              />
            </form>
          </div>
        </div>
      </div>
      {loading ? <Loader /> : <div className={toggle ? "popup active" : "popup"}>
        <AiOutlineClose onClick={() => setToggle(!toggle)} />
        <p>{serviceType === "email" ? data.email : data.phone}</p>
        <input
          type="number"
          maxLength="6"
          className="form-control mb-3"
          placeholder="Enter Otp"
          onChange={(e) => {
            setOtp(e.target.value);
          }}
          value={otp}
        />
        {/* {counter===0?<p style={{color:"red",borderBottom:"1px solid red"}} onClick={()=>ResendOtp}><span>Resend Otp</span></p>:<p>
        Otp Valid Upto : <span>{counter}</span>
      </p>} */}
        <p>
          Otp Valid Upto : <span>{counter}s</span>
        </p>
        <Button
          children={"Verify"}
          bgcolor={"#397f83"}
          tcolor={"#fff"}
          padding={"8px 20px"}
          myFun={() => verifyOtp()}
        />
      </div>}
      <Toaster />
    </>
  );
};

export default Contact;
