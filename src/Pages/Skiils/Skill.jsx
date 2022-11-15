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
      <h1 className='text-white md:text-[36px] text-[18px]'> My Skills. </h1>
      <div className='grid grid-cols-12 gap-8 mt-[30px]'>
        {
          skillData.map((item, key) => (
            <div className='md:col-span-6 col-span-12'>
              <SkillCard label={item.label} percentage={item.percentage} key={key} />
            </div>
          ))
        }
      </div>
    </Container>
  )
}

export default Skills

