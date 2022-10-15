import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init';
import { Link } from 'react-router-dom';

const auth = getAuth(app)

const RegisterReactBootstrap = () => {
    const [passwordError,setPasswordError] = useState('')
    const [success,setSuccess] = useState(false)
    const hadleRegister = event=>{
        event.preventDefault();
          setSuccess(false);
        const form = event.target;
        const name = form .name.value;
    const email = form.email.value;
    const password  = form.password.value;
    console.log( name , email,password)
    // validate password 
    if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
        setPasswordError('Plaase provider at least two uppercase')
        return;

    }
    if(password.length<6){
        setPasswordError('Plaase should be password 6 characters')
        return;
    }
    if(!/(?=.*[!@#$&*])/.test(password)){
        setPasswordError('please add at least one special characters')
        return;

    }
    setPasswordError('')
  
    createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
        const user = result.user;
        console.log(user)
        setSuccess(true);
        form.reset();
        verifyEmail();
        updateUserName(name);

    })
    .catch(error=>{
        console.log('error',error)
        setPasswordError(error.message);
    })
}
const verifyEmail = ()=>{
    sendEmailVerification(auth.currentUser)
    .then(()=>{
        alert('please check your email and verify ')
    })
}
const updateUserName = (name) =>{
    updateProfile(auth.currentUser,{
        displayName:name
        
    })
    .then(()=>{
        console.log('displa name update name')

    })
    .catch(error => console.log(error))
    

}

   
    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-primary'>Please Register</h3>
            <Form onSubmit={hadleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"name="text" placeholder="name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"name="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <p className='text-danger'>{passwordError}</p>
                    {success && <p className='text-success'>User Create Successflly</p>}
                
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p> already create a account ?please <Link to ='/login'>Login</Link></p>
            </Form>

        </div>
    );
};

export default RegisterReactBootstrap;