import React from 'react'
import {FaGithub , FaLinkedinIn , FaYoutube , FaTwitter} from "react-icons/fa";
import Link from 'next/link';


const socialMediaIcons = [
  {icon : <FaGithub /> , path : ""},
  {icon : <FaLinkedinIn /> , path : ""},
  {icon : <FaYoutube /> , path : ""},
  {icon : <FaTwitter /> , path : ""},
]


const Socials = ({containerStyles , iconStyles}) => {
  return (
    <div className={containerStyles}>
      {
        socialMediaIcons.map((Icon , index)=>{
          return <>
            <Link href={Icon.path} key={index} className={iconStyles}>
              {Icon.icon}
            </Link>
          </>
        })
      }
    </div>
  )
}

export default Socials