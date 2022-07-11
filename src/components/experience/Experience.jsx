import React from 'react'
import './experience.css'
import {GiCheckMark} from 'react-icons/gi'

const Experience = () => {
  return (
    <section id="experience">
      <h5>what Am I Good At?</h5>
      <h2>My Skills</h2>
      
      <div className="container experience_container">
        
        {/* programming skills */}
        <div className="experience_programming">
          <h3>Programming Skills</h3>
          <div className="experience_content">

            <article className='experience_details'>
              <GiCheckMark className="icon"/>
              <h5>Python, GoLang, JavaScript</h5>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience_details'>
              <GiCheckMark className="icon"/>
              <h5>KivyMd (App dev)</h5>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience_details'>
              <GiCheckMark className="icon"/>
              <h5>React (Web Dev)</h5>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience_details'>
              <GiCheckMark className="icon"/>
              <h5>NodeJs, MysQL (Backend)</h5>
              <small className='text-light'>Beginner</small>
            </article>
            <article className='experience_details'>
              <GiCheckMark className="icon"/>
              <h5>C, C++ </h5>
              <small className='text-light'>Beginner</small>
            </article>
            <article className='experience_details'>
              <GiCheckMark className="icon"/>
              <h5>Fresh and Flask Frameworks</h5>
              <small className='text-light'>Beginner</small>
            </article>

          </div>

        </div>

      {/* ################################################################### */}

        {/* 3D modelling skills */}
        <div className="experience_modelling">
          <h3>3D Modelling Skills</h3>
          <div className="experience_content">

            <article className='experience_details'>
              <GiCheckMark className="icon"/>
              <h5>Product Designing</h5>
              <small className='text-light'>Advanced</small>
            </article>
            <article className='experience_details'>
              <GiCheckMark className="icon"/>
              <h5>Procedural Shaders (Blender)</h5>
              <small className='text-light'>Advanced</small>
            </article>
            <article className='experience_details'>
              <GiCheckMark className="icon"/>
              <h5>Geometry Nodes (Blender)</h5>
              <small className='text-light'>Advanced</small>
            </article>
            <article className='experience_details'>
              <GiCheckMark className="icon"/>
              <h5>3D Animation</h5>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience_details'>
              <GiCheckMark className="icon"/>
              <h5>Unreal Engine</h5>
              <small className='text-light'>Beginner</small>
            </article>
            <article className='experience_details'>
              <GiCheckMark className="icon"/>
              <h5>Houdini</h5>
              <small className='text-light'>Beginner</small>
            </article>
            <article className='experience_details'>
              <GiCheckMark className="icon"/>
              <h5>Fusion360, catia (CAD)</h5>
              <small className='text-light'>Beginner</small>
            </article>

          </div>
          
        </div>

      </div>
    </section>
  )
}

export default Experience