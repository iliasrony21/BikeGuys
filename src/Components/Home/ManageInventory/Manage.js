import React, { useEffect, useState } from 'react'
import ManageItem from './ManageItem'

const Manage = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/inventories')
      .then(res => res.json())
      .then(data => setItems(data))
  }, [])

  return (
    <div>
      <div>
        <h1 className='text-5xl text-center font-bold text-primary my-20'>
          All Inventory Items
        </h1>
        <div className='grid grid-cols-3 mx-5 gap-24 ml-24'>
          {items.map(item => (
            <ManageItem key={item._id} item={item}></ManageItem>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Manage
