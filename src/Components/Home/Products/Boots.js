import React, { useEffect, useState } from 'react'

const Boots = () => {
  const [boots, setBoots] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/boots')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setBoots(data)
      })
  }, [])
  return (
    <div>
      <div>
        <h1 className='text-center text-5xl font-semibold text-primary my-5'>
          Brand new Boots Collections
        </h1>
        <div className='grid grid-cols-3 gap-5 '>
          {boots.map(boot => (
            <div key={boot._id} className='card w-96 bg-base-100 shadow-xl'>
              <figure>
                <img className='h-96 bg-none' src={boot.img} alt='jacket' />
              </figure>
              <div className='card-body '>
                <h2 className='card-title'>Name: {boot.name}</h2>
                <p> Price:${boot.price}</p>
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

export default Boots
