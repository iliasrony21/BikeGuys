import React from 'react'
import { useNavigate } from 'react-router-dom'

const ManageItem = ({ item }) => {
  const navigate = useNavigate()
  const showDetails = id => {
    const path = `/inventory/${id}`
    navigate(path)
  }
  return (
    <div>
      <div className='card w-96 h-screen bg-base-100 shadow-xl flex'>
        <figure>
          <img className='h-72 w-96' src={item.img} alt='product' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>Catagories:{item.name}</h2>
          <p>{item.description}</p>
          <span>Price: ${item.price}</span>
          <p>Quantity: {item.quantity}</p>
          <p> Supplier Name: {item.supplierName}</p>
          <div className='card-actions justify-center'>
            <button
              className='btn btn-primary text-white rounded-full w-32'
              onClick={() => showDetails(item._id)}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageItem
