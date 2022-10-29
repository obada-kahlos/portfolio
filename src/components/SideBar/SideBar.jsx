import React, { useContext } from 'react'
import { Context } from '../../Context/context';
import { navData } from './Data';
import Nav from './Nav';
import NavItem from './NavItem';
import './style.css'
const SideBar = () => {
  return (
      <Nav>
          {
              navData.map((item , key)=>(
                <NavItem to={item.link} key={key}>
                    <span className='icon'> {item.icon} </span>
                </NavItem>
              ))
          }
      </Nav>
  )
}

export default SideBar