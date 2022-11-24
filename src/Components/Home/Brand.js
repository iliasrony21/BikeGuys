import React from 'react';
import first from '../../images/1.png'
import second from '../../images/2.png'
import third from '../../images/3.png'
import fourth from '../../images/4.png'
import five from '../../images/5.png'
import six from '../../images/6.png'

const Brand = () => {
    return (
        <div className='flex ml-16 my-12'>
            <img className='h-32 w-32 mx-12 ' src={first} alt="" />
            <img className='h-32 w-32 mx-12 ' src={second} alt="" />
            <img className='h-32 w-32 mx-12 ' src={third} alt="" />
            <img className='h-32 w-32 mx-12 ' src={fourth} alt="" />
            <img className='h-32 w-32 mx-12 ' src={five} alt="" />
            <img className='h-32 w-32 mx-12 ' src={six} alt="" />
            
        </div>
    );
};

export default Brand;