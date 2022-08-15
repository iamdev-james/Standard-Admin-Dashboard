import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'

import { TooltipComponent } from '@syncfusion/ej2-react-popups'

// Profile Avatar
import avatar from '../data/avatar.jpg'

import { Chat, UserProfile } from '../components'
import { Notifications } from '.'

// Context Here
import { useStateContext } from '../contexts/ContextProvider'

// Declaring a custom function for all our Nav buttons
const NavButton = ({title, customFunc, icon, color, dotColor}) => (
  <TooltipComponent
    content={title}
    position="BottomCenter"
  >
    <button
    type="button"
    onClick={customFunc}
    style= {{ color }}
    className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
      style={{
        backgroundColor: dotColor
      }}
      className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      { icon }
    </button>
  </TooltipComponent>
)

const NavBar = () => {
  const { setMenuActive, isClicked, toggleNavModal, screenSize, setScreenSize, currentColor, username } = useStateContext();

  useEffect(() => {
    const handleScreenSize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleScreenSize)

    handleScreenSize();

    return () => window.removeEventListener('resize', handleScreenSize)
  })
  
  // Setting nav based on user screen size
  useEffect(() => {
    if (screenSize <= 900) {
      setMenuActive(false)
    } else {
      setMenuActive(true)
    }
  }, [screenSize, setMenuActive])

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton
        title="Menu"
        customFunc= {() => setMenuActive((prevMenuActive) => !prevMenuActive )}
        color={ currentColor }
        icon={<AiOutlineMenu />}
      />
      <div className='flex'>
        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc= {() => toggleNavModal('chat')}
          color={ currentColor }
          icon={<BsChatLeft />}
        />

        <NavButton
          title="Notifications"
          dotColor="#03C9D7"
          customFunc= {() => toggleNavModal('notification')}
          color={ currentColor }
          icon={<RiNotification3Line />}
        />
        <TooltipComponent
        content="Profile"
        position="BottomCenter"
        >
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={() => toggleNavModal('userProfile')}>
            <img src={avatar} alt='Profile-Img' className='rounded-full w-8 h-8' />
            <p>
              <span className='text-gray-400 text-14'>Hi, </span>{' '}
              <span className='text-gray-400 font-bold ml-1 text-14'>{ username }</span>
            </p>
          <MdKeyboardArrowDown />
          </div>
        </TooltipComponent>

        {/* Component to display per time */}
        {isClicked.chat && <Chat />}
        {isClicked.userProfile && <UserProfile />}
        {isClicked.notification && <Notifications />}
      </div>
    </div>
  )
}

export default NavBar