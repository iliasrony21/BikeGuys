import React, { useEffect, useState } from 'react';
// import { useQuery } from 'react-query';

const AllDetails = ({refetch}) => {
    const [items, setItems] = useState([])

    useEffect(() => {
      fetch('http://localhost:5000/inventories')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])
//     const { data: items, isLoading,refetch } = useQuery('items', () =>
//     fetch('http://localhost:5000/inventories').then(res => res.json())
//   )
//   if(isLoading){
//     return(
//         <p>Loading.....</p>
//     )
//   }

    const handleDelete = id =>{
        fetch(`http://localhost:5000/inventories/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount) {
          alert('Item successfully deleted')
        
         
        }
      })
    }
    return (
    <div>
     <div className="overflow-x-auto mt-5">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>price</th>
        <th>Quantity</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item,index) =><tr>
        <th>{index + 1}</th>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.quantity}</td>
        <button onClick={()=>handleDelete(item._id)} className='btn bg-red-600 rounded-full mb-10 mt-10 w-12 text-white '>X</button>
        <button  className='btn bg-primary mb-10 ml-5 rounded-full w-28 text-white '>cancle</button>
      </tr>)}
    </tbody>
  </table>
</div>
  </div>
 
    )
       
    }  


export default AllDetails;