import styled, { keyframes } from "styled-components";

const sideBarAnimation = keyframes`
  from {
    transform: translateX(-200%);
  }
  to {
    transform: translateX(0%);
  }
`;

export const Navbar = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
    border-right: 3px solid #ff8400;
    background-color: rgba(0,0,0,0.2);
    z-index: 1009;
    animation: ${sideBarAnimation} 0.5s;
    transform : ${(props)=> props.showNav ? "translateX(0)" : "translateX(-400px)"};
`


export const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    border-radius: 5px;
`
export const Lis = styled.li`
    list-style: none;
    position: relative;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    margin: 10px 0;
    z-index: 5;
    transition: 0.3s;
    cursor: pointer;
`