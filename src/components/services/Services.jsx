import React from 'react'
import './services.css'
import {MdMiscellaneousServices} from "react-icons/md"

const services = () => {
  return (
    <section id="services">
      <h5>What I Can Offer?</h5>
      <h2>Services</h2>

      <div className="container services_container">

      {/* ############Programming########## */}

        <article  className="service">
          <div className="service_head">
            <h3>Programming</h3>
          </div>
          <ul className='service_list'>

            <li>
              <MdMiscellaneousServices className='service_list-icon'></MdMiscellaneousServices>
              <p>ReactJs Frontend Development</p>
            </li>
            <li>
              <MdMiscellaneousServices className='service_list-icon'></MdMiscellaneousServices>
              <p>Python Programming - Tutoring</p>
            </li>
            <li>
              <MdMiscellaneousServices className='service_list-icon'></MdMiscellaneousServices>
              <p>App Development in Python</p>
            </li>
            <li>
              <MdMiscellaneousServices className='service_list-icon'></MdMiscellaneousServices>
              <p>Discord Bot Creation</p>
            </li>
            <li>
              <MdMiscellaneousServices className='service_list-icon'></MdMiscellaneousServices>
              <p>Drone Function Programming (Fuctional Scripts)</p>
            </li>
            <li>
              <MdMiscellaneousServices className='service_list-icon'></MdMiscellaneousServices>
              <p>Helps With Debugging and Testing (Python, JavaScript, GoLang)</p>
            </li>
            
          </ul>
        </article>

      {/*########### End of programming############## */}


      {/* ############3D Modelling########## */}

        <article className="service">
          <div className="service_head">
            <h3>3D modelling</h3>
          </div>
          <ul className='service_list'>

            <li>
              <MdMiscellaneousServices className='service_list-icon'></MdMiscellaneousServices>
              <p>Low Poly Modelling</p>
            </li>
            <li>
              <MdMiscellaneousServices className='service_list-icon'></MdMiscellaneousServices>
              <p>Product Designing</p>
            </li>
            <li>
              <MdMiscellaneousServices className='service_list-icon'></MdMiscellaneousServices>
              <p>Product Animation</p>
            </li>
            <li>
              <MdMiscellaneousServices className='service_list-icon'></MdMiscellaneousServices>
              <p>Procedural Geometry Modelling (Blender Geometry Nodes)</p>
            </li>
            <li>
              <MdMiscellaneousServices className='service_list-icon'></MdMiscellaneousServices>
              <p>Tutoring Blender (Advanced), Unreal (Beginner), Houdini (Beginner)</p>
            </li>
            <li>
              <MdMiscellaneousServices className='service_list-icon'></MdMiscellaneousServices>
              <p>Rigging and Animation</p>
            </li>

          </ul>
        </article>
        {/*########### End of Modelling############## */}


      {/* ############Asset creation########## */}

        <article className="service">
          <div className="service_head">
            <h3>Asset Creation</h3>
          </div>
          <ul className='service_list'>

            <li>
              <MdMiscellaneousServices className='service_list-icon'></MdMiscellaneousServices>
              <p>Game Asset (Low and High Poly)</p>
            </li>
            <li>
              <MdMiscellaneousServices className='service_list-icon'></MdMiscellaneousServices>
              <p>Procedural Vegetation Modelling (Blender GN)</p>
            </li>
            <li>
              <MdMiscellaneousServices className='service_list-icon'></MdMiscellaneousServices>
              <p>Procedural Shader Creation (Blender, Unreal)</p>
            </li>
            <li>
              <MdMiscellaneousServices className='service_list-icon'></MdMiscellaneousServices>
              <p>Rendering and Lighting Setup in Blender</p>
            </li>
            <li>
              <MdMiscellaneousServices className='service_list-icon'></MdMiscellaneousServices>
              <p>3D Concept Art Modelling</p>
            </li>

          </ul>
        </article>

      {/* End of Asset creation */}

      </div>

    </section>
  )
}

export default services