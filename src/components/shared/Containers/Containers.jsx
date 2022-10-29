import React from 'react'
import styled from 'styled-components'

const Container = ({children ,className , margin}) => {
  return (
    <Wrapper className={className} margin={margin}>
      {children}
    </Wrapper>
  )
}

export default Container

const Wrapper = styled.div`
  position: relative;
  z-index: 1001;
  @media(max-width : 768px){
    margin: 40px 5px;
  }
`