import React from 'react'
import "./footer.css"
import logo from "../../assets/logo.png"

import {ImHome} from "react-icons/im"
import {BsFillFilePersonFill} from "react-icons/bs"
import {GiSkills} from "react-icons/gi"
import {IoIosImages} from "react-icons/io"


const Footer = () => {
  return (
    <div className="container footer_container">

      <div className="footer_logo">
        <img src={logo} alt="😎" />
      </div>
      <div className="footer_contents">
        <h2> Peace out!!</h2>
        <ul className="footer_content">
          <li><a href="#"><ImHome/>  Home</a></li>
          <li><a href="#about"><BsFillFilePersonFill/>  About</a></li>
          <li><a href="#services"><GiSkills/>  Skills</a></li>
          <li><a href="#artWorks"><IoIosImages/>  Projects</a></li>
        </ul>

        <small>&copy;All resources are either Public or self-made</small>
      </div>
    </div>
  )
}

export default Footer