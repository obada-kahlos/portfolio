import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from '../../Context/context'
import { Lis } from './styled'

const NavItem = ({children, to}) => {

  const {openSideBar,handleOpenSidebar} = useContext(Context)

  return (
    <Lis className='active' onClick={handleOpenSidebar}>
        <NavLink to={to} >
            {children}
        </NavLink>
    </Lis>
  )
}

export default NavItem