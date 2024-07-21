import React from 'react'

const SectionPara = ({topheading, heading, para }) => {
  return (
    <div className="section-para">
      <span>{topheading}</span>
      <h4>{heading}</h4>
      <p>{para}</p>
    </div>
  )
}

export default SectionPara