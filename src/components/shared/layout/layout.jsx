import React from 'react'
import styled from 'styled-components'

const Layout = () => {
  return (
    <Overlay></Overlay>
  )
}

export default Layout

const Overlay = styled.div`
  position : fixed;
  background-color : #111111;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index : 1000;
  transition : 0.6s;
  opacity : 0.95;
`