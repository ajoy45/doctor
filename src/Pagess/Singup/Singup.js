import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import './Singup.css'
const Singup = () => {
    // google singin start
    
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

    // google singin end
     // create user start
     const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    // create user end
    const emailRef=useRef('');
    const passwordRef=useRef('');
    const confirmPasswordRef=useRef('');
    const handelFormSubmit=event=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        const confirmPassword=confirmPasswordRef.current.value;
        console.log(email,password,confirmPassword);
        if(password===confirmPassword){
            createUserWithEmailAndPassword(email,password)
        }
       
    }
   
    return (
        <div className='bg-color w-50 mx-auto mt-5'>
            <h1 className='text-center pt-3'>Please Singup!!</h1>
            <Form onSubmit={handelFormSubmit} className='w-50 mx-auto' >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email"required />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>confirm Password</Form.Label>
                    <Form.Control ref={confirmPasswordRef} type="password" placeholder="Password"required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    {/* <Form.Check type="checkbox" label="Terms and conditions" /> */}
                    <input type="checkbox" name="" id="" />
                    <span className='ps-3'>Terms and conditions</span>
                </Form.Group>
                <div className='text-center '>
                <button onClick={()=>signInWithGoogle()} className='d-block mx-auto border-0 mb-2 p-1 w-50'>Google Singin</button>
                <Button className='bg-danger  mb-4 px-4 w-50' variant="primary" type="submit">
                    Singup
                </Button>
              
                </div>
                
            </Form>
            <p className='text-center pb-4'><Link to='/login' className='text-decoration-none text-white'>Already Singup?Go to Login</Link></p>
        </div>
    );
};

export default Singup;