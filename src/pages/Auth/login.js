import React from 'react'
import ReactDOM from 'react-dom'
import { useNavigate } from 'react-router-dom'

import { useStateContext } from '../../contexts/ContextProvider'

const Login = () => {
  let navigate = useNavigate()
  const { username, setUsername } = useStateContext()

  const handleSubmit = () => {
    if(!username) return
    localStorage.setItem('Username', username)
    return navigate('/')
  }
  return ReactDOM.createPortal(
    <div className='overflow-hidden w-screen h-screen bg-white'>
      <div className='mt-48 md:mt-40 flex flex-col justify-between items-center w-11/12 md:w-2/5 m-auto rounded-2xl bg-gray-200 py-10 drop-shadow-xl'>
        <div className='flex justify-center items-center'>
          <div
            className="items-center gap-3 ml-3 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
              <span>Shopify</span>
          </div><span className='text-4xl'> | </span><p className='text-2xl font-bold'>LOGIN</p>
        </div>
          <p className='px-1 mb-16 text-sm mt-3 font-semibold'>Enter your name to access this amazing dashboard</p>
        <div className='w-3/4'>
          <form>
            <div className='flex flex-col gap-4 items-center'>
              <input
                placeholder="Enter your name"
                label="email"
                onChange={(e) => setUsername(e.target.value)}
                className="rounded-2xl outline-none h-14 p-2 text-core font-medium w-full"
                required
              />
            </div>
            <button
            onClick={handleSubmit}
            type="submit"
            className='mt-6 m-auto flex justify-center items-center bg-blue-400 hover:drop-shadow-xl hover:bg-blue-600 rounded-2xl outline-none h-14 p-2 text-lg font-medium w-5/6 md:w-3/4'
          >
            Login
          </button>
          </form>
        </div>
      </div>
    </div>,
    document.getElementById('loginportal')
  )
}

export default Login;