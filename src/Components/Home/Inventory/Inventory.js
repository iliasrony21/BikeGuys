import React from 'react'
import { useNavigate } from 'react-router-dom'

const Inventory = ({ invent }) => {
  const navigate = useNavigate()
  const showDetails = id => {
    const path = `/inventory/${id}`
    navigate(path)
  }
  return (
    <div>
      <div className='card w-96 h-screen bg-base-100 shadow-xl flex'>
        <figure>
          <img className='h-72 w-96' src={invent.img} alt='product' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>Catagories:{invent.name}</h2>
          <p>{invent.description}</p>
          <span>Price: ${invent.price}</span>
          <p>Quantity: {invent.quantity}</p>
          <p> Supplier Name: {invent.supplierName}</p>
          <div className='card-actions justify-center'>
            <button
              className='btn btn-primary text-white rounded-full w-32'
              onClick={() => showDetails(invent._id)}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inventory
