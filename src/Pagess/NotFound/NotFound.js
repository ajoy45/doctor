import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../../images/banner/2446912.jpg'
const NotFound = () => {
    const navigate=useNavigate()
    return (
        <div>
            <div className='text-center'>
                <img className='w-50 ' src={image} alt="" />

            </div>
            <div className='text-center'>
                <button onClick={()=>navigate('/')} className='btn btn-primary mb-4'>Go To Home</button>
            </div>
        </div>


    );
};

export default NotFound;