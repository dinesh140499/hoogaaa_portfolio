import React,{useEffect} from 'react'
import SectionPara from '../SectionPara'
import Button from '../Button'

const Analytics = () => {
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
          heading={"Data and Analytics"}
          para={
            "Data-driven insights drive innovation and growth across industries. By analyzing vast amounts of information, businesses make smarter decisions etc."
          }
        />
        <div className="row mt-5 text-lg-start justify-content-center">
          <div className="col-12">
            <div className="row p-1 g-5 justify-content-center">
              <Card
                image={"images/footer/analytics/1.webp"}
                title={"Grouping the data"}
                para={
                  "Data can be divided by a range of different criteria such as age, population, income. The values of the data can be numerical."
                }
              />
              <Card
                image={"images/footer/analytics/2.webp"}
                title={"Collecting the data"}
                para={
                  "Data can be collected through several sources, including online sources, computers, personnel, and sources from the community."
                }
              />
              <Card
                image={"images/footer/analytics/3.webp"}
                title={"Organizing the data"}
                para={
                  "The data must be organized after it is collected so that it can be examined or other type of software that is capable."
                }
              />
              <Card
                image={"images/footer/analytics/4.webp"}
                title={"Cleaning the data"}
                para={
                  "The data is first cleaned up to ensure that there is no overlap or mistake. It is reviewed to make sure that it is not incomplete."
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* *********************  Section-2 *********************  */}
      <div
        className="container-fluid my-5"
        style={{ backgroundColor: "#f3fbfc" }}
      >
        <div className="container">
          <div className="row py-5 gy-5 justify-content-center align-items-center">
            <div className="col-lg-6">
              <h2>Speed up Your Progress from Data to Decision-Making</h2>
              <p
                style={{
                  fontSize: "17px",
                  color: "#8D8D8D",
                  fontWeight: "400",
                }}
                className="mt-3"
              >
                In today's data-driven world, making informed decisions is
                critical for the success of any organization. However, the
                process of transforming raw data into actionable insights can be
                time-consuming and complex.
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
                  src="images/footer/analytics/analytics-1.webp"
                  className="img-fluid"
                  alt="1"
                />
              </div>
            </div>
            <div className="row flex-column-reverse flex-lg-row align-items-center">
              <div className="col-lg-6">
                <div className="eg-card d-flex align-items-center">
                  <img
                    src="images/footer/analytics/analytics-2.webp"
                    alt="2"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <h2>Next-gen Analytics for Modern Firms</h2>
                <p
                  style={{
                    fontSize: "17px",
                    color: "#8D8D8D",
                    fontWeight: "400",
                  }}
                  className="mt-3"
                >
                  In today's fast-paced business landscape, the success of
                  modern firms depends on their ability to harness data
                  effectively. Next-gen analytics has emerged as a game-changer,
                  providing cutting-edge solutions to extract valuable insights.
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

const Card = ({ image, title, para }) => {
  return (
    <div className="col-md-6 col-md-4 col-lg-3">
      <div className="card-analy text-center">
        <img src={image} alt={title} className="img-fluid" />
        <h4 className="mt-3" style={{ color: "#397f83" }}>
          {title}
        </h4>
        <p style={{ color: "#8D8D8D" }} className="mb-0">
          {para}
        </p>
      </div>
    </div>
  );
}

export default Analytics