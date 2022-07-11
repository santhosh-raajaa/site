import React from 'react'
import {FaDiscord} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {GrInstagram} from 'react-icons/gr'

const  HeaderSocials= () => {
  return (
    <div className="header__socials">
        <a href='https://github.com/santhosh-raajaa' target='_blank'><AiFillGithub/></a>
        <a href='https://www.instagram.com/garchu_chu_chu/' target='_blank'><GrInstagram/></a>
        <a href='https://github.com/santhosh-raajaa' target='_blank'><AiFillLinkedin/></a>
        <a href='https://discordapp.com/users/475878568816148480' target='_blank'><FaDiscord/></a>
    </div>
  )
}

export default HeaderSocials 