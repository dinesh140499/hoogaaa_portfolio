import React, { useEffect, useState } from 'react'
import SectionPara from '../../Common/SectionPara'
import Button from '../../Common/Button'
import { AiOutlineClockCircle } from 'react-icons/ai'
import position from './jsondata/position'
import { Link } from 'react-router-dom'
import {FaRupeeSign} from 'react-icons/fa'

const Home = () => {
    const [data] = useState(position)


    useEffect(()=>{
        if(window.pageYOffset>0){
            window.scrollTo({
                top:0,
                behavior:'instant'
            })
        }
    },)
    return (
        <div className="container career-home section-padding text-center mt-5">
            <Button children={'Open Positions'} bgcolor={'#f3fbfc'} tcolor={'#397f83'} />
            <SectionPara heading={'We’re looking for talented people'} para={'We’re a 100% remote team spread all across the world. Join us!'} />
            <div className="row justify-content-center">
                <div className="col-lg-6 career-card">
                    <h4>Backend Developer </h4>
                    {data.designing.map((cur) => {
                        const { id, post, desc,min,max,link } = cur
                        return (
                            <div key={id}>
                                <div className="card mt-4 p-3">
                                    <h4>{post}</h4>
                                    <p>{desc}</p>
                                    <div className="d-flex justify-content-between">
                                        <div className='d-flex gap-3'>
                                            <span className='d-flex align-items-center gap-1'>
                                                <AiOutlineClockCircle />
                                                <span>Full-time</span>
                                            </span>
                                            <span className='d-flex align-items-center gap-1'>
                                                <FaRupeeSign />
                                                <span>{min} - {max}</span>
                                            </span>
                                        </div>
                                        {/* <Link to={`/career/${post}`}>Apply Now</Link> */}
                                        <Link to={link}>Apply Now</Link>

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    


                </div>


            </div>
        </div>
    )
}

export default Home