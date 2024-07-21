import React, { useEffect } from 'react'
import SectionPara from '../SectionPara'
import Button from '../Button'
import './automation.scss'

const Automation = () => {
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
      <div className="container ourproduct section-padding text-center mt-5">
        <Button children={"Services"} bgcolor={"#f3fbfc"} tcolor={"#397f83"} />
        <SectionPara
          heading={"Automation and RPA"}
          para={
            "Automation is the use of technology to perform tasks or processes without human intervention, reducing manual efforts, increasing efficiency etc."
          }
        />
        <div className="row mt-5 gy-5 text-lg-start justify-content-center">
          <Card title={"Automate"} image={"images/footer/automation/arrow.webp"} para={"The cutting-edge technology of the digital era, has revolutionized the way we live and work."} />
          <Card title={"Measuring"} image={"images/footer/automation/arrow.webp"} para={"It is the fundamental process of quantifying, and understanding the world around us."} />
          <Card title={"Controlling"} para={"It is the compass that guides us toward our goals, whether in business, personal life."} />
          <Card title={"Optimize"} image={"images/footer/automation/Vector.webp"} para={"Optimization is the key to unlocking the full potential of businesses, individuals, and society as a whole."} />
          <Card title={"Monitoring"} image={"images/footer/automation/Vector.webp"} para={"Monitoring provides a powerful lens through which we can observe and understand the world.."} />
        </div>
      </div>

      {/* *********************  Section-2 *********************  */}
      <div
        className="container-fluid my-5"
        style={{ backgroundColor: "#f3fbfc" }}
      >
        <div className="container">
          <div className="row py-5 justify-content-center align-items-center">
            <div className="col-lg-6">
              <h2>Transforming Industries &
                Driving Efficiency</h2>
              <p
                style={{
                  fontSize: "17px",
                  color: "#8D8D8D",
                  fontWeight: "400",
                }}
                className="mt-3"
              >
                The transformation brought about by automation and digitalization has been instrumental in reshaping industries and driving efficiency across various sectors.This revolution has been fueled by cutting-edge technologies like RPA, AI and others.
              </p>
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
                  src="images/footer/automation/automation-1.webp"
                  className="img-fluid"
                  alt="1"
                />
              </div>
            </div>
            <div className="row flex-lg-row flex-column align-items-center">
              <div className="col-lg-6">
                <div className="eg-card d-flex align-items-center">
                  <img
                    src="images/footer/automation/automation-2.webp"
                    alt="2"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <h2>Streamlined Operations and Improved Productivity</h2>
                <p
                  style={{
                    fontSize: "17px",
                    color: "#8D8D8D",
                    fontWeight: "400",
                  }}
                  className="mt-3"
                >
                  RPA brings significant advantages by streamlining operations and enhancing productivity. By automating repetitive tasks and manual processes, RPA allows businesses to achieve higher throughput with fewer resources.
                </p>
                <Button
                  children={"Explore More"}
                  bgcolor={"#397F83"}
                  tcolor={"#f3fbfc"}
                  padding={"10px 20px"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Card = ({ title, para,image }) => {
  return (
    <div className="col-md-6 col-md-4 col-lg-4">
      <div className="row align-items-center">
        <div className="col-lg-10">
          <div className="automation-card">
            <div className="polygon">
              <h3 style={{color:"#397F83"}}>{title}</h3>
              <p className={"pb-0"}>{para}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 d-none d-lg-block">
        {image? 
          <img src={image} alt="line" />
        :""}
        </div>
      </div>

    </div>
  );
}

export default Automation