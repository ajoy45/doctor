import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Service.css"
const Service = ({ service }) => {
    const { img, name, description, price, list1, list2, list3 } = service;
    const navigate=useNavigate();
    return (
        <div className='col-sm-6 col-md-6 col-lg-3 mt-5 mx-auto mb-4 bg-white gx-3 '>
            <div className='text-center'>
                <img className='service-img' src={img} alt="" />
            </div>
            <h1 className='fs-5 ms-2'>{name}</h1>
            <p className='ms-2'>{description}</p>
            <li className='ms-3'>{list1}</li>
            <li className='ms-3'>{list2}</li>
            <li className='ms-3'>{list3}</li>
              
            <div className='text-center '>
            <h1 className='text-warning fw-bold text-uppercase'>price:${price}</h1>
                <button onClick={()=>navigate('/checkout')} className='border-0 w-50 p-2 bg-primary text-white'>Ckeckout</button>
            </div>

        </div>
    );
};

export default Service;