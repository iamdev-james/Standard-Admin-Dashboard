import React, {useEffect, useState} from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../contexts/ContextProvider';
// import { moment } from 'moment'

// Setting up socket.io connection
import io from 'socket.io-client';


const Chat = () => {
  let socket;
  const { currentColor, closeNavModal, chat, addChat, username } = useStateContext();
  let [chatMessage, setChatMessage] = useState("");
  
  // Connecting to socket
  useEffect(() => {
    const server = "https://mydevvyadmindashboardserver.herokuapp.com/";
    
    socket = io.connect(server);
  });
  // getting messages
  useEffect(() => {
    socket.on('chat', data => {
      addChat(data)
    })
  }, []);
  
  useEffect (() => {
    const showTyping = document.getElementById("Typing")
    socket.on('typing', data => {
      showTyping.innerHTML = `<p>${data} is typing</p>`
    })
  })
  
  // Emit typing to server
  const emitTyping = () => {
    socket.emit('typing', username)
  }
  // Set message to state
  const handleMessageChange = (e) => {
    setChatMessage(e.target.value)
  }
  
  const sendMessage = (e) => {
    e.preventDefault();
    const showTyping = document.getElementById("Typing")
    // Hardcoding needed variables
    const name = username;
    // const timeNow = moment();
    const type = 'Text';
    const message = chatMessage;

    socket.emit('chat', {
      message,
      name,
      // timeNow,
      type
    });
    setChatMessage("");
    showTyping.innerHTML = ""
  }

  return (
    <div className="drop-shadow-xl nav-item absolute right-3 md:right-52 top-16 bg-white dark:bg-[#42464D] py-8 rounded-lg w-96">
      <div className="flex justify-between items-center px-8">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Discussion room</p>
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
      <div className='max-h-[500px] overflow-y-scroll px-8'>
        <div className="mt-5">
          {chat?.map((message, index) => (
            <div key={index} className="flex items-center gap-5 border-b-1 border-color p-3 leading-8 cursor-pointer">
              <div className='flex flex-wrap'>
                <p className="font-semibold text-sm dark:text-gray-200 ">{message.name} :</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm"> {message.message}</p>
              </div>
            </div>
          ))}
          <div id="Typing" className='text-xs font-medium'></div>
        </div>
      </div>
      <div className='px-4 bg-white h-12'>
        <form className="fixed w-11/12 bottom-4 mt-6 flex justify-between items-center">
          <input
            type="text"
            className='h-12 mr-3 outline-none text-sm py-1 px-3 border-b-2 border-blue-300 border-solid w-3/4 hover:drop-shadow-md bg-transparent dark:text-white'
            placeholder='Message...'
            value={chatMessage}
            onChange={handleMessageChange}
            onKeyDown={emitTyping}
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