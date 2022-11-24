import React, { useEffect, useState } from 'react'
import Inventory from '../Inventory/Inventory'

const Inventories = () => {
  const [inventory, setInventory] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/inventory')
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setInventory(data)
      })
  }, [])
  return (
    <div>
      <h1 className='text-5xl text-center font-semibold text-primary my-20'>
        Inventory Items
      </h1>
      <div className='flex mx-5 gap-24 ml-24 '>
        {inventory.map(invent => (
          <Inventory key={invent._id} invent={invent}></Inventory>
        ))}
      </div>
    </div>
  )
}

export default Inventories
