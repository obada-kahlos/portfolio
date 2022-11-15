import React from 'react'
import styled from 'styled-components'
import Button from '../shared/button/Button'
import LazyLoad from 'react-lazyload';

const ProjectsCards = ({ image, projectName, description, LiveDemo, GitHubProject , language }) => {
  return (
    <ProjectContainer className='project relative cursor-pointer rounded-[4px] my-[10px] overflow-hidden'>
      <Image src={image} alt={projectName} className='h-full w-full' />
      <Caption className='caption '>
        <div>
          <p className='md:text-[16px] text-[12px]'> {description} </p>
          <p className='md:text-[16px] text-[12px]'> I used:  {language} </p>
        </div>
        <div className='flex gap-[10px]'>
          <a href={LiveDemo} target='_blanck'>
            <Button uppercase='uppercase'> Live Demo <span className='ButtonIcon'> <ion-icon name="globe-outline"></ion-icon> </span> </Button>
          </a>
          <a href={GitHubProject} target='_blanck'>
            <Button uppercase='uppercase'> Github <span className='ButtonIcon'> <ion-icon name="logo-github"></ion-icon> </span> </Button>
          </a>
        </div>
      </Caption>
      <div className='absolute bottom-0 left-0 w-full h-[40px] flex pl-[10px] items-center bg-[rgb(1,1,1,8)]'>
        <h1 className='text-white font-[500] text-[22px]'> {projectName} </h1>
      </div>
    </ProjectContainer>
  )
}

export default ProjectsCards
const Image = styled.img`
  transition : 0.2s ease-in;
  object-fit: fill;
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
  z-index: 20;
  transition : 0.2s ease-in-out;
`

const ProjectContainer = styled.div`
  transition : 0.2s ease-in;
  height: 300px;
  overflow: hidden;
  &:hover ${ Caption }{
    backdrop-filter: blur(30px);
    opacity: 1;
  }
`