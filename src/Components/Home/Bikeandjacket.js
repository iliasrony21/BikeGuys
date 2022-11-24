import React from 'react'
import './Bikeandgloves.css'
import gloves from '../../images/gloves.png'
import jacket from '../../images/jackett (2).png'

const Bikeandjacket = () => {
  return (
    <div className='mt-32'>
      <div className='flex'>
        <div className='flex full-part pl-5 drop-shadow-2xl mt-12 mb-12 '>
          <div className='bg-accent mt-20 text-part'>
            <h1 className='text-2xl '>Power tools of next level</h1>
            <h1 className='text-4xl font-bold'>Bike Gloves</h1>
            <button className='btn btn-primary w-32 text-white rounded-full my-12'>
              Details
            </button>
          </div>
          <div className='image-part w-96'>
            <img src={gloves} alt='' className='h-full w-full' />
          </div>
        </div>
        <div className='flex full-part2 pl-5 drop-shadow-2xl mt-12 mb-12 '>
          <div className='bg-accent mt-20 text-part'>
            <h1 className='text-2xl '>Power tools of next level</h1>
            <h1 className='text-4xl font-bold'>Bike Jacket</h1>
            <button className='btn btn-primary w-32 text-white rounded-full my-12'>
              Details
            </button>
          </div>
          <div className='image-part2 '>
            <img src={jacket} alt='' className='jacket' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bikeandjacket
