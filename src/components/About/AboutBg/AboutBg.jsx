import React from 'react'




const AboutBg = () => {
  return (
    <div className="container-fluid aboutbg">
      <div className="row mt-5 mt-lg-5 justify-content-center align-items-center gy-5">
        <div className="col-lg-6 d-flex justify-content-center">
          <div className="imgbox">
            <img src="images/about/aboutbg/aboutbg.png" className='img-fluid' alt="" />
          </div>
        </div>
        <div className="col-lg-6 p-lg-5">
          <span>
            We’ve helped hundreds of companies
          </span>
          <h2 className='mt-1 aboutbg-title'>We’re only just getting started on our journey</h2>
          <div className="row mt-4 g-3">
            <AboutBgCard num={400} title={"Projects Completed"} />
            <AboutBgCard num={600} title={"Return on investment"} />
            <AboutBgCard num={10} title={"Global downloads"} />
            <AboutBgCard num={200} title={"5-star reviews"} />
          </div>
        </div>
      </div>
    </div>

  )
}

const AboutBgCard = ({ title, num }) => {
  return (
    <div className="col-6 about-card">
      <h2 className='card-title'>{num}+</h2>
      <span>{title}</span>
    </div>
  )
}

export default AboutBg