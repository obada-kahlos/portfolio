import React from 'react'
import styled, { keyframes } from 'styled-components'
const Loading = ({ open }) => {
  return (
    <>
      {
        open &&
        <div className='relative w-full h-screen flex justify-center items-center bg-black' dir='rtl'>
          <Loader>
            <p className='text-white'></p> 
          </Loader>
          {/* <div className='absolute md:bottom-6  right-6 gap-2'>
            <Span> كل </Span>
            <Span> يوم </Span>
            <Span> هو </Span>
            <Span> ! </Span>
            <Span> بداية </Span>
            <Span> جديدة </Span>
            <Span> 🤍 </Span>
          </div> */}
        </div>
      }
    </>
  )
}

export default Loading
const Span = styled.span`
  color: rgba(255,255,255,0.5);
  font-size: 50px;
  font-family: 'Lalezar', cursive;
    -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0, 0, 0, .2));
  @media(max-width : 768px){
    font-size: 18px;
  }
`

const rotateSideBarButtonAfter = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`
const rotateSideBarButtonBefore = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(-360deg);
  }
`
const Loader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  &::after{
    position: absolute;
    content: '';
    border: 3px solid #ff8400;
    border-top : 3px solid transparent;
    border-right : 3px solid transparent;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    animation: ${rotateSideBarButtonAfter} 2s linear infinite;
    @media(max-width : 768px){
      width: 100px;
      height: 100px;
    }
  }
  &::before{
    position: absolute;
    content: '';
    border: 3px solid #ff8400;
    border-bottom : 3px solid transparent;
    border-left: 3px solid transparent;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    animation: ${rotateSideBarButtonBefore} 2s linear infinite;
    @media(max-width : 768px){
      width: 140px;
      height: 140px;
    }
  }
`