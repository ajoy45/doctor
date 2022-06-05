import React from 'react';
import './Footer.css';
import image from '../../images/logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faFaceAngry, faTShirt, faSadCry, } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <div style={{backgroundColor:"#002c5d"}}>
            <div className='footer-container'>
                <div className='ms-3'>
                    <img src={image} alt="" />
                    <p>We bring the years, global experience, and stamina to guide our clients through new and often disruptive realities.</p>
                </div>
                <div>
                    <h1>Services</h1>
                    <p>Business Planning</p>
                    <p>Feasibility Study</p>
                    <p>Startup Funding</p>
                    <p>Business Plan Review</p>
                </div>
                <div>
                    <h1>Pricing & Fees</h1>
                    <p>Compare Insurance Plans</p>
                    <p>Standard Plan – $499</p>
                    <p>Plus Plan – $799</p>
                    <p>Premium Plan – $999</p>
                </div>

                <div>
                    <h1>Connect</h1>
                    <FontAwesomeIcon icon={faCoffee} />
                    <FontAwesomeIcon icon={faFaceAngry} />
                    <FontAwesomeIcon icon={faTShirt} />
                    <FontAwesomeIcon icon={faSadCry} />
                    <p>info@cliniq.com</p>
                    <p>60 East 65th Street, New York</p>

                </div>

            </div>
            <div className='hr-bar'>
               
            </div>
            <p className='text-center text-white p-4'>©2021 CLINIQ. All rights reserved</p>
        </div>

    );
};

export default Footer;