import React from 'react'
import styled from 'styled-components'
import backgroundImage from '../../assets/intro-bg.jpg'
import Layout from '../../components/shared/layout/layout'
import SkillCard from '../../components/skill-card/skill-card'
import { Container } from '../layout/styled'

const skillData = [
  {
    label: 'HTML',
    percentage: '80%'
  },
  {
    label: 'CSS',
    percentage: '80%'
  },
  {
    label: 'TailwindCSS',
    percentage: '70%'
  },
  {
    label: 'Bootstrap',
    percentage: '70%'
  },
  {
    label: 'JavaScript',
    percentage: '50%'
  },
  {
    label: 'TypeScript',
    percentage: '40%'
  },
  {
    label: 'Git/GitHub',
    percentage: '30%'
  },
  {
    label: 'ReactJS',
    percentage: '65%'
  },
  {
    label: 'Redux Toolkit',
    percentage: '65%'
  },
  {
    label: 'Styled-component',
    percentage: '65%'
  },
]


const Skills = () => {
  return (
    <Container className=''>
      <h1 className='text-white'> My Skills </h1>
      <div className='flex justify-center items-center flex-row gap-10 flex-wrap mt-[30px]'>
        {
          skillData.map((item, key) => (
            <SkillCard label={item.label} percentage={item.percentage} key={key}/>
          ))
        }
      </div>
    </Container>
  )
}

export default Skills

