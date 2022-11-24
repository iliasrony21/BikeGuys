import React from 'react'
import Bikeandjacket from './Bikeandjacket'
import Brand from './Brand'
import Discount from './Discount'
import Inventories from './Inventories/Inventories'
import Navbar from './Navbar'
import ShowHelmet from './ShowHelmet/ShowHelmet'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Brand></Brand>
      <ShowHelmet></ShowHelmet>
      <Inventories></Inventories>
      <Discount></Discount>
      <Bikeandjacket></Bikeandjacket>
      
    </div>
  )
}

export default Home
