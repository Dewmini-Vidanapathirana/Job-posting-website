import React, { useState} from 'react';

import { AiOutlineMail } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/admin")
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorCode, errorMessage, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                  });
            });

    }
    
    return (
        <body className="relative z-0 font-sans bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80'})` }} >
            <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-50 -z-20"></div>
            <div className="flex items-center justify-center h-screen ">
                <div className="px-8 py-8 text-white bg-transparent border border-white rounded-lg shadow-lg w-96">
                    <h1 className="text-4xl font-semibold text-center ">Login</h1>
                    <div className="flex flex-col mt-2"> 
                        <label className="mb-1 text-xl font-semibold ">Email</label>
                        <input className="px-2 py-1 text-white bg-transparent border border-white focus:outline-none focus:ring-0 focus:border-white"
                            type="email" placeholder="Enter Email" 
                            onChange={(e) => setEmail(e.target.value)}
                            />
                    </div>
                    <div className="flex flex-col mt-2">
                        <label className="mb-1 text-xl font-semibold " >Password</label>
                        <input className="px-2 py-1 text-white bg-transparent border border-white focus:outline-none focus:ring-0 focus:border-white"
                            type="password" placeholder="Enter Password"
                            onChange={(e) => setPassword(e.target.value)}
                            />
                    </div>
                    <div className="flex justify-between mt-4 text-sm">
                        <div className='flex flex-col'>
                            <label >Don't Have an account</label>
                            <Link to='/signup'>Signup</Link>
                        </div>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button
                        className="w-full py-2 mt-6 text-white bg-purple-900 border rounded-md hover:bg-transparent hover:text-white hover:border-white" onClick={onLogin}>Login</button>
                </div>
            </div>
        </body>
    )
}

export default Login