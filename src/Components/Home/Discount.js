import React from 'react'
import './Discount.css'
import helmet from '../../images/helmet1.png'

const Discount = () => {
  return (
    <div className='flex mt-44'>
      <div className='one '>
        <h1 className='text-6xl ml-32 mt-32 text-white font-bold'>
          Take Care of Your
        </h1>
        <h1 className='text-6xl ml-32  text-white font-bold'>helmet 40% off</h1>
        <p className='text-white ml-32 text-xl mt-5'>
          This discount is not valid in conjunction with other offers
        </p>
      </div>
      <div className='two'>
        <img className='size' src={helmet} alt='' />
      </div>
    </div>
  )
}

export default Discount
