import React from 'react'
import {FaGithub , FaLinkedinIn , FaYoutube , FaFacebook} from "react-icons/fa";
import Link from 'next/link';


const socialMediaIcons = [
  {icon : <FaGithub /> , path : "https://github.com/ujjwal-dahal"},
  {icon : <FaLinkedinIn /> , path : "https://www.linkedin.com/in/brightnessujjwal/"},
  {icon : <FaYoutube /> , path : "https://www.youtube.com/@BrightnessVlogs"},
  {icon : <FaFacebook /> , path : "https://www.facebook.com/brightness.ujjwal"},
]


const Socials = ({containerStyles , iconStyles}) => {
  return (
    <div className={containerStyles} key={containerStyles}>
      {
        socialMediaIcons.map((Icon , index)=>{
          return <>
            <Link href={Icon.path} target='_blank' key={index} className={iconStyles}>
              {Icon.icon}
            </Link>
          </>
        })
      }
    </div>
  )
}

export default Socials