import React from 'react'
import './Navbar.css'
import back1 from '../../images/back1.jpg'
import back2 from '../../images/back2.jpg'
import back3 from '../../images/back3.jpg'

const Navbar = () => {
  return (
    <div>
      <div className='carousel w-full allimg h-screen'>
        <div id='slide1' className='carousel-item relative w-full'>
          <img
            src={back1}
            alt=''
            className='w-full h-full  bg-zinc-900 opacity-75'
          ></img>

          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a
              href='#slide3'
              className='btn btn-circle text-white border-none bg-primary'
            >
              ❮
            </a>
            <div className='mt-[-70px] ml-[-580px]'>
              <span className='text-7xl text-white '>Driving a MotorCycle</span>
              <br />
              <span className='text-7xl  text-primary '>is like flying</span>
              <p className='text-white text-2xl my-5'>
                I really love to ride my motorcycle.When i want to just get{' '}
                <br /> away and be by myself and clear my head,that's what i do.
              </p>
              <button className='btn btn-primary text-white w-44 rounded-full'>
                Watch more
              </button>
            </div>
            <a
              href='#slide2'
              className='btn btn-circle text-white border-none bg-primary'
            >
              ❯
            </a>
          </div>
        </div>
        <div id='slide2' className='carousel-item relative w-full'>
          <img src={back2} alt='' className='w-full bg-primary   opacity-75 ' />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a
              href='#slide1'
              className='btn btn-circle text-white border-none bg-primary'
            >
              ❮
            </a>
            <div className='mt-[-70px] ml-[-580px]'>
              <span className='text-7xl text-white  '>
                Driving a MotorCycle
              </span>
              <br />
              <span className='text-7xl  text-primary'>is like flying</span>
              <p className='text-white text-2xl my-5'>
                I really love to ride my motorcycle.When i want to just get{' '}
                <br /> away and be by myself and clear my head,that's what i do.
              </p>
              <button className='btn btn-primary text-white border-none w-44 rounded-full'>
                Watch more
              </button>
            </div>
            <a
              href='#slide3'
              className='btn btn-circle text-white border-none bg-primary'
            >
              ❯
            </a>
          </div>
        </div>
        <div id='slide3' className='carousel-item relative w-full'>
          <img
            src={back3}
            alt='background1'
            className='w-full  bg-zinc-900 opacity-75'
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a
              href='#slide2'
              className='btn btn-circle text-white border-none bg-primary'
            >
              ❮
            </a>
            <div className='mt-[-70px] ml-[-580px]'>
              <span className='text-7xl text-white  '>
                Driving a MotorCycle
              </span>
              <br />
              <span className='text-7xl text-primary  '>is like flying</span>
              <p className='text-white text-2xl my-5'>
                I really love to ride my motorcycle.When i want to just get{' '}
                <br /> away and be by myself and clear my head,that's what i do.
              </p>
              <button className='btn bg-primary text-white w-44 rounded-full'>
                Watch more
              </button>
            </div>
            <a
              href='#slide1'
              className='btn btn-circle text-white border-none bg-primary'
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
