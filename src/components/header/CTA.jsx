import React from 'react'
import CV from "../../assets/MyResume.pdf"

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} target="_blank" className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Wanna chat?</a>
    </div>
  )
}

export default CTA
