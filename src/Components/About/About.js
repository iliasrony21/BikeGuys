import React from 'react'
import './About.css'
import bike from '../../images/bmw-bike.png'
const About = () => {
  return (
    <div>
      <div className='hero min-h-screen '>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <img src={bike} className='h-96 images' alt='' />
          <div className=''>
            <h1 className='text-5xl font-bold'>About bikestore</h1>
            <p className='py-6'>
              The more we drive the car the better they seem to operate operate.
              No noise, just stopping power! Quis autem vel eum iure
              reprehenderit qui in ea voluptate velit esse quam <br></br>{' '}
              <br></br>vel illum qui dolorem eum fugiat quo voluptas nulla
              pariatur erit qui in ea voluptate verit qui in ea voluptate vele.
              nulla pariatur erit qui in ea voluptate verit qui in ea voluptate
              vele.
            </p>
            <button className='btn btn-primary text-white rounded-full w-32'>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
