import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav = ({ left, top, translate, opacity, handleNav }) => {
  return (
    <ContainerLinks>
      <NavLinksOne onClick={handleNav} to='about-me' left={left} top={top} translate={translate} opacity={opacity}>
        <ion-icon name="person-outline"></ion-icon>
      </NavLinksOne>
      <NavLinksTow onClick={handleNav} to='skill' left={left} top={top} translate={translate} opacity={opacity}>
        <ion-icon name="speedometer-outline"></ion-icon>
      </NavLinksTow>
      <NavLinksThree onClick={handleNav} to='project' left={left} top={top} translate={translate} opacity={opacity}>
        <ion-icon name="code-slash-outline"></ion-icon>
      </NavLinksThree>
      <NavLinksFour onClick={handleNav} to='contact-me' left={left} top={top} translate={translate} opacity={opacity}>
        <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
      </NavLinksFour>
      <NavLinksFive href="cv.pdf" className="cv" download onClick={handleNav} left={left} top={top} translate={translate} opacity={opacity}>
        <ion-icon name="cloud-download-outline"></ion-icon>
      </NavLinksFive>
    </ContainerLinks>
  )
}

export default Nav
const ContainerLinks = styled.nav`
  display: inline-block;
  position: absolute;
  right: 30px;
  rotate: (-180deg);
  top: 10px;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: transparent;
  z-index: 1001;
  opacity: 1;
  transition: 0.4s;
  a{
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    transform-origin: 40px 40px;
    border-radius: 50%;
    color: #fff;
    border: 1px solid #ff8400;
    transition-duration: 0.2s;
    z-index: 1000;
    @media(max-width : 768px){
      width: 50px;
      height: 50px;
      font-size: 16px;
    }
  }
  a.active{
    background-color: #ff8400;
    &:after{
      position: absolute;
      content: '';
      width: 60px;
      height: 60px;
      background-color: #ff8400;
      z-index: -1;
      border-radius: 50%;
      box-shadow: 0px 0px 20px 6px rgba(255, 132, 0,0.5);
      @media(max-width : 768px){
        width: 50px;
        height: 50px;
        font-size: 16px;
      }
    }
  }
`
const NavLinksOne = styled(NavLink)`
    position: absolute;
    left: ${ (props) => props.left ? '25px' : '64%' };
    top: ${ (props) => props.top ? '-3px' : '25%' };
    transform: ${ (props) => props.translate ? 'translate(0)' : 'translate(-50% , -50%)' };
    opacity:${ (props) => props.opacity ? '1' : '0' };
    transition-timing-function: ease-in;
    transition-delay: 0.1s;
    @media(max-width : 768px){ 
      top: ${ (props) => props.top ? '-5px' : '25%' };
      left: ${ (props) => props.left ? '92px' : '64%' };
    }
`
const NavLinksTow = styled(NavLink)`
    position: absolute;
    left: ${ (props) => props.left ? '35px' : '64%' };
    top: ${ (props) => props.top ? '30%' : '25%' };
    transform: ${ (props) => props.translate ? 'translate(0)' : 'translate(-50% , -50%)' };
    opacity:${ (props) => props.opacity ? '1' : '0' };
    transition-timing-function: ease-in;
    transition-delay: 0.2s;
    @media(max-width : 768px){ 
      left: ${ (props) => props.left ? '100px' : '64%' };
      top: ${ (props) => props.top ? '20%' : '25%' };
    }
`

const NavLinksThree = styled(NavLink)`
    position: absolute;
    left: ${ (props) => props.left ? '70px' : '64%' };
    top: ${ (props) => props.top ? '57%' : '25%' };
    transform: ${ (props) => props.translate ? 'translate(0)' : 'translate(-50% , -50%)' };
    opacity:${ (props) => props.opacity ? '1' : '0' };
    transition-timing-function: ease-in;
    transition-delay: 0.3s;
    @media(max-width : 768px){ 
      left: ${ (props) => props.left ? '125px' : '64%' };
      top: ${ (props) => props.top ? '40%' : '25%' };
    }
`

const NavLinksFour = styled(NavLink)`
    position: absolute;
    right: ${ (props) => props.left ? '20%' : '0%' };
    bottom: ${ (props) => props.top ? '4%' : '62%' };
    transform: ${ (props) => props.translate ? 'translate(0)' : 'translate(-50% , -50%)' };
    opacity:${ (props) => props.opacity ? '1' : '0' };
    transition-timing-function: ease-in;
    transition-delay: 0.4s;
    @media(max-width : 768px){ 
      right: ${ (props) => props.left ? '11%' : '0%' };
      bottom: ${ (props) => props.top ? '30%' : '62%' };
    }
`

const NavLinksFive = styled.a`
    position: absolute;
    right: ${ (props) => props.left ? '-25px' : '0%' };
    bottom: ${ (props) => props.top ? '0%' : '62%' };
    transform: ${ (props) => props.translate ? 'translate(0)' : 'translate(-50% , -50%)' };
    opacity:${ (props) => props.opacity ? '1' : '0' };
    transition-timing-function: ease-in;
    transition-delay: 0.5s;
    @media(max-width : 768px){ 
      right: ${ (props) => props.left ? '-24px' : '0%' };
      bottom: ${ (props) => props.top ? '26%' : '62%' };
    }
`