import React from 'react';
import { Link } from 'react-router-dom';
 import Logo from './Image/logo.png';


const Navbar = () => {
  return (
    <div className='text-black bg-purple-100 shadow-md '>
      <div className='max-w-[90%] mx-auto flex justify-between items-center'>
        <div className='flex items-center w-24 cursor-pointer'>
          <img className='w-26 h-18' src={Logo} alt="rrtr"/> 
          <div>
            <Link to='/'><h2 className='text-2xl font-semibold text-purple-900 uppercase border-b-2'>Job Finder</h2></Link>
            
          </div>
        </div>
        <div className='flex'>
          <ul className='flex gap-6 px-4 py-2 text-xl font-semibold'>
            <li>
              <Link to='#' className='hover:text-purple-300'>HOME</Link>
            </li>
            <li>
              <Link to='about' className='hover:text-purple-300'>ABOUT</Link>
            </li>

            <li>
              <Link to='appoinment' className=' hover:text-purple-300'>BLOG</Link>
            </li>
            <li>
              <Link to='job' a className='hover:text-purple-300' href="">FIND A JOB</Link>
            </li>
            <li>
              <Link to='contact' className='hover:text-purple-300'>CONTACT </Link>
            </li>
          </ul>
        </div>
        <div className='flex gap-4 '>

         
          <Link to='/login'className='px-4 py-2 text-white bg-purple-900 border rounded-md hover:bg-white border-2-green-600 w-30 text-xxl hover:text-black'><button>Login</button></Link>

        </div>
         {/* <div className='p-2 px-4 py-2 text-white bg-blue-400 border rounded-md hover:bg-white border-2-green-600 w-30 text-xxl hover:text-black'>

          <Link to='/login'><button>Login</button></Link>

        </div>  */}
      </div>
    </div>
  )
}

export default Navbar