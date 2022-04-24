import React from 'react';
import './Login.css'
import login from '../../../src/images/login.png'
import useAuth from '../hooks/useAuth';
import { Button } from 'react-bootstrap';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div className="container py-5 h-100">
            <div className="row">
                <div className="col-md-8">
                    <img src={login} alt="" className='img-fluid' width={400} />
                </div>
                <div className="col-md-4">
                    <h2>Please Login</h2>
                <form>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
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