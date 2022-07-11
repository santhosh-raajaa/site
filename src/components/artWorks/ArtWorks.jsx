import React from 'react'
import "./artWorks.css"

import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";


import { EffectCoverflow,Navigation,Autoplay,Pagination} from "swiper";

import {artData} from "./artData.jsx"

const ArtWorks = () => {
  return (
    <section id="artWorks">

      <h5>3D Arts and Models</h5>
      <h2>Gallery</h2>

      <div className="container artWorks_container">
      <Swiper
        effect={"coverflow"}
        grabCursor={false}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth:400,
          modifier: 1,
          slideShadows: false,
        }}
        loop={true}
        navigation={true}
        modules={[EffectCoverflow,Autoplay,Navigation,Pagination]}
        autoplay={{
          delay:2000,
          disableOnInteraction:false,
        }}
        pagination={{clickable:true}}
        className="mySwiper"
      >
        {
          artData.map(({id,name,type})=>{
            return(
              <>
              <SwiperSlide key={id}
                // style={{backgroundImage:`url(`+ artData[id].image+`)`}}
                >
                  <img src={artData[id].image} alt=""/>
                  <article className='info'>
                    <h4>{type}</h4>
                    <p>{name}</p>
                  </article>

              </SwiperSlide>
            </>)
          })
        }
            
      </Swiper>
      
      </div>
      
    </section>
  )
}


export default ArtWorks