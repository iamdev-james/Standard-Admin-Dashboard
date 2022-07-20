import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext();

const initialState = {
  cart: false, 
  chat: false,
  userProfile: false,
  notification: false
}

export const ContextProvider = ({ children }) => {
  const [ menuActive, setMenuActive ] = useState(true)
  const [isClicked, setIsClicked] = useState(initialState)
  const [screenSize, setScreenSize] = useState(undefined)

  // Function to handle nav items clicks
  const toggleNavModal = (clicked) => {
    setIsClicked({...initialState, [clicked]: true});
  } 
  return (
    <StateContext.Provider
    value={{
      menuActive,
      setMenuActive,
      isClicked,
      setIsClicked,
      toggleNavModal,
      screenSize,
      setScreenSize
    }}
    >
      { children }
    </StateContext.Provider>
  )
};

export const useStateContext = () => useContext(StateContext);