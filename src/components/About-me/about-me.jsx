import React from 'react'
import styled from 'styled-components'
import Button from '../shared/button/Button'
import Container from '../shared/Containers/Containers'
import ViewImage from '../ViewImage/ViewImage'

const AboutMe = ({ image }) => {
  return (
    <>
      <Container className='flex md:justify-center justify-start md:items-center items-start flex-col gap-2'>
        <div className='relative md:mb-[10px] mb-[25px]'>
          <ViewImage img={image} className='w-[140px] h-[140px] rounded-full object-cover border-[2px] border-main-color cursor-pointer'>
          </ViewImage>
          <span className='absolute bottom-0 -right-6 text-[30px] text-[#2499bd]'> <ion-icon name="logo-react"></ion-icon> </span>
        </div>
        <p className='text-main-color md:text-[26px] text-[18px] font-[500] tracking-[1.5px]'> HELLO, WORLD! </p>
        <MyName>I<span className='text-main-color'>'</span>m Obada Kahlous<span className='text-main-color'>.</span></MyName>
        <div className='flex justify-center items-center gap-4 mt-[12px]'>
          <Span>|</Span>
          <p className='text-[#fff] md:text-[20px] text-[16px] font-[500] tracking-[2px]'> FRONT-END DEVELOPER </p>
          <Span>|</Span>
        </div>
        <p className='md:text-[18px] text-[14px] text-[#fff] md:w-[60%] w-[100%] md:text-center 
        text-left my-[20px] font-sans font-500'>Front-end developer with +1 years of experience in building Web Sites using react , Maintaining responsive websites </p>
        {/* <a href="cv.pdf" target='_blank' download>
          <Button uppercase='uppercase' margin='30px 0px' padding='10px 30px'>
            Downland my cv <span className='ButtonIcon'> <ion-icon name="chevron-down-outline"></ion-icon> </span>
          </Button>
        </a> */}
      </Container>
    </>
  )
}


export default AboutMe

const Span = styled.span`
  font-size: 18px;
  color : rgba(255,255,255,0.4);
  @media(max-width : 1024px){
    font-size: 14px;
  }
`
const MyName = styled.h1`
    font-size: 70px;
    color : #fff;
    font-weight: bold;
    @media(max-width : 1024px){
      font-size: 50px;
    }
    @media(max-width : 768px){
      font-size: 35px;
    }
    @media(max-width : 640px){
      font-size: 28px;
    }
`