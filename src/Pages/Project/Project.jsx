import React from 'react'

import backgroundImage from '../../assets/intro-bg.jpg'
import Layout from '../../components/shared/layout/layout'
import Container from '../../components/shared/Containers/Containers'
import ProjectsCards from '../../components/projects-cards/projects-cards'
import { ProjectsData } from './projects-data'

const Project = () => {
  return (
    <>
      <Container className=''>
        <h1 className='text-[#fff] md:text-[40px] my-[20px] text-[22px]'> My project<span className='text-main-color'>.</span>  </h1>
        <div className='grid grid-cols-12 gap-4'>
          {
            ProjectsData.map((item, key) => (
              <div className='xl:col-span-4 lg:col-span-6 md:col-span-6 col-span-12'>
                <ProjectsCards
                  key={key}
                  image={item.image}
                  projectName={item.projectName}
                  description={item.description}
                  LiveDemo={item.LiveDemo}
                  GitHubProject={item.GitHubProject}
                />
              </div>
            ))
          }
        </div>
      </Container>
      {/* <Layout /> */}
      {/* <style>
        {`
          body{
            background: #151515 url(${ backgroundImage }) no-repeat center bottom;
            background-size: cover;
            background-attachment: fixed;
          }
          .project:hover .caption{
            right : 0
          }
        `}
      </style> */}
    </>
  )
}

export default Project
