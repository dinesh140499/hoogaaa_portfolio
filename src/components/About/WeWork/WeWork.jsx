import React from 'react'
import SectionPara from '../../Common/SectionPara'
import {TbUsers} from 'react-icons/tb'
import {AiOutlineHeart,AiOutlineSmile} from 'react-icons/ai'
import {BsGraphUpArrow,BsFlag} from 'react-icons/bs'
import {GiElectric} from 'react-icons/gi'

const WeWork = () => {
    return (
        <div className="container-fluid section-padding wework">
            <SectionPara topheading={'Our values'} heading={'How we work at Hoogaaa'} para={'Our shared values keep us connected and guide us as one team.'} />
            <div className="container">
                <div className="row mt-3 g-5">
                    <TeamCard icon={<TbUsers />} title={'Care about our team'} desc={'Understand what matters to our employees. Give them what they need to do their best work.'} 
                   />
                   <TeamCard icon={<AiOutlineHeart />} title={'Be excellent to each other'} desc={'No games. No bullshit. We rely on our peers to improve. Be open, honest and kind.'} 
                   />
                   <TeamCard icon={<BsGraphUpArrow />} title={'Pride in what we do'} desc={'Value quality and integrity in everything we do. At all times. No exceptions.'} 
                   />
                   <TeamCard icon={<AiOutlineSmile />} title={'Satisfy the customer'} desc={"Understand customers' stated and unstated needs. Make them wildly successful."} 
                   />
                   <TeamCard icon={<BsFlag />} title={'Do the impossible'} desc={'Be energized by difficult problems. Revel in unknowns. Ask "Why?", but always question, "Why not?"'} 
                   />
                   <TeamCard icon={<GiElectric />} title={'Sweat the small stuff'} desc={'We believe the best products come from the best attention to detail. Sweat the small stuff.'} 
                   />      
                </div>
            </div>
        </div>
    )
}

const TeamCard = ({ icon,title, desc }) => {
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

export default WeWork