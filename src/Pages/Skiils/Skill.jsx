import React from 'react'
import backgroundImage from '../../assets/intro-bg.jpg'
import Layout from '../../components/shared/layout/layout'

const Skill = () => {
  return (
    <>

    <Layout />
    <style>
        {`
          body{
            background: #151515 url(${backgroundImage}) no-repeat center bottom;
            background-size: cover;
            background-attachment: fixed;
          }
        `}
      </style>
    </>
  )
}

export default Skill