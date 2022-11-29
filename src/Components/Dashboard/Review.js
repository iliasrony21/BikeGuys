import React from 'react';
import { useForm } from 'react-hook-form';

const Review = () => {
    const { register, handleSubmit } = useForm()
  const onSubmit = data => {
    console.log(data)
    const url = `http://localhost:5000/inventories`
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result)
        
        alert('Successfully added')
       
      })
  }
    return (
        <div>
            <div className='contact2'>
        <div className='fullPart mt-20 ml-80 '>
          <div className='right-sided '>
            <form  onSubmit={handleSubmit(onSubmit)} action='' className='flex flex-col gap-5'>
              <h1 className='text-center text-white text-4xl mt-[-40px]'>Added an Item</h1>
              <input
                type='text'     
                placeholder='Product Name'
                className='input border-2 input-bordered input-primary  w-96'
                {...register('name', { required: true, maxLength: 20 })}
              />
              
              <textarea
                className='textarea h-20 w-96 border-2 textarea-primary '
                placeholder='descriptiion'
                {...register('description')}
              ></textarea>
              <input
                type='number'
                placeholder='price'
                className='input border-2 input-bordered input-primary  w-96'
                {...register('price')}
              />
              <input
                type='number'
                placeholder='Quantity'
                className='input border-2 input-bordered input-primary  w-96'
                {...register('quantity')}
              />
              <input
                type='text'
               
                placeholder='supplier name'
                className='input border-2 input-bordered input-primary  w-96'
                {...register('supplierName', { required: true, maxLength: 20 })}
              />
              <input
                type='text'
             
                placeholder='image Url'
                className='input border-2 input-bordered input-primary  w-96'
                {...register('img')}
              />
              <button className='btn bg-white text-black text-center rounded-full w-32 ml-32 mt-[-10px]'>
                Add Service
              </button>
            
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Review;