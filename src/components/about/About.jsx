import React from 'react'
import "./about.css"
import ME from "../../assets/1_.jpg"
import {FaAward} from 'react-icons/fa'
import {IoIosApps} from 'react-icons/io'
import {AiFillFolderOpen} from 'react-icons/ai'
import {TbBulb} from 'react-icons/tb'


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">

        {/* image card */}
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        {/* info cards */}
        <div className="about_content">
          <div className="about_cards">

            <article className="about_card">
              <FaAward className='about_icon' />
              <h5>Education</h5>
              <small>B.E Aeronautical Student at REC</small>
            </article>

            <article className="about_card">
              <IoIosApps className='about_icon' />
              <h5>Clients</h5>
              <small>Freelanced 4 Times on 3D Designing</small>
            </article>

            <article className='about_card'>
              <AiFillFolderOpen className=' about_icon' />
              <h5>Projects</h5>
              <small> Worked On 10+ Projects </small>
            </article>

          </div>
          <li>
            <TbBulb className='about_list-icon'></TbBulb>
            <p>Hey there! from the other side of the screen 😄, 
              I'm Santhosh ,an Aeronautical Engineer
              from REC college who grew an interest on Drone Building, 3D Modelling, 
              Product Designing, Programming and Web/App-dev
            </p>
          </li>
          <li>
            <TbBulb className='about_list-icon'></TbBulb>
            <p>I've been freelancing for the past 6-months and have helped many people 
              with Programming and Product Designing 😎
            </p>
          </li>
          <li>
            <TbBulb className='about_list-icon'></TbBulb>
            <p>Looking Forward To Help You ....😁with what I'm good at!</p>
          </li>

          <div className='about_button'>
            <a href="#contact" className='btn btn-primary'>Let's talk</a>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About