import React, { useEffect } from 'react'
import SectionPara from '../Common/SectionPara'
import data from './data'
// import Button from '../Common/Button'
// import { Link } from 'react-router-dom'

const Terms = () => {
  const { terms } = data

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
          <SectionPara heading={'Terms & Condition'} para={'You must follow our terms made available to you.'} />
          <div className="row mt-5 pb-3" style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
            <p className='mb-0' style={{color:"#AAB0B7"}}>Updated April 15, 2023</p>
            <p className='mb-0 mt-2'>Version 2.1, Revision 4</p>
          </div>
          <div className='mt-3'>
            <h3 className='mb-0' style={{fontSize:"1.5rem",fontWeight:"500"}}>Accepting the Terms</h3>
            <p className='mb-0 mt-2'>By accessing or using the Website, you agree to be bound by these Terms.</p>
            <p className='mb-0 pb-0 mt-3'>These Terms and Conditions govern your use of the Metro website. By accessing or using the Website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use the Website.</p>
          </div>
          {terms.map((term,index) => {
            const {id,title,desc}=term
            return (
              <div className="mt-3 mb-4" index={id}>
                <h4 className='title'>{title}</h4>
                <p className='mb-0 pb-0 mt-3'>{desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Terms