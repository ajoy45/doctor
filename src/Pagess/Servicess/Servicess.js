import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Servicess.css'
const Servicess = () => {
    const [services,setServicess]=useState([]);
    // console.log(services)
    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setServicess(data))
    },[])
    return (
        <div className='row service-container ' id='service'>
            <h1 className='text-center text-primary mt-4'>Medical Services</h1>
            {
                services.map(service=><Service
                key={service.id}
                service={service}
                ></Service>)
            }
        </div>
    );
};

export default Servicess;