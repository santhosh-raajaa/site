import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/2.jpg'
import HeaderSocials from './HeaderSocials'
import {useTypewriter,Cursor } from 'react-simple-typewriter'

const Header = () => {

  const {text} = useTypewriter({
    words:['an Aeronautic Engineer',
    'a Drone Designer','a Developer',
    'a 3D Artist','a Product Designer'
    ],
    loop:0,
    delaySpeed:1000,
  })

  return (
    <header>
      <div className="container header__container">
        <h4>Hey there! I'm</h4>
        <h1>Santhosh Raajaa</h1>
        <h4 className='text-light'>I'm {text} <Cursor/> </h4>

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