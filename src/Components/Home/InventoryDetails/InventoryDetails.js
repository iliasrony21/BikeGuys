import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const InventoryDetails = () => {
  const { inventoryId } = useParams()
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/inventory/${inventoryId}`)
      .then(res => res.json())
      .then(data => {
        console.log('inventoryDetails', data)
        setItems(data)
      })
  }, [inventoryId])

  const handleDecrease = () => {
    const newQuantity = parseInt(items.quantity) - 1
    const quantity = newQuantity
    console.log(quantity)
    fetch(`http://localhost:5000/inventory/${inventoryId}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ quantity })
    })
      .then(res => res.json())
      .then(data => {
        console.log('decrease page', data)
        setItems({
          ...items,
          quantity: items.quantity - 1
        })
      })
  }
  const handleIncrease = event => {
    event.preventDefault()
    const newQuantity = items.quantity + parseInt(event.target.number.value)
    const quantity = newQuantity
    console.log(quantity)
    fetch(`http://localhost:5000/inventory/${inventoryId}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ quantity })
    })
      .then(res => res.json())
      .then(data => {
        console.log('decrease page', data)
        setItems({
          ...items,
          quantity: items.quantity + parseInt(event.target.number.value)
        })
      })
  }
  return (
    <div className='flex bg-gray-100'>
      <div className='partOne w-60%'>
        <div className='hero  bg-gray-100'>
          <div className='hero-content flex-col lg:flex-row'>
            <img className='h-screen  w-1/2' src={items.img} alt='' />
            <div>
              <p className='text-2xl font-bold'>Product ID:{items._id}</p>
              <h1 className='text-5xl font-bold'>{items.name}</h1>

              <p className='py-6'>{items.description}</p>
              <span>Price:$ {items.price}</span>
              <br />
              <span className='text-black font-bold'>
                Quantity: {items.quantity}
              </span>
              <br />
              <span>Supplier Name:{items.supplierName}</span>
              <br />
              <button
                onClick={handleDecrease}
                className='btn btn-primary my-5 text-white'
              >
                Delivered
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='partTwo w-40% '>
        <form onSubmit={handleIncrease} action=''>
          <div className='hero min-h-screen bg-gray-100'>
            <div className='hero-content flex-col lg:flex-row-reverse'>
              <div className='card flex-shrink-0 w-96 h-96 max-w-lg shadow-2xl bg-base-100'>
                <div className='card-body'>
                  <h1 className='text-4xl text-primary font-bold ml-10'>
                    Add Quantity
                  </h1>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Email</span>
                    </label>
                    <input
                      type='text'
                      placeholder='email'
                      className='input input-bordered'
                    />
                  </div>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Quantity Item</span>
                    </label>
                    <input
                      type='number'
                      name='number'
                      placeholder='Quantity increase'
                      className='input input-bordered'
                    />
                    <input
                      className='btn btn-primary my-5 text-white'
                      type='submit'
                      value='Add'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default InventoryDetails
