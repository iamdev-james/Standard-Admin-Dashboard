import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
// import { BsCheck } from 'react-icons/bs'
// import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { cartData } from '../data/dummy'

import { useStateContext } from '../contexts/ContextProvider'

const Cart = () => {
  const { closeNavModal } = useStateContext();
  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>
      <div className='float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484b52] w-[300px] md:w-400'>
        <div className='mb-4 flex justify-between items-center p-4 ml-4'>
          <p className="font-semibold text-xl">Cart</p>
          <button
            type="button"
            onClick={() => closeNavModal('cart')}
            style= {{
              color: "rgb(153, 171, 180)",
              borderRadius: '50%'
            }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          ><MdOutlineCancel /></button>
        </div>
        <div>
          {cartData.map((item, index) => (
            <div key={index}>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cart;
