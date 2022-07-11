import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/2.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hey there! I'm</h4>
        <h1>Santhosh Raajaa</h1>
        <h4 className='text-light'>Developer</h4>

        <CTA/>
        <HeaderSocials/>
        
        <div className="me">
          <img src={Me} alt="me" />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down ▶▶▶  </a>

      </div>       
      
    </header>
  )
}

export default Header