import React, { useContext, useEffect, useState } from 'react'
import SideBar from '../../components/SideBar/SideBar'

import { Outlet } from 'react-router-dom'

import { Container } from './styled';

import '../style.css'
import { Context } from '../../Context/context';
import Loading from '../../components/Loading/Loading';
import Nav from '../../components/Nav/Nav';
const Layout = () => {

  const { openSideBar, openPopup, handleOpenSidebar } = useContext(Context)
  const [isLoading, setIsLoading] = useState(true)
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav((prev) => !prev)
  }
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [,]);
  return (
    <>
      {
        isLoading ? <Loading open={isLoading} /> :
          <>
            <Nav left={nav} top={nav} translate={nav} opacity={nav} handleNav={handleNav} />
            <div className={`${ nav ? 'blur-[1px] ' : 'blur-[0]' } w-full h-screen py-[40px] overflow-x-hidden`}>
              <Container >
                <Outlet />
              </Container>
            </div>
            <div className='sideBarButton' onClick={handleNav}>
              {
                nav ? <span className='sidebarIcon'> <ion-icon name="close-outline"></ion-icon> </span> : <span className='sidebarIcon'> <ion-icon name="menu-outline"></ion-icon></span>
              }
            </div>
          </>
      }
    </>
  )
}

export default Layout
