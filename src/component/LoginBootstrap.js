import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';


const auth = getAuth (app)

const LoginBootstrap = () => {
    const [success,setSuccess] = useState(false);
    const [userEmail,setUserEmail] = useState('');
    const handleSubmit= event =>{
        event.preventDefault();
       setSuccess(false);
        const form = event.target;
        const email = form. email.value;
        const password = form.password.value;
        console.log(password)

        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setSuccess(true);
        })
        .catch(error=>{
            console.error('error',error)
        })
    }
    const handleEmailBlur = event =>{
        const email = event.target.value;
        setUserEmail(email);
        console.log(email);

    }
     const handleFoget =()=>{
        if(!userEmail){
            alert('Pleace enter your email sent  check your email')
        }
        return;
        sendPasswordResetEmail(auth,userEmail)
        .then(()=>{
            alert('password reset email sent. please check your email.')

        })
        .catch(error=>{
            console.error(error);
        })

     }



    return (
        <div className='w-50 mx-auto'>
            <form onSubmit={handleSubmit}>
                <h3 className='text-success'>Please Login</h3>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                    <input onBlur={handleEmailBlur} type="email"  name="email"className="form-control" id="formGroupExampleInput" placeholder="Email" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                    <input type="password" name="password"className="form-control" id="formGroupExampleInput2" placeholder="Password" required/>
                </div>
                <button type="button" className="btn btn-primary">Login</button>
            </form>
            {success && <p>Successflly login to the auccount</p>}
            <p>New to this website?please <Link to ='/register'>Register</Link></p>
            <p><small>Forget password?<button type="button" onClick={handleFoget} class=""> please  Reaset </button></small></p>
        </div>
    );
};

export default LoginBootstrap;