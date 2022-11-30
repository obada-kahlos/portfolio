import React from 'react'
import styled from 'styled-components'
import Heading from '../../components/shared/heading/heading'
import { Container } from '../layout/styled'
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <div className='flex justify-end items-center w-full h-[90vh]'>
        <div>
          <Skill
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
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
          <Skill
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
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
          <Skill
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
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
          <Skill
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
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
          <Skill
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className='rotate-[-225deg] flex items-center flex-col'>
              <Icon><ion-icon name="logo-react"></ion-icon></Icon>
              <span> React </span>
            </div>
          </Skill>
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
    width: 80px;
    height: 80px;
    font-size: 12px;
  }
`

const Icon = styled.div`
  font-size: 22px;
  @media(max-width : 768px){
    font-size: 16px;
  }
`

