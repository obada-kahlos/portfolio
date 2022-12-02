import React from 'react'
import styled from 'styled-components'
import Heading from '../../components/shared/heading/heading'
import { Container } from '../layout/styled'
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <div className='flex md:justify-end justify-center items-center w-full h-[90vh]'>
        <div>
          <Skill>
            <div className='rotate-[-225deg] flex items-center flex-col'>
              <Icon><ion-icon name="logo-html5"></ion-icon></Icon>
              <span> HTML </span>
            </div>
          </Skill>
          <Skill>
            <div className='rotate-[-225deg] flex items-center flex-col'>
              <Icon><ion-icon name="logo-css3"></ion-icon></Icon>
              <span> CSS </span>
            </div>
          </Skill>
          <Skill>
            <div className='rotate-[-225deg] flex items-center flex-col'>
              <Icon><ion-icon name="logo-javascript"></ion-icon></Icon>
              <span> JavaScript </span>
            </div>
          </Skill>
          <Skill>
            <div className='rotate-[-225deg] flex items-center flex-col'>
              <Icon><ion-icon name="expand-outline"></ion-icon></Icon>
              <span> Responsive </span>
            </div>
          </Skill>
        </div>
        <div>
          <Skill>
            <div className='rotate-[-225deg] flex items-center flex-col'>
              <Icon><ion-icon name="alert-outline"></ion-icon></Icon>
              <span> TailwindCss </span>
            </div>
          </Skill>
          <Skill>
            <div className='rotate-[-225deg] flex items-center flex-col'>
              <Icon><ion-icon name="alert-outline"></ion-icon></Icon>
              <span> Bootstrap </span>
            </div>
          </Skill>
          <Skill>
            <div className='rotate-[-225deg] flex items-center flex-col'>
              <Icon><ion-icon name="alert-outline"></ion-icon></Icon>
              <span> TypeScript </span>
            </div>
          </Skill>
        </div>
        <div>
          <Skill>
            <div className='rotate-[-225deg] flex items-center flex-col'>
              <Icon><ion-icon name="logo-github"></ion-icon></Icon>
              <span> Git/Github </span>
            </div>
          </Skill>
          <Skill>
            <div className='rotate-[-225deg] flex items-center flex-col'>
              <Icon><ion-icon name="alert-outline"></ion-icon></Icon>
              <span> NextJs </span>
            </div>
          </Skill>
        </div>
        <div>
          <div className='transition-[0.4s] flex justify-center items-center text-[#fff] border-[2px] md:w-[120px] md:h-[120px] md:text-[16px] text-[12px] rotate-[225deg] w-[75px] h-[75px] border-[rgba(255,255,255,0.6)] cursor-pointer hover:border-[#00a2ff] hover:text-[#00a2ff]'>
            <div className='rotate-[-225deg] flex items-center flex-col'>
              <Icon><ion-icon name="logo-react"></ion-icon></Icon>
              <span> React </span>
            </div>
          </div>
        </div>
      </div>
      <Heading text={'Skills'} />
    </>
  )
}

export default Skills


const Skill = styled(motion.div)`
  width : 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(255,255,255,0.6);
  background: #494949;
  color: #fff;
  font-size: 16px;
  transform: rotate(225deg);
  margin: 50px 0px;
  transition: 0.4s;
  cursor: pointer;
  &:hover{
    background: transparent;
    border: 2px solid #ff8400;
    color: #ff8400;
  }
  @media(max-width : 768px){
    width: 75px;
    height: 75px;
    font-size: 12px;
  }
`

const Icon = styled.div`
  font-size: 22px;
  @media(max-width : 768px){
    font-size: 16px;
  }
`

