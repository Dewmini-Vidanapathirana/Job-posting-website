import React from 'react';
import Heroi from '../Image/imm.jpg'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='h-[100vh]  bg-cover bg-center bg-no-repeat relative -mt-24 z-[-5]' style={{ backgroundImage: `url(${Heroi})` }}>
      <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-30 -z-20"></div>
      <div className='max-w-[100%] flex justify-between'>
        <div className=' justify-center text-center mx-auto text-black mt-[200px] py-2'>
          <h1 className='text-6xl font-semibold text-left text-white'>Find the most exciting startup jobs</h1>

          <p className='mt-24 font-thin text-white text-md '>The Easiest Way To Get Your Dream Job 
            <p className='font-thin text-white text-md'>We have 850,000 great job offers you deservel</p>
            <div className='gap-4 py-10'>
              {/* <Link to="/appoinment"><button className='bg-[#115e59] px-4 py-2 hover:bg-white hover:text-green-600 rounded-lg mr-4'>Booking</button></Link> */}

              <div className='flex justify-between border border-white  max-w-[500px] mx-auto text-gray-400 px-4 py-2 mt-4 items-center rounded-md'>

                <p className='font-semibold text-white text-md'>What Would You Like</p>

                <Link to='/dashboard'>
                  <button className='px-4 py-2 text-white bg-purple-900 border rounded-md hover:bg-transparent hover:border-blue-400 hover:text-blue-400'>Start Finding</button>
                    </Link>

              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero