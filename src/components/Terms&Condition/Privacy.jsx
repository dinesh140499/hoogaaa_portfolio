import React, { useEffect } from 'react'
import SectionPara from '../Common/SectionPara'
import data from './data'
// import Button from '../Common/Button'
// import { Link } from 'react-router-dom'

const Privacy = () => {
  const { privacy } = data
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:'instant'
    })
  },[])
  return (
    <div className="container terms section-padding mt-5">
      <div className="row justify-content-center mt-3">
        <div className="col-lg-8">
          <SectionPara heading={'Privacy Policy'} para={'You must follow our terms made available to you.'} />
          <div className="row mt-5 pb-3" style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
            <p className='mb-0' style={{ color: "#AAB0B7" }}>Updated April 15, 2023</p>
            <p className='mb-0 mt-2'>Version 2.1, Revision 4</p>
          </div>
          {privacy.map((privacy, index) => {
            const { id, title, desc1, desc2, para } = privacy
            return (
              <div className="mt-3 mb-4" index={id}>
              <h4 className='title'>{title}</h4>
              <p>{para}</p>
                <p className='mb-0 pb-0 mt-3'>{desc1}</p>
                <p className='mb-0 pb-0 mt-1'>{desc2}</p>
              </div>
            )
          })}
          <div className="pt-4 mt-5 mb-4" style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }} >
              <h4 className='title'>Pay Attention</h4>
                <p className='mb-0 pb-0 mt-3'>Our Services are very diverse, so sometimes additional terms or product requirements (including age requirements) may apply. Additional terms will be available with the relevant Services, and those additional terms become part of your agreement with us if you use.</p>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Privacy