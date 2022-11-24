import React, { useEffect, useState } from 'react'

const Jacket = () => {
  const [jackets, setJackets] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/jacket')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setJackets(data)
      })
  }, [])
  return (
    <div>
      <h1 className='text-center text-5xl font-semibold text-primary my-5'>
        Brand new Jacket Collections
      </h1>
      <div className='grid grid-cols-3 gap-5 '>
        {jackets.map(jacket => (
          <div key={jacket._id} className='card w-96 bg-base-100 shadow-xl'>
            <figure>
              <img className='h-96 bg-none' src={jacket.img} alt='jacket' />
            </figure>
            <div className='card-body '>
              <h2 className='card-title'>Name: {jacket.name}</h2>
              <p> Price:${jacket.price}</p>
              <div className='card-actions justify-start'>
                <button className='btn btn-primary text-white'>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Jacket
