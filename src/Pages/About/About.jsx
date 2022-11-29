import React , {useContext} from 'react'

import backgroundImage from '../../assets/intro-bg.jpg'
import AboutMe from '../../components/About-me/about-me'
import Layout from '../../components/shared/layout/layout'

import myImage from '../../assets/obada.jpg'
import Heading from '../../components/shared/heading/heading'

const About = () => {



  const data = [
    {
      icon : "logo-facebook",
      link : 'https://www.facebook.com/obada.abomoaed'
    },
    {
      icon : "logo-linkedin",
      link : 'https://www.linkedin.com/in/obada-kahlous-22487a1b3/'
    },
    {
      icon : "logo-google",
      link : 'kahlousobada@gmail.com'
    },
  ]


  return (
    <>
      <AboutMe image={myImage}/>
      
      <ul className='social fixed left-0 bottom-[70px] w-full m-0 p-0 z-[1007] flex justify-center items-center'>
        {data.map((item , key)=>(
          <a href={item.link} key={key}>
            <li className='transition-all inline-block p-0 my-0 mx-[15px] text-[#fff] hover:text-main-color cursor-pointer text-[28px]'>
              <ion-icon name={item.icon}></ion-icon>
            </li>
          </a>
        ))}
      </ul>
      <Heading text={'About'}/> 
    </>
  )
}

export default About

