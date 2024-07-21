import React, { useEffect } from "react";
import SectionPara from "../SectionPara";
import Button from "../Button";
import { BsCheckLg } from 'react-icons/bs'
import './producteg.scss'

const ProductEg = () => {
  useEffect(() => {
    if (window.pageYOffset > 0) {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }, []);
  return (
    <>
      {/* ********************* Section-1***********************  */}
      <div className="container producteg section-padding text-center mt-5">
        <Button children={"Services"} bgcolor={"#f3fbfc"} tcolor={"#397f83"} />
        <SectionPara
          heading={"Product Engineering"}
          para={
            "Product Engineering is a multifaceted discipline that involves the design, development, and improvement of products or services."
          }
        />
        <div className="row mt-3 text-lg-start justify-content-center">
          <div className="row mt-3 gy-5 g-lg-5">
            <ProductEgCard icon={"./images/products/Icon1.svg"} title={"Easier Work Organization"} para={"Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas. "} />
            <ProductEgCard icon={"./images/products/Icon2.svg"} title={"Fast Connection"} para={"Completely pursue scalable customer cross- media through potentialities. Holistically quickly installed portals.  "} />
            <ProductEgCard icon={"./images/products/Icon3.svg"} title={"Streamlined Processes"} para={"Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible. "} />
            <ProductEgCard icon={"./images/products/Icon4.svg"} title={"Easier Integrations"} para={"Completely pursue scalable customer try through potentialities. Pontificate portals installed. Efficiently unleash information."} />
            <ProductEgCard icon={"./images/products/Icon5.svg"} title={"Marketing Analytics"} para={"Phosfluorescently engage worldwide methodologies with web-enabled  Interactively coordinate. "} />
            <ProductEgCard icon={"./images/products/Icon6.svg"} title={"Workflow Builder"} para={"Collaboratively administrate turnkey service channels whereas virtual e-tailers. This  is objectively scalable metrics whereas. "} />
          </div>
        </div>
      </div>

      {/* *********************  Section-2 *********************  */}
      <div
        className="container-fluid"
        style={{ backgroundColor: "#f3fbfc" }}
      >
        <div className="container">
          <div className="row py-5 justify-content-center align-items-center">
            <div className="col-lg-6">
              <h2>Modernizing Apps for Digital Success</h2>
              <p
                style={{
                  fontSize: "18px",
                  color: "#717171",
                  fontWeight: "400",
                }}
                className="mt-3"
              >
                App modernization has emerged as a key driver for success. By upgrading and optimizing existing applications, businesses can unlock their full potential, enhancing performance, scalability etc.
              </p>
              <ul className="pb-3">
                <Card title={"UI/UX Design And Development"} />
                <Card title={"Product Development"} />
                <Card title={"DevOps & Quality Assurance"} />
                <Card title={"Support And Maintenance"} />
                <Card title={"Modernization"} />
                <Card title={"Product Backlog & Roadmap Mgt"} />
              </ul>
              <Button
                children={"Explore More"}
                bgcolor={"#397F83"}
                tcolor={"#f3fbfc"}
                padding={"10px 20px"}
              />
            </div>
            <div className="col-lg-6">
              <div className="eg-card d-flex justify-content-center align-items-center">
                <img
                  src="images/footer/product-eg/product-eg.webp"
                  className="img-fluid"
                  alt="1"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

const Card = ({ title }) => {
  return (
    <li className="my-2 d-flex align-items-center gap-2">
      <BsCheckLg color={"#397F83"} fontSize="1.3rem" />
      <p className="mb-0" style={{ fontWeight: "500", fontSize: "17px" }}>{title}</p>
    </li>
  );
};

const ProductEgCard = ({ icon, title, para }) => {
  return (
    <div className="col-md-6 col-lg-4 producteg-eg">
      <div className="icon d-flex justify-content-center align-items-center">
        <img src={icon} alt={icon} />
      </div>
      <h4 className='mt-3'>{title}</h4>
      <p className='my-2'>{para}</p>

    </div>
  );
};

export default ProductEg;
