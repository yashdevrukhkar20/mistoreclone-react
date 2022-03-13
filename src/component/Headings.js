import React from 'react'
import "../styles/heading.css"

const Headings = ({text}) => {
  return (
    <div className="heading" fixed="top">
    <div></div>
    <p>{text}</p>
    <div></div>
    </div>
  )
}

export default Headings
