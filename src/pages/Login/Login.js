import React from 'react';
import './Login.css'
import login from '../../../src/images/login.png'
import useAuth from '../hooks/useAuth';
import { Button } from 'react-bootstrap';
import userEvent from '@testing-library/user-event';

const Login = () => {
    const {signInUsingGoogle, handleSignUp, handleEmail, handlePassword, error, toggleLogin, isLoggedIn, user} = useAuth();
    return (
        <div className="container py-5 h-100">
            <div className="row">
                <div className="col-md-8">
                    <img src={login} alt="" className='img-fluid' width={400} />
                </div>
                <div className="col-md-4">
                <form onSubmit={handleSignUp}>
                <h2 className='text-center text-suecess'>Please {isLoggedIn? 'Login' : 'Register'}</h2>
                   {
                       user.email? <p className='text-danger text-center'>Login Succesful</p>: ''
                   }
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" name='email' onBlur={handleEmail} className="form-control" placeholder="Enter email"  required/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name='password' onBlur={handlePassword} className="form-control" placeholder="Enter password" required/>
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" onChange={toggleLogin} className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Already Registerd</label>
                        </div>
                    </div>
                    <p className='text-danger'> {error}</p>
                    <button type="submit" className="btn btn-success text-center me-auto mt-2">{isLoggedIn? 'Login' : 'Register'}</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                    </form>
                   <Button variant='danger' onClick={signInUsingGoogle}>Google Sign In</Button>
                </div>
            </div>
        </div>

    );
};

export default Login;