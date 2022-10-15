import React from 'react';

const Register = () => {
    const hadleRegister = event=>{
        event.preventDefault();
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(password);
    }
    return (
        <div>
          <form onSubmit={hadleRegister}>
          <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password"  password="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>

          </form>

        </div>
    );
};

export default Register;