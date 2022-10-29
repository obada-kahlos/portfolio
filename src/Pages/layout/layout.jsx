import React, { useContext, useEffect, useState } from 'react'
import SideBar from '../../components/SideBar/SideBar'

import { Outlet } from 'react-router-dom'

import { Container } from './styled';

import '../style.css'
import { Context } from '../../Context/context';
import Loading from '../../components/Loading/Loading';
const Layout = () => {

  const { openSideBar, openPopup, handleOpenSidebar } = useContext(Context)
  const [isLoading, setIsLoading] = useState(true)

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
            {openSideBar ? <SideBar /> : null}
            <div className={`${ openSideBar || openPopup ? 'blur-[1px] ' : 'blur-[0]' } w-full h-screen py-[40px] overflow-hidden`}>
              <Container >
                <Outlet /> 
              </Container>
            </div>
            <div className='sideBarButton' onClick={handleOpenSidebar}>
              {
                openSideBar ? <span className='sidebarIcon'> <ion-icon name="close-outline"></ion-icon> </span> : <span className='sidebarIcon'> <ion-icon name="menu-outline"></ion-icon></span>
              }
            </div>
          </>
      }
    </>
  )
}

export default Layout
