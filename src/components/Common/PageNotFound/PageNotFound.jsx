import React, { useEffect } from 'react'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'
import {AiOutlineArrowLeft} from 'react-icons/ai'


const PageNotFound = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    if(window.pageYOffset>0){
        window.scrollTo({
            top:0,
            behavior:'instant'
        })
    }
},)
  return (
    <div className='container pagenotfound section-padding'>
      <div className="row mt-5 text-lg-start justify-content-center ">
        <div className="col-md-12">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <p style={{color:"#397f83"}}>404 Error</p>
              <h1 style={{ fontWeight: "600" }}>Page Not Found</h1>
              <p className='py-1' style={{ fontSize: "1.1rem" }}>Sorry, the page you are looking for doesn't exist. <br /> Here are some helpful links:</p>
              <Button children={"Back to Home"} bgcolor={"#397F83"} tcolor={"#fff"} myFun={() => navigate('/')} icon={<AiOutlineArrowLeft/>}/>
            </div>
            <div className="col-lg-6">
              <div className="img-box">
                <img src={"./images/404.png"} className='img-fluid' alt="404"  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound