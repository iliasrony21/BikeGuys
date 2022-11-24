import React from 'react'
import './ShowHelmet.css'
import helmet3 from '../../../images/helmet/helmet-3 (1).png'
import helmet2 from '../../../images/helmet2.png'

const ShowHelmet = () => {
  return (
    <div className='flex '>
      <div className='flex full-part pl-5 drop-shadow-2xl mt-12 mb-12 '>
        <div className='bg-accent mt-20 text-part'>
          <h1 className='text-2xl '>Power tools of next level</h1>
          <h1 className='text-4xl font-bold'>Bike Helmet</h1>
          <button className='btn btn-primary w-32 text-white rounded-full my-12'>
            Details
          </button>
        </div>
        <div className='image-part'>
          <img src={helmet3} alt='' className='' />
        </div>
      </div>
      <div className='flex full-part2 pl-5 drop-shadow-2xl mt-12 mb-12 '>
        <div className='bg-accent mt-20 text-part'>
          <h1 className='text-2xl '>Power tools of next level</h1>
          <h1 className='text-4xl font-bold'>Bike Helmet</h1>
          <button className='btn btn-primary w-32 text-white rounded-full my-12'>
            Details
          </button>
        </div>
        <div className='image-part2'>
          <img src={helmet2} alt='' className='' />
        </div>
      </div>
    </div>
  )
}

export default ShowHelmet
