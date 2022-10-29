import React from 'react'
import styled from 'styled-components'
import Button from '../shared/button/Button'
import LazyLoad from 'react-lazyload';

const ProjectsCards = ({ image, projectName, description, LiveDemo, GitHubProject }) => {
  return (
    <ProjectContainer className='project relative cursor-pointer rounded-[4px] my-[10px] overflow-hidden'>
      <LazyLoad height={250} offset={100}>
        <Image src={image} alt={projectName} className='h-full w-full' />
      </LazyLoad>
      <Caption className='caption '>
        <div>
          <h1 className='text-main-color text-[26px]'>{projectName}</h1>
          <p className='md:text-[16px] text-[12px]'> {description} </p>
        </div>
        <div className='flex gap-[10px]'>
          <a href={LiveDemo}>
            <Button uppercase='uppercase'> Live Demo <span className='ButtonIcon'> <ion-icon name="globe-outline"></ion-icon> </span> </Button>
          </a>
          <a href={GitHubProject}>
            <Button uppercase='uppercase'> Github <span className='ButtonIcon'> <ion-icon name="logo-github"></ion-icon> </span> </Button>
          </a>
        </div>
      </Caption>
      <div className='absolute bottom-0 left-0 w-full h-[40px] bg-main-color p-4'>
        <h1 className='text-white'> Project </h1>
      </div>
    </ProjectContainer>
  )
}

export default ProjectsCards
const Image = styled.img`
  transition : 0.2s ease-in;
  object-fit: scale-down;
`
const Caption = styled.div`
  position : absolute;
  left : 0;
  top : 0;
  width : 100%;
  padding : 10px;
  display : flex;
  justify-content : space-between;
  align-items : flex-start;
  flex-direction: column;
  height : 100%;
  background : rgba(0,0,0,0.4);
  color : #fff;
  opacity: 0;
  transition : 0.2s ease-in-out;
`
const ProjectContainer = styled.div`
  transition : 0.2s ease-in;

  &:hover ${ Caption }{
    backdrop-filter: blur(30px);
    opacity: 1;
  }
`