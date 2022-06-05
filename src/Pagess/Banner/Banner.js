import React from 'react';
import './Banner.css'
import image from '../../images/banner/baneer logo.png';
import image2 from '../../images/banner/happy-doctor-holding-clipboard-with-patients.png'
const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner-description'>
                <img className='w-50 mt-4 ms-5' src={image} alt="" />
                <h1 className='display-1 w-100 ms-5'>cliniq</h1>
                <p className=' fs-3 w-100 ms-5'>Better Treatment For Paitent,<br></br> Clinic and Medical Center</p>
            </div>
            <div>
                <img className='w-100' src={image2}alt="" />
            </div>
        </div>
    );
};

export default Banner;