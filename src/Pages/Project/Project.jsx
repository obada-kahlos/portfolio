import React from 'react'

import Container from '../../components/shared/Containers/Containers'
import ProjectsCards from '../../components/projects-cards/projects-cards'
import { ProjectsData } from './projects-data'
import Heading from '../../components/shared/heading/heading'

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
                  language={item.language}
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
      <Heading text={'Project'} />
    </>
  )
}

export default Project
