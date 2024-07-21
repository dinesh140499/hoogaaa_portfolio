import React from 'react'
import Button from '../../Common/Button'


import { AiOutlinePlayCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate=useNavigate()
    return (
        <div className="container-fluid hero" id='home'>
            <div className="row mt-5 mt-lg-5 justify-content-center">
                <div className="col-lg-8">
                    <h1>The Easiest way to <span>Grow</span>&nbsp;
                        your <span>Business</span>&nbsp;with us</h1>
                    <p className='my-3'>From the small stuff to the big picture, organizes the work so teams know what to do, why it matters and how to get it done,</p>
                    <div className='d-flex justify-content-center flex-wrap' >
                        <Button  bgcolor={"#397F83"} tcolor={"#fff"} children={"Get Started"} myFun={()=>navigate('/contact')}/>
                    {/* <Button tcolor={"#397F83"}  children={`Watch Video`} icon={<AiOutlinePlayCircle />} /> */}
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Hero