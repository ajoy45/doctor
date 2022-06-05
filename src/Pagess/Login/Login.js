import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
const Login = () => {
    const navigate=useNavigate();
    // start singin
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    // end singin
    
    const emailRef=useRef('');
    const passwordRef=useRef('');
    
    const handelFormLogin=event=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        console.log(email,password);
        signInWithEmailAndPassword(email,password)
    }
    // google singin start
    
        const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

    // google singin end
    if(user){
        navigate('/')
    }
    return (
        <div className='bg-color w-50 mx-auto mt-5'>
        <h1 className='text-center pt-3'>Please Login!!</h1>
        <Form onSubmit={handelFormLogin} className='w-50 mx-auto' >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailRef} type="email" placeholder="Enter email"required />
               
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
            </Form.Group>
            
           
            <div className='text-center '>
            <button onClick={()=>signInWithGoogle()} className='d-block mx-auto border-0 mb-2 p-1 w-50'>Google Singin</button>
            <Button className='bg-danger  mb-4 px-4 w-50' variant="primary" type="submit">
                Login
            </Button>
          
            </div>
            
        </Form>
        <p className='text-center pb-4'><Link to='/singup' className='text-decoration-none text-white'>Already Singup?Go to Login</Link></p>
    </div>
    );
};

export default Login;