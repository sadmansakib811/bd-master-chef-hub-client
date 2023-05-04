import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './providers/AuthProviders';


const Register = () => {
    const [errorState, setErrorstate] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const { user, createUser , signInWithGoogle, signInWithGitHub} = useContext(AuthContext);
    const from = location.state?.from?.pathname || '/';
    const handleRegister = event => {
        event.preventDefault();
    
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        if(password.length<6){
           setErrorstate("password must be at least 6 char")
           
           return ;
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                setErrorstate("")
                setSuccess("SuccessFully Created Account")
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleGitSignIn = () => {
        signInWithGitHub()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Register !</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <div className='flex mb-2'>
                        <p className='ms-2 mr-4'>Log in with:  </p>
                    <button onClick={handleGoogleSignIn} className="btn btn-primary">Google</button>
                    <button onClick={handleGitSignIn} className="btn btn-danger">Github</button>
                    </div>
                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover">Already have an account?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                            <p className=' text-red-600'>{errorState}</p>
                            <h1>{success}</h1>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default Register;