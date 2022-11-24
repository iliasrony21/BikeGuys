import React, { useEffect, useState } from 'react'

const Helmet = () => {
  const [helmets, setHelmets] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/helmet')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setHelmets(data)
      })
  }, [])
  return (
    <div>
      <div>
        <h1 className='text-center text-5xl font-semibold text-primary my-5'>
          Brand new Helmet Collections
        </h1>
        <div className='grid grid-cols-3 gap-5 '>
          {helmets.map(helmet => (
            <div key={helmet._id} className='card w-96 bg-base-100 shadow-xl'>
              <figure>
                <img className='h-96 bg-none' src={helmet.img} alt='helmet' />
              </figure>
              <div className='card-body '>
                <h2 className='card-title'>Name: {helmet.name}</h2>
                <p> Price:${helmet.price}</p>
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
    </div>
  )
}

export default Helmet
