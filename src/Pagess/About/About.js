import React from 'react';
import './About.css';
import image from '../../images/banner/medical-workers-covid-19-vaccination-concept-confident-professional-doctor-female-nurse-blue-scrubs-stethoscope-show-thumbs-up-assure-guarantee-best-quality-service-clinic.jpg'
const About = () => {
    return (
        <div style={{backgroundColor:"#d5d5d7",color:"#002c5d"}} className='d-flex justify-content-center align-items-center '>
            <div>
                <img className='w-100' src={image} alt="" />
            </div>
            <div className='p-3'>
                <h1>Dr.Dipa Sarker</h1>
                <p >Founder-CEO and Managing Director of Medanta – The Medicity and also the founder of the Escorts Heart Institute and Research Centre, is one of the leading and most successful cardiologists in India. He is born to doctor parents in Karachi during the pre-partition period and spent his childhood in a very modest 3-room flat in the Connaught Place area in Delhi. Since both his parents needed one room each for their practice, the entire family, including Dr. Trehan’s sister, Neena, had to remain confined to a single room only. </p>
            </div>
        </div>
    );
};

export default About;