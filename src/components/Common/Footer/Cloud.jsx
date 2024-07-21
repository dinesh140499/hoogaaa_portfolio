import React, { useEffect } from 'react'
import SectionPara from '../SectionPara'
import Button from '../Button'
import { MdOutlineMessage } from 'react-icons/md'
import { FiBarChart2 } from 'react-icons/fi'
import { AiOutlineSmile,AiOutlineCloud } from 'react-icons/ai'
import { GiRapidshareArrow } from 'react-icons/gi'
import {BiNetworkChart} from 'react-icons/bi'



const Cloud = () => {
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
          heading={"Cloud Solutions"}
          para={
            "Cloud solutions have become a pivotal force in shaping the future of business. They provide organizations with the tools to innovate, collaborate."
          }
        />
          <div className="row mt-3 g-5">
            <CloudCard icon={<MdOutlineMessage />} title={'Business Continuity'} desc={"Business Continuity is a crucial aspect of any organization's strategy, aimed at safeguarding its operations & services during disruptions."}
            />
            <CloudCard icon={<BiNetworkChart />} title={'Network And Storage'} desc={'It form the backbone of modern computing, enabling seamless data transfer, accessibility, and efficient resource management.'}
            />
            <CloudCard icon={<FiBarChart2 />} title={'Cloud Development'} desc={'This has emerged as a transformative approach to building and deploying applications, leveraging the power of cloud computing services.'}
            />
            <CloudCard icon={<AiOutlineSmile />} title={'Satisfy the customer'} desc={"Understand customers' stated and unstated needs. Make them wildly successful."}
            />
            <CloudCard icon={<GiRapidshareArrow />} title={'Do the impossible'} desc={'Be energized by difficult problems. Revel in unknowns. Ask "Why?", but always question, "Why not?"'}
            />
            <CloudCard icon={<AiOutlineCloud />} title={'Sweat the small stuff'} desc={'We believe the best products come from the best attention to detail. Sweat the small stuff.'}
            />
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
              <h2>Empowering Efficiency, Security, and Innovation</h2>
              <p
                style={{
                  fontSize: "17px",
                  color: "#8D8D8D",
                  fontWeight: "400",
                }}
                className="mt-3"
              >
                Streamline your workflows, automate repetitive tasks, and optimize resource allocation with our cloud-based tools. Embrace the power of real-time collaboration and data sharing, ensuring your team stays productive and connected from anywhere.
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
                  src="images/footer/cloud/cloud-1.webp"
                  className="img-fluid"
                  alt="1"
                />
              </div>
            </div>
            <div className="row flex-lg-row flex-column align-items-center">
              <div className="col-lg-6">
                <div className="eg-card d-flex align-items-center">
                  <img
                    src="images/footer/cloud/cloud-2.webp"
                    alt="2"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <h2>Cloud Solutions with Limitless Features</h2>
                <p
                  style={{
                    fontSize: "17px",
                    color: "#8D8D8D",
                    fontWeight: "400",
                  }}
                  className="mt-3"
                >
                  Where possibilities know no bounds. With an array of limitless features, we're here to revolutionize the way you do business. Say goodbye to conventional limitations and embrace the power of the cloud. Streamline your workflows.
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

const CloudCard = ({ icon, title, desc }) => {
  return (
    <div className="col-sm-6 col-md-4 ">
      <div className="wework-card ">
        <div className='workimg-box'>
          {icon}
        </div>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default Cloud