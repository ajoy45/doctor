import React from 'react';
import './Team.css';
import image1 from '../../images/team member/team member1.jpg';
import image2 from '../../images/team member/team member2.jpg';
import image3 from '../../images/team member/team member 3.jpg';
import image4 from '../../images/team member/team member 4.jpg';

const Team = () => {
    return (
        <div className='bg'>
            <h1 className='text-center fw-bold'style={{color:"#002c5d"}}>Our Team</h1>
            <p className='text-center fs-4 fst-italic'style={{color:"#6c849f"}}>Delivering world class cardiology care</p>
          <div className='team-container text-center '>
            <div className='bg-white  py-3 ms-5'style={{width:250}}>
                <img width={198} src={image1} alt="" />
                <p className='pt-4' style={{color:"#05cab9"}}>SENIOR CARDIOLOGIST</p>
                <h3 style={{color:"#002c5d"}}>Dr Melissa Dosch</h3>
            </div>
            <div className='bg-white ms-5 py-3 'style={{width:250}}>
                <img width={198} src={image2} alt="" />
                <p className='pt-4' style={{color:"#05cab9"}}>CARDIOLOGIST</p>
                <h3 style={{color:"#002c5d"}}>Dr Vinay Kumar</h3>
            </div>
            <div className='bg-white ms-5 py-3 'style={{width:250}}>
                <img width={198} src={image3} alt="" />
                <p className='pt-4' style={{color:"#05cab9"}}>CARDIOLOGIST</p>
                <h3 style={{color:"#002c5d"}}>Dr Helen J. Curry</h3>
            </div>
            <div className='bg-white  py-3 ms-5' style={{width:250}}>
                <img width={198} src={image4} alt="" />
                <p className='pt-4' style={{color:"#05cab9"}}>CARDIOLOGIST</p>
                <h3 style={{color:"#002c5d"}}>Dr Vitór Santos</h3>
            </div>
        </div>
        </div>
        
    );
};

export default Team;