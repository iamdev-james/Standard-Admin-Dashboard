import React, {useEffect, useState} from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { chatData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
// import { moment } from 'moment'

// Setting up socket.io connection
import io from 'socket.io-client';


const Chat = () => {
  let socket;
  const { currentColor, closeNavModal } = useStateContext();
  let [chatMessage, setChatMessage] = useState("");

  // Connecting to socket
  useEffect(() => {
    const server = "http://localhost:5000";
  
    socket = io.connect(server);
  });
  // Set message to state
  const handleMessageChange = (e) => {
    setChatMessage(e.target.value)
  }

  const sendMessage = (e) => {
    e.preventDefault();
    // Hardcoding needed variables
    const userId = '473027302';
    const userName = "James";
    // const timeNow = moment();
    const type = 'Image';
    const message = chatMessage;

    socket.emit('Chat', {
      message,
      userId,
      userName,
      // timeNow,
      type
    });
    setChatMessage = "";

    socket.on('Chat', data => {
      console.log(data)
    })
  }

  return (
    <div className="drop-shadow-xl nav-item absolute right-5 md:right-52 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Dicussion room</p>
        </div>
        <button
          type="button"
          onClick={() => closeNavModal('chat')}
          style= {{
            color: "rgb(153, 171, 180)",
            borderRadius: '50%'
          }}
          className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
        ><MdOutlineCancel /></button>
      </div>
      <div className="mt-5 ">
        {chatData?.map((item, index) => (
          <div key={index} className="flex items-center gap-5 border-b-1 border-color p-3 leading-8 cursor-pointer">
            <div className="relative">
              <img
                className="rounded-full h-10 w-10"
                src={item.image}
                alt={item.message}
              />
              <span
                style={{ background: item.dotColor }}
                className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
              />
            </div>
            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.message}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">{item.time}</p>
            </div>
          </div>
        ))}
        <form className="w-full mt-6 flex justify-between items-center">
          <input
            type="text"
            className='h-12 mr-3 outline-none text-sm py-1 px-3 border-b-2 border-blue-300 border-solid w-3/4 hover:drop-shadow-md bg-transparent dark:text-white'
            placeholder='Message...'
            value={chatMessage}
            onChange={handleMessageChange}
            required
          />
          <button
            onClick={sendMessage}
            className='text-lg text-white rounded-xl px-6 py-1'
            style={{
              backgroundColor: currentColor
            }}
          > Send </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;