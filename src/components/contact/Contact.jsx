import React from 'react'
import {IoMailSharp} from "react-icons/io5"
import {RiWhatsappFill} from "react-icons/ri"
import {FaDiscord} from "react-icons/fa"

import { useRef } from 'react';
import emailjs from 'emailjs-com';

import "./contact.css"

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_70dfdnd', 'template_88gtvoq', form.current, 'U4yleqQJNY3Usksw7')
    
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Wanna Chat?</h5>
      <h2>Contact Me</h2>
      
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <IoMailSharp className='contact_option-icon'/>
            <h5>Email</h5>
            <h6>santhoshraajaa611@gmail.com</h6>
            <a href="mailto:santhoshraajaa611@gmail.com" target="_blank">Mail Me!</a>
          </article>
          {/* <article className="contact_option">
            <RiWhatsappFill className='contact_option-icon'/>
            <h6>Chatting</h6>
            <h5>WhatsApp Me!</h5>
            <a href="https://api.whatsapp.com/send?phone=919952704915&text='Hey This is '" 
                target="_blank">Let's Chat
            </a>
          </article> */}
          <article className="contact_option">
            <FaDiscord className='contact_option-icon'/>
            <h5>Discord</h5>
            <h6>Call Me Garchu There!!</h6>
            <a href='https://discordapp.com/users/475878568816148480' 
              target='_blank'>Find Me On Discord
            </a>
          </article>
        </div>
          {/*  ######### End Of Options ##########  */}

        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Enter Your Name' required/>
          <input type="email" name='email' placeholder='Enter Email Address' required/>
          <textarea name="message"  rows="7" placeholder='Enter Your Message'></textarea>
          <button className='btn btn-primary' type='submit'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact