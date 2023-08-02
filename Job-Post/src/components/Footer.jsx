import React from 'react';
import {
  AiFillDribbbleSquare,
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterSquare
} from 'react-icons/ai';

function Footer() {
  return (
    <div className='px-4 bg-black'>
      <div className='text-gray-100 bg-black max-w-[1240px] mx-auto py-16 grid lg:grid-cols-3 mb-0'>
        <div>
          <h1 className='w-full text-3xl font-bold text-purple-900'>Job Finder</h1>
          <p className='py-4 text-align'>"Connecting Talent with Opportunity: Join our job posting website 
          and unlock a world of career possibilities. We bring together top employers and talented individuals,
           providing a platform where dreams turn into reality. Whether you're a job seeker or an employer, 
           our user-friendly interface and advanced matching algorithms ensure seamless connections and successful placements. 
           Experience the power of our job posting website and discover your next great hire or perfect career move today!"
          </p>
          <div className='flex md:[75%] justify-between my-6'>
            <AiFillDribbbleSquare size={30} className='duration-75 rounded-md cursor-pointer hover:bg-purple-400 ' />
            <AiFillFacebook size={30} className='duration-75 rounded-md cursor-pointer hover:bg-purple-400' />
            <AiFillGithub size={30} className='duration-75 rounded-md cursor-pointer hover:bg-purple-400' />
            <AiFillInstagram size={30} className='duration-75 rounded-md cursor-pointer hover:bg-purple-400' />
            <AiFillTwitterSquare size={30} className='duration-75 rounded-md cursor-pointer hover:bg-purple-400' />
          </div>
        </div>
        <div className='flex justify-between m-4 lg:col-span-3 sm:cols-span-1'>
          <div>
            <h6 className='font-medium text-gray-400'>Solutions</h6>
            <ul>
              <li className='py-2 text-sm cursor-pointer hover:text-gray-200'>Analytics</li>
              <li className='py-2 text-sm cursor-pointer hover:text-gray-200'>Marketing</li>
              <li className='py-2 text-sm cursor-pointer hover:text-gray-200'>Commerce</li>
              <li className='py-2 text-sm cursor-pointer hover:text-gray-200'>Busines</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-gray-400'>Solutions</h6>
            <ul>
              <li className='py-2 text-sm cursor-pointer hover:text-gray-200'>Analytics</li>
              <li className='py-2 text-sm cursor-pointer hover:text-gray-200'>Data Analyst</li>
              <li className='py-2 text-sm cursor-pointer hover:text-gray-200'>Commerce</li>
              <li className='py-2 text-sm cursor-pointer hover:text-gray-200'>Design</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-gray-400'>Solutions</h6>
            <ul>
              <li className='py-2 text-sm hover:text-gray-200'>AI</li>
              <li className='py-2 text-sm hover:text-gray-200'>Networking</li>
              <li className='py-2 text-sm hover:text-gray-200'>Software</li>
              <li className='py-2 text-sm hover:text-gray-200'>Project Manager</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer