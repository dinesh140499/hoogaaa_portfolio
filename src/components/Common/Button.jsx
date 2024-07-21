import React from 'react'

const Button = ({ border = '', radius = '', bgcolor, tcolor, shadow, children, textshadow = "", icon = '', padding = '', myFun }) => {
  const options = {
    borderRadius: radius || "8px",
    outline: "none",
    border: border || 'none',
    color: tcolor,
    backgroundColor: bgcolor || 'transparent',
    padding: padding || "12px 24px",
    boxShadow: shadow || '',
    textShadow: textshadow || 'none',
    display: "inline-flex",
    alingItem: "center",
  }



  return (
    <>
      <button style={{ ...options }} onClick={myFun}>
        <span>{icon}</span> {children}</button>
    </>
  )
}



export default Button