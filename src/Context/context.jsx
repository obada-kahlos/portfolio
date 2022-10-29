import React, { useState, createContext } from "react";

export const Context = createContext();

export const ContextProvider = ({children}) => {

    // open and close sidebar 
    const [openSideBar , setOpenSideBar] = useState(false)
    const handleOpenSidebar = () => {setOpenSideBar(!openSideBar)}

    const [openPopup , setOpenPopup] = useState(false)
    const handleOpenPopup = () => {setOpenPopup(!openPopup)}


    
    return (
        <Context.Provider value={{
            openSideBar,
            handleOpenSidebar,
            openPopup,
            handleOpenPopup,
        }}>
            {children}
        </Context.Provider>
    )
}