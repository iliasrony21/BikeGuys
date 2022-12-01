// import { EmailJSResponseStatus } from '@emailjs/browser'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'
import svg from '../../images/contact.svg'
const Contact = () => {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_882ykyt',
        'template_1ygevew',
        form.current,
        'qPuueJOpW7Qo9Hhf2'
      )
      .then(
        result => {
          console.log(result.text)
          alert('Successfully send the mail')
        },
        error => {
          console.log(error.text)
        }
      )
  }
  return (
    <div className='flex'>
      <div className='contact1 mt-20'>
        <img src={svg} alt='' />
      </div>
      <div className='contact2'>
        <div className='fullPart mt-20 ml-10 '>
          <div className='right-sided '>
            <form
              ref={form}
              onSubmit={sendEmail}
              action=''
              className='flex flex-col gap-5'
            >
              <h1 className='text-center text-white text-4xl '>Contact US </h1>
              <input
                type='text'
                name='user_name'
                placeholder='Name'
                className='input border-2 input-bordered input-primary  w-96'
              />
              <input
                type='text'
                name='user_email'
                placeholder='Email'
                className='input border-2 input-bordered input-primary  w-96'
              />
              <textarea
                className='textarea h-36 w-96 border-2 textarea-primary mb-5'
                name='message'
                placeholder='Message'
              ></textarea>
              <button className='btn bg-white text-black border-none text-center rounded-full w-32 ml-32 mb-5'>
                Send
              </button>
              {/* {/* <span className='text-green-600 text-center text-2xl'> */}
              {/* {done && 'Thanks for contacting me!!'} */}
              {/* </span> */} */
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
