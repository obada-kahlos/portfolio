import React, { useContext } from 'react'
import { Context } from '../../Context/context'
import { Navbar , Ul } from './styled'

const Nav = ({children}) => {
  const {openSideBar} = useContext(Context)
  return (
    <>
      <Navbar showNav={openSideBar}>
          <Ul>
              {children}
          </Ul>
          <h1 className='absolute md:bottom-11 bottom-4  md:right-[70px] right-4 md:text-[40px] sm:text-[30px] text-[25px] text-main-color opacity-[0.1]'>
            FRONT-END DEVELOPER
          </h1>
      </Navbar>
    </>
  )
}

export default Nav