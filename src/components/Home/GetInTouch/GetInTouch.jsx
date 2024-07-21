import React from 'react'
import SectionPara from '../../Common/SectionPara'
import { Link } from 'react-router-dom'


const GetInTouch = () => {
    return (
        <div className="section-padding getintouch" id="about">
            <div className="container">
                <SectionPara heading={'Get In Touch'} para={'Our friendly team is always here to chat.'} />
                <div className="row row mt-3 gy-5 g-lg-5">
                    <GetInTouchCard img={"images/getintouch/msg.svg"} title={"Email"} para={"Our friendly team is here to help."} mail={"help@hoogaaa.com"} />
                    <GetInTouchCard img={"images/getintouch/map.svg"} title={"Office"} para={"Come say hello at our office HQ."} mail={"117/317 Kakadeo Kanpur , Uttar Pradesh , 208025"} />
                    <GetInTouchCard img={"images/getintouch/phone.svg"} title={"Phone"} para={"Mon-Fri from 8am to 5pm."} mail={"+91 8299609694"} />
                </div>
            </div>
        </div>
    )
}

const GetInTouchCard = ({ img, title, para, mail }) => {
    return (
        <div className="col-md-6 col-lg-4 getintouchcard">
            <div className="icon">
                <img src={img} alt="icon"
                    className='img-fluid' />
            </div>
            <h4 className='mt-3'>{title}</h4>
            <p className='mb-2'>{para}</p>
            <Link to={mail.includes('+91')?'tel:+918299609694':"mailto:help@hoogaaa.com"}><span>{mail}</span></Link>
        </div>
    )
}

export default GetInTouch