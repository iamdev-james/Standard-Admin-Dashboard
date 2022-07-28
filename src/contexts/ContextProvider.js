import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext();

const initialState = {
  cart: false, 
  chat: false,
  userProfile: false,
  notification: false
}

export const ContextProvider = ({ children }) => {
  const [ menuActive, setMenuActive ] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [customersData, setCustomersData] = useState(null);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [ themeSettings, setThemeSettings ] = useState(false)

  const setMode = (e) => {
    setCurrentMode(e.target.value)

    localStorage.setItem('themeMode', e.target.value)

    // Close the settings bar on button click
    setThemeSettings(false)
  }

  const setColor = (color) => {
    setCurrentColor(color)

    localStorage.setItem('colorMode', color)

    // Close the settings bar on button click
    setThemeSettings(false)
  }

  // Function to handle nav items clicks
  const toggleNavModal = (clicked) => {
    setIsClicked({...initialState, [clicked]: true});
  } 
  const closeNavModal = (clicked) => {
    setIsClicked({...initialState, [clicked]: false});
  } 
  return (
    <StateContext.Provider
    value={{
      menuActive, closeNavModal,
      setMenuActive, isClicked,
      setIsClicked, toggleNavModal,
      screenSize, setScreenSize,
      customersData, setCustomersData,
      currentColor, currentMode,
      themeSettings, setThemeSettings,
      setMode, setColor
    }}
    >
      { children }
    </StateContext.Provider>
  )
};

export const useStateContext = () => useContext(StateContext);